/**
 * B2BTiesSection Component - Updated styling
 */

import BrandScroller from "@/components/b2b/BrandScroller";
import { Handshake, TrendingUp, Truck, Award } from "lucide-react";

const B2BTiesSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Volume Pricing",
      description: "Competitive wholesale rates for bulk orders",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Consistent supply chain to your business",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Farm-fresh products every time",
    },
  ];

  return (
    <section id="b2b" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Handshake className="w-6 h-6 text-primary" />
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              B2B Partnerships
            </span>
          </div>
          <h2 className="font-script text-3xl md:text-4xl mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with restaurants, grocery chains, and distributors 
            to provide the freshest hydroponic produce at wholesale prices.
          </p>
        </div>

        {/* Brand Scroller */}
        <BrandScroller />

        {/* B2B Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-background border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BTiesSection;
