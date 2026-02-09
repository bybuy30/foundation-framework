import MainHeader from "@/components/headers/MainHeader";
import CompanyOverviewSection from "@/sections/CompanyOverviewSection";
import VideoSection from "@/sections/VideoSection";
import InteractiveContentSection from "@/sections/InteractiveContentSection";
import BrandValuesSection from "@/sections/BrandValuesSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <MainHeader />

      <main>  
        <CompanyOverviewSection />

        <InteractiveContentSection />

        <BrandValuesSection />

        <VideoSection />

        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default AboutUs;
