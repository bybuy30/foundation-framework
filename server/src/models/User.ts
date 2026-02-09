import { Schema, model } from "mongoose";

// Mongoose schema for a User
// - name: display name
// - email: unique identifier
// - passwordHash: bcrypt hashed password
// - age, gender: extra signup fields
// - wishlist: array of product/recipe references stored by type + id
// - createdAt: timestamp

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    // Wishlist items - each entry stores what kind of entity the user saved and its numeric id
    wishlist: [
      {
        itemType: { type: String, enum: ["product", "recipe"], required: true },
        itemId: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default model("User", UserSchema);
