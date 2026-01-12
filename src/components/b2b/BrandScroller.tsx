/**
 * BrandScroller Component
 * * Horizontal infinite scrolling brand logos
 * Updated for larger visibility and 5-brand focus.
 */

import { brands } from "@/data/brands";

const BrandScroller = () => {
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden py-12"> {/* Increased vertical padding */}
      {/* Gradient Overlays for smooth entry/exit */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent z-10" />

      {/* Scrolling Row */}
      <div className="brand-scroll-left flex items-center gap-12"> {/* Increased gap */}
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="
              flex-shrink-0
              w-52 
              h-28
              bg-muted/50
              rounded-xl
              flex
              items-center
              justify-center
              grayscale
              hover:grayscale-0
              hover:scale-105
              transition-all
              duration-300
              border border-border/50
            "
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandScroller;