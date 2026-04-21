import { Router } from "express";
import User from "../models/User";
import { requireAuth, type AuthenticatedRequest } from "../middleware/auth";

const router = Router();

/**
 * POST /api/wishlist
 * - Adds a product or recipe to the authenticated user's wishlist
 * - Stores the item type (product/recipe) and item ID in MongoDB for the specific user
 * - Body: { itemType: "product" | "recipe", itemId: number }
 * - Returns: Updated wishlist array after successful addition
 * - Note: Duplicate entries are prevented automatically
 */
router.post(
  "/",
  requireAuth,
  async (req: AuthenticatedRequest, res) => {
    const { itemType, itemId } = req.body as {
      itemType?: "product" | "recipe";
      itemId?: number;
    };

    // Validate that itemType and itemId are provided and itemType is valid
    if (!itemType || !itemId || !["product", "recipe"].includes(itemType)) {
      return res.status(400).json({ message: "Invalid wishlist payload" });
    }

    try {
      // Load the current user from MongoDB by ID (set by auth middleware)
      const user = await User.findById(req.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Initialize wishlist array if it does not exist for this user
      const wishlist = user.wishlist || [];

      // Check if this item is already in the user's wishlist (prevent duplicates)
      const alreadyExists = wishlist.some(
        (entry: any) =>
          entry.itemType === itemType && entry.itemId === itemId
      );

      // Only add if the item doesn't already exist
      if (!alreadyExists) {
        wishlist.push({ itemType, itemId });
        user.wishlist = wishlist;
        await user.save();
      }

      // Return the updated wishlist to the client
      return res.status(200).json({ wishlist: user.wishlist });
    } catch (err: any) {
      console.error("Wishlist add error", err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

/**
 * GET /api/wishlist
 * - Returns the complete wishlist for the authenticated user
 * - Returns array of wishlist items with itemType and itemId for frontend
 * - Used to fetch all wishlist items for the wishlist page
 * - Returns empty array if user has no wishlist items
 */
router.get(
  "/",
  requireAuth,
  async (req: AuthenticatedRequest, res) => {
    try {
      // Load the current user from MongoDB by ID
      const user = await User.findById(req.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Return the wishlist array containing all items (products and recipes)
      return res.status(200).json({ wishlist: user.wishlist || [] });
    } catch (err: any) {
      console.error("Wishlist fetch error", err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

/**
 * GET /api/wishlist/check/:itemId
 * - Checks if a specific product or recipe is in the authenticated user's wishlist
 * - Query params: ?itemType=product|recipe (defaults to "product" if not provided)
 * - Returns: { isWishlisted: boolean }
 * - Used by ProductDetail and RecipeDetail pages to show/hide wishlist icon
 */
router.get(
  "/check/:itemId",
  requireAuth,
  async (req: AuthenticatedRequest, res) => {
    const { itemId } = req.params;
    const { itemType, type } = req.query as {
      itemType?: "product" | "recipe";
      type?: "product" | "recipe";
    };

    // Validate itemId is a number
    const numItemId = parseInt(itemId, 10);
    if (isNaN(numItemId)) {
      return res.status(400).json({ message: "Invalid itemId" });
    }

    try {
      // Load the current user from MongoDB
      const user = await User.findById(req.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Determine the item type - support both itemType and type query params for flexibility
      const finalItemType = (itemType || type || "product") as "product" | "recipe";

      // Check if the item exists in the user's wishlist by matching both type and id
      const isWishlisted = (user.wishlist || []).some(
        (entry: any) =>
          entry.itemType === finalItemType && entry.itemId === numItemId
      );

      // Return whether the item is in the wishlist
      return res.status(200).json({ isWishlisted });
    } catch (err: any) {
      console.error("Wishlist check error", err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

/**
 * DELETE from wishlist
 * Returns updated wishlist after removal
 */
router.delete(
  "/:itemId",
  requireAuth,
  async (req: AuthenticatedRequest, res) => {
    const { itemId } = req.params;
    const { itemType } = req.query as { itemType?: "product" | "recipe" };

    // Validate that itemType
    if (!itemType || !["product", "recipe"].includes(itemType)) {
      return res.status(400).json({ message: "Invalid itemType query parameter" });
    }

    // Validate that itemId as a number
    const numItemId = parseInt(itemId, 10);
    if (isNaN(numItemId)) {
      return res.status(400).json({ message: "Invalid itemId" });
    }

    try {
      // Load the current user by id 
      const user = await User.findById(req.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const updatedWishlist = (user.wishlist || []).filter(
        (entry: any) =>
          !(entry.itemType === itemType && entry.itemId === numItemId)
      );

      // Update user's wishlist
      user.wishlist = updatedWishlist;
      await user.save();

      // Return the updated wishlist
      return res.status(200).json({ wishlist: user.wishlist });
    } catch (err: any) {
      console.error("Wishlist delete error", err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

export default router;
