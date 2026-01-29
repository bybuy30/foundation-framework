import { useState, useEffect } from "react";
import { Search, Heart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { mainNavLinks } from "@/data/navigation";
import logo from "@/assets/images/logo.png";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-main transition-all duration-300 ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container mx-auto px-4">
        {/* Top Row - Logo, Search, Icons */}
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/">
            <img
            src={logo}
            alt="Logo"
            className="h-10 w-12"
          />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
              <input
                type="text"
                placeholder="Search..."
                className="search-bar w-full pl-10"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-foreground/10 rounded-full transition-colors" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-foreground/10 rounded-full transition-colors" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
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
                className="search-bar w-full pl-10"
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
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
