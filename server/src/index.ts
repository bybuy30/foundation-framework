import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth";
import wishlistRoutes from "./routes/wishlist";
import contactRoutes from "./routes/contact";

// Load environment from .env file
dotenv.config();

const MONGO = process.env.MONGO_URI || "";
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

const app = express();

// Middlewares
app.use(express.json()); 
app.use(cookieParser());
// Avoid CORS errors
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:8080"], credentials: true })); // allow dev clients
app.use(morgan("dev")); 

// Routes
app.use("/api/auth", authRoutes);
// Wishlist routes are protected via the JWT middleware 
app.use("/api/wishlist", wishlistRoutes);
// Contact form 
app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => res.json({ ok: true }));

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(MONGO);
    console.log("Successfully Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
})();
