import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User";
import AuthLog from "../models/AuthLog";

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

// Helper to consistently shape the auth response payload
// so the frontend can store token and basic profile data
const buildAuthResponse = (user: any) => {
  return {
    token: jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" }),
    user: {
      name: user.name,
      email: user.email,
    },
  };
};

// Register endpoint
// - validate payload (name, email, password, age, gender)
// - check duplicate email
// - hash password and save user document
// - write an auth log entry for observability
// - return a JWT token and basic user profile that the frontend stores client-side
router.post("/register", async (req, res) => {
  const { name, email, password, age, gender } = req.body;
  const ip = req.ip;

  try {
    if (!name || !email || !password || !age || !gender) {
      await AuthLog.create({ email, success: false, type: "register", ip, message: "missing fields" });
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      await AuthLog.create({ email, success: false, type: "register", ip, message: "email exists" });
      return res.status(409).json({ message: "Email already registered" });
    }

    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

    // Persist a normalized user document in MongoDB
    const user = await User.create({ name, email, passwordHash: hash, age, gender });

    // Build token + basic profile response for the client
    const payload = buildAuthResponse(user);

    await AuthLog.create({ email, success: true, type: "register", ip, message: "registered" });

    return res.status(201).json(payload);
  } catch (err: any) {
    console.error("Register error", err);
    await AuthLog.create({ email, success: false, type: "register", ip, message: String(err?.message || err) });
    return res.status(500).json({ message: "Server error" });
  }
});

// Login endpoint
// - find user
// - compare password
// - write an auth log
// - return a JWT token and basic profile
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const ip = req.ip;

  try {
    if (!email || !password) {
      await AuthLog.create({ email, success: false, type: "login", ip, message: "missing" });
      return res.status(400).json({ message: "Missing email or password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      await AuthLog.create({ email, success: false, type: "login", ip, message: "user not found" });
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      await AuthLog.create({ email, success: false, type: "login", ip, message: "invalid password" });
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Build token + profile response using the helper for consistency
    const payload = buildAuthResponse(user);

    await AuthLog.create({ email, success: true, type: "login", ip, message: "logged in" });

    return res.json(payload);
  } catch (err: any) {
    console.error("Login error", err);
    await AuthLog.create({ email, success: false, type: "login", ip, message: String(err?.message || err) });
    return res.status(500).json({ message: "Server error" });
  }
});

// Logout endpoint
// - Since we are using JWT, the server doesn't "delete" the token
// - We create a log entry for security auditing
// - The frontend is responsible for deleting the token from localStorage
router.post("/logout", async (req, res) => {
  const { email } = req.body; // Frontend can send the email for logging purposes
  const ip = req.ip;

  try {
    // 1. Log the logout event in your AuthLog model
    await AuthLog.create({ 
      email: email || "unknown", 
      success: true, 
      type: "logout", 
      ip, 
      message: "user logged out" 
    });

    // 2. Respond to the frontend
    return res.status(200).json({ message: "Successfully logged out" });
  } catch (err: any) {
    console.error("Logout error", err);
    return res.status(500).json({ message: "Server error during logout" });
  }
});

export default router;
