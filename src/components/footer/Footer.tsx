/**
 * Footer Component
 * 
 * Site-wide footer with company info, links, and social media.
 */

import { Leaf, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { footerLinks, socialLinks } from "@/data/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="#hero" className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">HYDRONEST</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Premium hydroponic produce and live plants. Fresh, sustainable, and delivered to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@hydronest.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Green Street, Farm City</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = 
                  link.id === "instagram" ? Instagram :
                  link.id === "facebook" ? Facebook :
                  Linkedin;
                
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Hydronest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
