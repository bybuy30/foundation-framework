/**
 * HeroSection Component
 * 
 * Full-screen hero matching the reference design:
 * - Tropical leaves background
 * - "EAT HEALTHY" large title
 * - Three feature cards
 * - Three navigation buttons
 */

import heroImage from "@/assets/images/hero-leaves.jpg";
import { heroButtons } from "@/data/navigation";

const features = [
  {
    title: "Eat Fresh",
    description: "From harvest to your doorstep in under 24 hours. No long storage, no stale stock.",
  },
  {
    title: "Premium Packaging",
    description: "Thoughtfully designed packaging that protects freshness and elevates the experience.",
  },
  {
    title: "Quality First",
    description: "We don't cut corners, we perfect them. Quality isn't a feature, it's our standard.",
  },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tropical leaves background"
          className="w-full h-full object-cover"
        />
        <div className="overlay-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center pt-24 pb-12 px-4">
        {/* Main Title */}
        <h1 className="hero-title text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] text-foreground text-center text-shadow leading-none">
          EAT HEALTHY
        </h1>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-16 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="feature-card px-4">
              <h3 className="text-xl md:text-2xl text-foreground">{feature.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-12 md:mt-16">
          {heroButtons.map((button, index) => (
            <a
              key={button.id}
              href={button.href}
              className={index === heroButtons.length - 1 ? "nav-button-filled" : "nav-button"}
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
