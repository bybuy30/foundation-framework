import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import background image (Vite handles assets this way)
import bg from "@/assets/images/bg.jpeg";

/**
 * Auth Page
 * - Mounted at "/auth" (opened from the header's Login/Sign Up button)
 * - Signup asks for name, email, password, confirm password, age and gender
 * - Login asks for email and password
 * - On success we store the JWT token (and basic user profile) in localStorage and redirect to home ("/")
 */
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  // Controlled form state for both login and signup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  // If the user already has a token, redirect to home ("/")
  // (This avoids showing login to already authenticated users who manually hit /auth)
  if (typeof window !== "undefined") {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      navigate("/");
    }
  }

  // Helper to show simple alerts/errors
  const handleError = (msg: string) => {
    setError(msg);
    setTimeout(() => setError(null), 5000);
  };

  // Client-side validation for signup
  const validateSignup = () => {
    if (!name || !email || !password || !confirm || !age || !gender) {
      handleError("Please fill all signup fields.");
      return false;
    }

    if (password !== confirm) {
      handleError("Passwords do not match.");
      return false;
    }

    return true;
  };

  // Call backend API for signup
  const signup = async () => {
    if (!validateSignup()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send signup payload expected by the backend
        body: JSON.stringify({ name, email, password, age: Number(age), gender }),
      });

      // Safely parse JSON — backend might return empty/invalid body
      const text = await res.text();
      let data: any = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch (e) {
        console.error("Signup: invalid JSON response:", text);
      }

      if (!res.ok) {
        handleError(data?.message || `Signup failed (status ${res.status})`);
        setLoading(false);
        return;
      }

      // Store token and basic profile information returned by the backend
      // so that the header can render the user's initial and auth state.
      localStorage.setItem("token", data.token);
      if (data.user) {
        localStorage.setItem("userName", data.user.name ?? "");
        localStorage.setItem("userEmail", data.user.email ?? "");
      }
      // Redirect to the landing (home) page
      navigate("/");
    } catch (err: any) {
      handleError("Network error during signup: " + (err?.message || String(err)));
    } finally {
      setLoading(false);
    }
  };

  // Call backend API for login
  const login = async () => {
    if (!email || !password) {
      handleError("Please provide email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Safely parse JSON — backend might return empty/invalid body
      const text = await res.text();
      let data: any = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch (e) {
        console.error("Login: invalid JSON response:", text);
      }

      if (!res.ok) {
        handleError(data?.message || `Login failed (status ${res.status})`);
        setLoading(false);
        return;
      }

      // Persist token and user info so we can derive auth state and badge initial
      localStorage.setItem("token", data.token);
      if (data.user) {
        localStorage.setItem("userName", data.user.name ?? "");
        localStorage.setItem("userEmail", data.user.email ?? "");
      }
      // Redirect to home page after successful login
      navigate("/");
    } catch (err: any) {
      // Show network error details for debugging
      handleError("Network error during login: " + (err?.message || String(err)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="backdrop-blur-sm bg-white/30 rounded-xl shadow-lg max-w-md w-full p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">HydroNest</h1>

        {/* Toggle between Login & Signup */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded ${isLogin ? "bg-primary text-white" : "bg-white/50"}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded ${!isLogin ? "bg-primary text-white" : "bg-white/50"}`}
          >
            Sign Up
          </button>
        </div>

        {error && <div className="text-sm text-red-600 mb-4">{error}</div>}

        {/* Form */}
        <div className="space-y-4">

            <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded border text-black"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded border text-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded border text-black"
          />

          {!isLogin && (
            <>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full p-3 rounded border text-black"
              />

              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 rounded border text-black"
              />

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-3 rounded border text-black"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </>
          )}

          <button
            disabled={loading}
            onClick={isLogin ? login : signup}
            className="w-full py-3 rounded bg-primary text-white font-semibold"
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
          </button>

          {/* Standard part of login - show a small note */}
          <div className="text-xs text-muted-foreground text-center mt-2">
            By continuing you accept our Terms & Conditions and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
