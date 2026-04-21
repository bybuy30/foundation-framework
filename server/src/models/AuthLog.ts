import { Schema, model } from "mongoose";

const AuthLogSchema = new Schema(
  {
    // Get wishlist item
    userEmail: { type: String, required: true },
    
    // item id
    itemId: { type: Number, required: true },

    // Database type (product or recipe)
    itemType: { 
      type: String, 
      enum: ["product", "recipe"], 
      required: true 
    },

    //details for the wishlist page 
    name: { type: String },
    image: { type: String },
    price: { type: String }, 
  },
  { timestamps: true }
);

// NO duplicate entries
AuthLogSchema.index({ userEmail: 1, itemId: 1, itemType: 1 }, { unique: true });

export default model("AuthLog", AuthLogSchema);