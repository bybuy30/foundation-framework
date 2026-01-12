import BrandScroller from "@/components/b2b/BrandScroller";

const B2BTiesSection = () => {
  return (
    <section id="b2b" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-helvetica text-4xl md:text-5xl mb-6">
            B2B Partnerships
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We partner with restaurants, grocery chains, and distributors 
            to provide the freshest hydroponic produce at wholesale prices.
          </p>
        </div>

        {/* Brand Scroller - Now the focal point */}
        <div className="max-w-6xl mx-auto">
          <BrandScroller />
        </div>
      </div>
    </section>
  );
};

export default B2BTiesSection;