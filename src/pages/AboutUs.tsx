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
      {/* Header */}
      <MainHeader />

      {/* Main Content */}
      <main>
        <CompanyOverviewSection />

        <InteractiveContentSection />

        {/* Brand Values Section */}
        <BrandValuesSection />

        {/* Video Section */}
        <VideoSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default AboutUs;
