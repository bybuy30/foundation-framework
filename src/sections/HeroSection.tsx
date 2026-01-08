/**
 * HeroSection Component
 * 
 * Full-width hero with video background and overlay text.
 * Video source: assets/videos/Hydronest.mp4
 * 
 * TODO: Replace video file in assets/videos/
 */

import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* 
          TODO: Replace with actual video
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/Hydronest.mp4" type="video/mp4" />
          </video>
        */}
        {/* Placeholder gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-accent via-background to-background" />
      </div>

      {/* Overlay */}
      <div className="hero-overlay z-10" />

      {/* Decorative Blobs */}
      <div className="blob-decoration w-96 h-96 bg-primary -top-20 -left-20 z-0" />
      <div className="blob-decoration w-64 h-64 bg-primary bottom-20 right-10 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Fresh Hydroponic Produce
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-gradient">Premium Plants</span>
            <br />
            <span>Grown with Care</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Sustainable hydroponic farming delivering the freshest greens, exotic plants, and premium produce directly to you.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" onClick={scrollToProducts}>
              Explore Products
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              <Play className="w-4 h-4 mr-2" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-8 border-t border-border/50">
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">28</p>
              <p className="text-sm text-muted-foreground">Product Varieties</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Sustainable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
