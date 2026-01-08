/**
 * Index Page
 * 
 * Main landing page matching the reference design.
 */

import MainHeader from "@/components/headers/MainHeader";
import HeroSection from "@/sections/HeroSection";
import CarouselSection from "@/sections/CarouselSection";
import ProductsSection from "@/sections/ProductsSection";
import B2BTiesSection from "@/sections/B2BTiesSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <MainHeader />

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
