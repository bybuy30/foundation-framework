/**
 * BrandScroller Component
 *
 * Horizontal infinite scrolling brand logos
 * Direction: LEFT → RIGHT
 */

import { brands } from "@/data/brands";

const BrandScroller = () => {
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Scrolling Row */}
      <div className="brand-scroll-left flex items-center gap-6">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="
              flex-shrink-0
              w-32
              h-16
              bg-muted
              rounded-lg
              flex
              items-center
              justify-center
              grayscale
              hover:grayscale-0
              transition-all
              duration-300
            "
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
