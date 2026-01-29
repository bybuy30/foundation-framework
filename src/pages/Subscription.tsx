/**
 * Subscription Page
 * 
 * Presents HydroNest's subscription-based offerings for future Direct-to-Consumer (D2C) engagement.
 * Displays four subscription plans with tier-based offerings.
 */

import MainHeader from "@/components/headers/MainHeader";
import SubscriptionPlansSection from "@/sections/SubscriptionPlansSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";

const Subscription = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <MainHeader />

      {/* Main Content */}
      <main>
        {/* Page Title and Introduction */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Subscribe to Fresh Produce
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {/* Introductory text about subscription offerings and D2C engagement */}
            </p>
          </div>
        </section>

        {/* Subscription Plans Section */}
        <SubscriptionPlansSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Subscription;
