import { Schema, model } from "mongoose";

const AuthLogSchema = new Schema(
  {
    // The user associated with this wishlist item (using email or ID)
    userEmail: { type: String, required: true },
    
    // The ID of the item from your frontend (Product ID or Recipe ID)
    itemId: { type: Number, required: true },

    // To tell the database if this is a product or a recipe
    itemType: { 
      type: String, 
      enum: ["product", "recipe"], 
      required: true 
    },

    // Metadata for the wishlist page (optional but helps performance)
    name: { type: String },
    image: { type: String },
    price: { type: String }, // Price for products, can be empty for recipes
  },
  { timestamps: true }
);

// This ensures a user cannot add the same product/recipe to their wishlist twice
AuthLogSchema.index({ userEmail: 1, itemId: 1, itemType: 1 }, { unique: true });

export default model("AuthLog", AuthLogSchema);