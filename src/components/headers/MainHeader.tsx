import { useState, useEffect, useRef } from "react";
import { Search, Heart, User, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { mainNavLinks } from "@/data/navigation";
import logo from "@/assets/images/Logo.png";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Array<any>>([]);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Manage authentication state locally
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    typeof window !== "undefined"
      ? Boolean(localStorage.getItem("token"))
      : false
  );

  const [userInitial, setUserInitial] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Route detection for context-aware searching
  const isRecipesPage = location.pathname === "/recipes";
  const isProductsPage = location.pathname === "/products";

  /**
   * Routes search queries based on the current page context.
   * If on recipes/products page, it filters that page. Otherwise, goes to global search.
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    const targetPath = isRecipesPage
      ? "/recipes"
      : isProductsPage
      ? "/products"
      : "/search";

    navigate(`${targetPath}?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery("");
  };

  // Build client-side suggestions from local data
  useEffect(() => {
    // Lazy import to keep bundle small
    if (!searchQuery.trim()) {
      setSuggestions([]);
      setIsSuggestionsOpen(false);
      return;
    }

    (async () => {
      const q = searchQuery.trim().toLowerCase();
      const [{ products }, recipesModule] = await Promise.all([
        import("@/data/products"),
        import("@/data/recipes"),
      ]);

      const allRecipes = recipesModule.getAllRecipes();

      const matchedProducts = products
        .filter((p: any) => p.name.toLowerCase().includes(q))
        .slice(0, 4)
        .map((p: any) => ({ type: "product", id: p.id, name: p.name }));

      const matchedRecipes = allRecipes
        .filter((r: any) => r.name.toLowerCase().includes(q))
        .slice(0, 4)
        .map((r: any) => ({ type: "recipe", id: r.id, name: r.name }));

      const combined = [...matchedProducts, ...matchedRecipes].slice(0, 6);
      setSuggestions(combined);
      setIsSuggestionsOpen(combined.length > 0);
    })();
  }, [searchQuery]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (e.target instanceof Node && !containerRef.current.contains(e.target)) {
        setIsSuggestionsOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    // Header styling update on scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Synchronize UI with user data stored in localStorage
    const syncAuthStateFromStorage = () => {
      const token = localStorage.getItem("token");
      const name = localStorage.getItem("userName") || "";
      const email = localStorage.getItem("userEmail") || "";

      setIsAuthenticated(Boolean(token));

      // Derive initial from name or email for profile icon
      const source = name || email;
      setUserInitial(
        source ? source.trim().charAt(0).toUpperCase() : null
      );
    };

    syncAuthStateFromStorage();

    // Listen for storage changes across different tabs
    const handleStorage = (event: StorageEvent) => {
      if (
        ["token", "userName", "userEmail"].includes(event.key!)
      ) {
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

  /**
   * Logs out the user by notifying the backend and clearing local storage.
   */
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
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      setIsAuthenticated(false);
      setUserInitial(null);
      navigate("/");
    }
  };

  const handleAuthRedirect = () => {
    navigate("/auth");
  };

  return (
    <header
      className={`header-main transition-all duration-300 ${
        isScrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Brand Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-12" />
          </Link>

          {/* Context-aware Desktop Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full" ref={containerRef}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                onFocus={() => setIsSuggestionsOpen(suggestions.length > 0)}
                placeholder={isRecipesPage ? "Search recipes..." : "Search products..."}
                className="search-bar w-full pl-10 text-white"
                aria-autocomplete="list"
                aria-expanded={isSuggestionsOpen}
              />

              {/* Suggestions dropdown */}
              {isSuggestionsOpen && (
                <ul className="absolute z-50 left-0 right-0 bg-[#43856d] border rounded mt-2 max-h-64 overflow-auto shadow-lg hover:text-black">
                  {suggestions.map((s, idx) => (
                    <li
                      key={`${s.type}-${s.id}-${idx}`}
                      className="px-4 py-2 cursor-pointer flex items-center gap-3 hover:bg-white/10 hover:text-white transition-colors duration-200"
                      onClick={() => {
                        setIsSuggestionsOpen(false);
                        setSearchQuery("");
                        if (s.type === "product") navigate(`/product/${s.id}`);
                        else navigate(`/recipe/${s.id}`);
                      }}
                    >
                      <span className="text-sm text-muted-foreground">{s.type}</span>
                      <span className="text-sm font-medium text-foreground">{s.name}</span>
                    </li>
                  ))}
                  {suggestions.length === 0 && (
                    <li className="px-4 py-2 text-sm text-muted-foreground">No results</li>
                  )}
                </ul>
              )}
            </div>
          </form>

          {/* Right-side Utilities */}
          <div className="flex items-center gap-4">
            <Link
              to="/wishlist"
              className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
            >
              <Heart className="w-5 h-5" />
            </Link>

            {/* Auth-dependent profile display */}
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  {userInitial ?? <User className="w-4 h-4" />}
                </div>

                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-red-50 text-red-600 rounded-full transition-colors font-medium text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleAuthRedirect}
                className="px-4 py-1.5 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Log in / Sign up
              </button>
            )}

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden p-2 hover:bg-foreground/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Static Desktop Navigation Links */}
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
    </header>
  );
};

export default MainHeader;