import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// userId property.
export interface AuthenticatedRequest extends Request {
  userId?: string;
}

// verifying JWT tokens (should match the one used while signing up)
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

/**
 * JWT authentication middleware
 * - Reads the "Authorization: Bearer <token>" header
 * - Verifies the token
 * - Attaches the user id to req.userId for downstream handlers
 * - Returns 401 if the token is missing or invalid
 */
export const requireAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  // Reject if no Authorization 
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify and decode the JWT payload
    const decoded = jwt.verify(token, JWT_SECRET) as { sub?: string };

    if (!decoded?.sub) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    // Attach the user id to the request for later use
    req.userId = decoded.sub;

    // Continue to the next route handler
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

