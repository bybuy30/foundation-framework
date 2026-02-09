import { useState, useEffect } from "react";
import { Search, Heart, User, Menu, X, } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { mainNavLinks } from "@/data/navigation";
import logo from "@/assets/images/logo.png";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Track whether a user is currently authenticated based on presence of a token
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    typeof window !== "undefined" ? Boolean(localStorage.getItem("token")) : false
  );
  // Store the user's display name initial for the profile badge
  const [userInitial, setUserInitial] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Initialize auth-related state from localStorage on mount
    const syncAuthStateFromStorage = () => {
      const token = localStorage.getItem("token");
      const name = localStorage.getItem("userName") || "";
      const email = localStorage.getItem("userEmail") || "";
      setIsAuthenticated(Boolean(token));
      // Prefer first letter of name, fall back to email, otherwise nothing
      const source = name || email;
      setUserInitial(source ? source.trim().charAt(0).toUpperCase() : null);
    };

    syncAuthStateFromStorage();

    // Keep header in sync when other tabs update auth-related localStorage entries
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "token" || event.key === "userName" || event.key === "userEmail") {
        syncAuthStateFromStorage();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  // Handler that sends a logout event to the backend (for logging),
  // clears local auth state (token + profile info) and returns the user to the landing page.
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      // Clear all locally stored auth data so header correctly reflects logged-out state
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      setIsAuthenticated(false);
      setUserInitial(null);
      navigate("/");
    }
  };

  // Navigate the user to the auth page when they click "Log in / Sign up"
  const handleAuthRedirect = () => {
    navigate("/auth");
  };

  return (
    <header className={`header-main transition-all duration-300 ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container mx-auto px-4">
        {/* Top Row - Logo, Search, Icons */}
        <div className="flex items-center justify-between h-14">
          {/* Logo navigates to the home/landing page */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-12" />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
              <input
                type="text"
                placeholder="Search..."
                className="search-bar w-full pl-10 text-black"
              />
            </div>
          </div>

          {/* Icons and Auth Controls */}
          <div className="flex items-center gap-4">
            <Link
              to="/wishlist"
              className="p-2 hover:bg-foreground/10 rounded-full transition-colors flex items-center"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </Link>

            {/* When authenticated, show profile badge + Logout */}
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                {/* Profile badge showing the user's first initial */}
                <div
                  className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold"
                  aria-label="User profile"
                >
                  {userInitial ?? <User className="w-4 h-4" />}
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-red-50 text-red-600 rounded-full transition-colors flex items-center gap-2"
                  aria-label="Logout"
                >
                  <span className="hidden lg:inline text-sm font-medium">Logout</span>
                </button>
              </div>
            ) : (
              // When logged out, show a single Log in / Sign up CTA
              <button
                onClick={handleAuthRedirect}
                className="px-4 py-1.5 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
                aria-label="Log in or sign up"
              >
                <User className="w-4 h-4" />
                <span>Log in / Sign up</span>
              </button>
            )}

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 hover:bg-foreground/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Navigation Row - Desktop */}
        <nav className="hidden md:flex items-center gap-8 h-10">
          {mainNavLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
              <input
                type="text"
                placeholder="Search..."
                className="search-bar w-full pl-10 text-black"
              />
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.href}
                  className="py-2 text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile auth-related controls */}
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="py-2 text-red-600 text-left hover:text-red-700 transition-colors flex items-center gap-2"
                >
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleAuthRedirect();
                  }}
                  className="py-2 text-primary text-left hover:text-primary/80 transition-colors flex items-center gap-2"
                >
                  <User className="w-4 h-4" /> Log in / Sign up
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;