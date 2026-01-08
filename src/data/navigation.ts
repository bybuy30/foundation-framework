/**
 * Navigation Configuration
 * 
 * Centralized navigation links for headers and footer.
 */

export interface NavLink {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export const mainNavLinks: NavLink[] = [
  { id: "home", label: "Home", href: "#hero" },
  { id: "products", label: "Products", href: "#products" },
  { id: "b2b", label: "B2B Partners", href: "#b2b" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const footerLinks: NavLink[] = [
  { id: "privacy", label: "Privacy Policy", href: "/privacy" },
  { id: "terms", label: "Terms of Service", href: "/terms" },
  { id: "faq", label: "FAQ", href: "/faq" },
];

export const socialLinks: NavLink[] = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com", isExternal: true },
  { id: "facebook", label: "Facebook", href: "https://facebook.com", isExternal: true },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com", isExternal: true },
];

export default mainNavLinks;
