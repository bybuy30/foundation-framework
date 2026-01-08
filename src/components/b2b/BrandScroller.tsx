/**
 * BrandScroller Component
 * 
 * Horizontal infinite scrolling brand logos.
 * Update brands in src/data/brands.ts
 */

import { brands } from "@/data/brands";

const BrandScroller = () => {
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Scrolling Container */}
      <div className="brand-scroll">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="flex-shrink-0 w-32 h-16 bg-muted rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-full max-h-full object-contain p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandScroller;
