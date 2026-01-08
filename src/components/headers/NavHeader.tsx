/**
 * NavHeader Component
 * 
 * Main navigation header positioned below TopHeader.
 * Slides up and hides when scrolling down, reappears when scrolling up.
 */

import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNavLinks } from "@/data/navigation";

const NavHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`header-nav sticky top-10 z-40 ${!isVisible ? "header-nav-hidden" : ""}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Leaf className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">HYDRONEST</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {mainNavLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="default" size="sm">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface-elevated">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {mainNavLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="default" size="sm" className="mt-2">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavHeader;
