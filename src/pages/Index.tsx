import MainHeader from "@/components/headers/MainHeader";
import HeroSection from "@/sections/HeroSection";
import CarouselSection from "@/sections/CarouselSection";
import ProductsSection from "@/sections/ProductsSection";
import InfluencerReviewsSection from "@/sections/InfluencerReviewsSection";
import B2BTiesSection from "@/sections/B2BTiesSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <MainHeader />

      <main>
        <HeroSection />
        <CarouselSection />
        <ProductsSection />
        <InfluencerReviewsSection />
        <B2BTiesSection />
        <ContactSection />
      </main>

      
      <FooterSection />
    </div>
  );
};

export default Index;

