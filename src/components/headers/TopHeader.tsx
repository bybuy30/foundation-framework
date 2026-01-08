/**
 * TopHeader Component
 * 
 * Fixed header at the very top of the page.
 * Contains branding/logo and utility actions (e.g., cart, account).
 */

import { Phone, Mail, MapPin } from "lucide-react";

const TopHeader = () => {
  return (
    <header className="header-top h-10">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Contact Info - Left */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">+1 (234) 567-890</span>
          </a>
          <a href="mailto:info@hydronest.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden md:inline">info@hydronest.com</span>
          </a>
        </div>

        {/* Location - Right */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Your Location Here</span>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
