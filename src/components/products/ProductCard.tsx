import React, { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * ProductCard Component
 * - Image Container: Fixed aspect ratio matching 299x300
 * - Content Container: Fixed height 125px
 * - Interaction: Entire lower section turns red (#CF3C2C) on click
 */
const ProductCard = ({ name = "Baby Corn", weight = "200 g", price = "50" }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div 
      onClick={() => setIsSelected(!isSelected)}
      className="cursor-pointer select-none flex flex-col w-full"
    >
      {/* Product Image Section: Maintaining 299x300 proportion */}
      <div 
        className="bg-[#f3f3f3] w-full overflow-hidden flex items-center justify-center"
        style={{ aspectRatio: "299 / 300" }}
      >
        {/* Placeholder for actual product image */}
        <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300" />
      </div>

      {/* Content Section: 125px height */}
      <div 
        className={cn(
          "p-4 text-white flex flex-col justify-between transition-colors duration-300 ease-in-out",
          isSelected ? "bg-[#CF3C2C]" : "bg-[#657a55]"
        )}
        style={{ height: "125px" }}
      >
        {/* Top Row: Title and Net Wt Label */}
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-2xl font-medium leading-tight tracking-tight">
            {name}
          </h2>
          <div className="text-right leading-none shrink-0 pt-1">
            <p className="text-[10px] opacity-90 uppercase tracking-tighter">net wt.</p>
            <p className="text-xl font-bold">{weight}</p>
          </div>
        </div>

        {/* Bottom Row: Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-light">₹</span>
          <span className="text-5xl font-bold leading-none">{price}</span>
        </div>
      </div>
    </div>
  );
};

/**
 * ProductGrid Component
 * - Layout: Exactly 5 products per row with clean gaps
 */
const ProductGrid = () => {
  const products = Array(10).fill(null); // Example with 2 rows of 5

  return (
    <div className="p-10 bg-white min-h-screen">
      {/* Max-width container prevents cards from becoming too wide on large screens */}
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-5 gap-4 md:gap-6">
          {products.map((_, index) => (
            <ProductCard 
              key={index} 
              name="Baby Corn" 
              weight="200 g" 
              price="50" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;