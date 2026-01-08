/**
 * Navigation Configuration - Updated for new design
 */

export interface NavLink {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export const mainNavLinks: NavLink[] = [
  { id: "home", label: "Home", href: "#hero" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "subscription", label: "Subscription", href: "#subscription" },
  { id: "recipes", label: "Recipes", href: "#recipes" },
];

export const heroButtons: NavLink[] = [
  { id: "produce", label: "Produce", href: "#products" },
  { id: "b2b", label: "B2B Ties", href: "#b2b" },
  { id: "contact", label: "Contact Us", href: "#contact" },
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
