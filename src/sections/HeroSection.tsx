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
    description: "We don't cut corners, we perfect them. Quality isn't a feature; it's our standard.",
  },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/src/assets/Video/Hydronest.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container - Changed justify-center to justify-end and added pb-24 */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex-1 flex flex-col items-center justify-end pb-24">
        
        {/* Main Title - Massive typography */}
        <h1 className="text-[13vw] md:text-[11rem] font-bold tracking-tighter leading-[0.8] mb-8 text-center">
          EAT HEALTHY
        </h1>

        {/* Long Thin Horizontal Divider */}
        <div className="w-full max-w-5xl h-[1px] bg-white/20 mb-12" />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl text-center">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`px-8 py-2 flex flex-col items-center relative ${
                index !== 0 ? "md:border-l md:border-white/20" : ""
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-serif mb-2 italic">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base font-light leading-relaxed opacity-80 max-w-[250px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Positioned at the very bottom area */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          {heroButtons.map((button) => (
            <a
              key={button.id}
              href={button.href}
              className="px-10 py-2.5 border border-white/60 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md"
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