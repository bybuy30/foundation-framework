/**
 * Index Page
 * 
 * Main landing page assembling all sections.
 * Each section is modular and can be reordered or removed as needed.
 */

import TopHeader from "@/components/headers/TopHeader";
import NavHeader from "@/components/headers/NavHeader";
import HeroSection from "@/sections/HeroSection";
import CarouselSection from "@/sections/CarouselSection";
import ProductsSection from "@/sections/ProductsSection";
import B2BTiesSection from "@/sections/B2BTiesSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Headers */}
      <TopHeader />
      <NavHeader />

      {/* Main Content */}
      <main>
        <HeroSection />
        <CarouselSection />
        <ProductsSection />
        <B2BTiesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
