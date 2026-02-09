import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, Heart, Clock, ChefHat } from "lucide-react";
import MainHeader from "@/components/headers/MainHeader";
import FooterSection from "@/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { type ProductDetail } from "@/data/product";
import { getProductDetail } from "@/data/product";
import { getRecipeById } from "@/data/recipes";
import { type Recipe } from "@/data/recipes/types";
import ContactSection from "@/sections/ContactSection";

// Interface for wishlist items that can be either a product or a recipe
interface WishlistItem {
  id: number;
  itemType: "product" | "recipe";
  name: string;
  price?: number;
  image: string;
  meta?: string; // For recipes: cooking time, difficulty, etc.
}

const WishlistPage = () => {
  // State to track all wishlist items (both products and recipes)
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch wishlist data on component mount
  useEffect(() => {
    fetchWishlist();
  }, []);

  // Function to fetch wishlist from backend and enrich with product/recipe data
  const fetchWishlist = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      // Fetch raw wishlist data (contains itemType and itemId) from MongoDB
      const response = await fetch("/api/wishlist", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();

      console.log("Raw wishlist data from backend:", data);

      // Map raw wishlist data to enriched items with product/recipe details
      const enrichedItems: WishlistItem[] = (data.wishlist || [])
        .map((item: any) => {
          // Check if item is a product or recipe
          if (item.itemType === "product") {
            // Fetch product details from local product data by ID
            const product = getProductDetail(item.itemId);
            if (!product) return null;

            return {
              id: product.id,
              itemType: "product" as const,
              name: product.name,
              price: product.price,
              // Use first image from product images array, fallback to product image
              image: product.images?.[0] || product.image || "/placeholder.png",
            };
          } else if (item.itemType === "recipe") {
            // Fetch recipe details from local recipe data by ID
            const recipe = getRecipeById(item.itemId);
            if (!recipe) return null;

            return {
              id: recipe.id,
              itemType: "recipe" as const,
              name: recipe.name,
              image: recipe.heroImage || recipe.secondaryImage || "/placeholder.png",
              // Include metadata for recipes like cooking time and difficulty
              meta: `${recipe.cookingTime || "N/A"} • ${recipe.difficulty || "N/A"}`,
            };
          }

          return null;
        })
        // Filter out any null entries (products/recipes that don't exist)
        .filter((item: WishlistItem | null): item is WishlistItem => item !== null);

      setWishlistItems(enrichedItems);
    } catch (err) {
      console.error("Error fetching wishlist", err);
    } finally {
      setLoading(false);
    }
  };

  // Function to remove items from wishlist - specifies itemType in query param
  const removeFromWishlist = async (id: number, itemType: "product" | "recipe") => {
    const token = localStorage.getItem("token");
    try {
      // Send DELETE request with itemType as query parameter for accurate removal
      const response = await fetch(`/api/wishlist/${id}?itemType=${itemType}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        // Update UI by removing the specific item from state
        setWishlistItems((prev) =>
          prev.filter((item) => !(item.id === id && item.itemType === itemType))
        );
      }
    } catch (err) {
      console.error("Failed to remove item", err);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <MainHeader />

      <main className="container mx-auto px-4 pt-28 pb-12">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-red-500 fill-red-500" />
          <h1 className="text-4xl font-bold">My Wishlist</h1>
        </div>

        {loading ? (
          // Loading state: show spinner and message
          <div className="text-center py-20 flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="text-muted-foreground">Loading your favorites...</p>
          </div>
        ) : wishlistItems.length === 0 ? (
          // Empty state: show empty message with action button
          <div className="text-center py-20 bg-muted rounded-2xl">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-medium mb-4">Your wishlist is empty</h2>
            <Button onClick={() => navigate("/")}>Start Shopping</Button>
          </div>
        ) : (
          // Grid display of all wishlist items (products and recipes)RECENTLY EDITED
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div key={`${item.itemType}-${item.id}`} className="relative group">
                {/* Remove Button - Appears on hover */}
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 z-10 rounded-full w-8 h-8 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlist(item.id, item.itemType);
                  }}
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>

                {/* Render Product Card UI Style */}
                {item.itemType === "product" ? (
                  <div className="select-none flex flex-col w-full shadow-sm hover:shadow-lg transition-shadow">
                    <div
                      onClick={() => navigate(`/product/${item.id}`)}
                      className="relative bg-[#f3f3f3] w-full aspect-[299/300] overflow-hidden flex items-center justify-center cursor-pointer"
                    >
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div
                      onClick={() => navigate(`/product/${item.id}`)}
                      className="p-4 text-white relative bg-[#4A613D] cursor-pointer"
                      style={{ height: "125px" }}
                    >
                      <h2 className="text-xl font-medium leading-tight tracking-tight line-clamp-2">{item.name}</h2>
                      <div className="absolute bottom-4 left-4 flex items-baseline gap-1">
                        <span className="text-2xl font-light">₹</span>
                        <span className="text-5xl font-bold leading-none">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Render Recipe Card UI Style */
                  <div
                    className="w-full rounded-lg overflow-hidden border bg-background hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => navigate(`/recipe/${item.id}`)}
                  >
                    <div className="relative h-56 bg-muted overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-3 line-clamp-2">{item.name}</h3>
                      <div className="text-sm font-bold flex items-center gap-2 text-muted-foreground">
                        <span>Time:</span>
                        <span>{item.meta?.split(" • ")[0] || "N/A"}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default WishlistPage;