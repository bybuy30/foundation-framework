import MainHeader from "@/components/headers/MainHeader";
import AmbientParticles from "@/components/layout";
import SubscriptionPlansSection from "@/sections/SubscriptionPlansSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";

const Subscription = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <MainHeader />

      <main>
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Subscribe to Fresh Produce
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            </p>
          </div>
        </section>

        <SubscriptionPlansSection />

        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default Subscription;

