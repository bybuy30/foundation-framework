import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isSelected, setIsSelected] = useState(false);

  const { name, price, netQuantity } = product;

  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className="cursor-pointer select-none flex flex-col w-full"
    >
      {/* Image Section */}
      <div
        className="bg-[#f3f3f3] w-full overflow-hidden flex items-center justify-center"
        style={{ aspectRatio: "299 / 300" }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300" />
        )}
      </div>

      {/* Content Section */}
      <div
        className={cn(
          "p-4 text-white relative transition-colors duration-300 ease-in-out",
          isSelected ? "bg-[#CF3C2C]" : "bg-[#4A613D]"
        )}
        style={{ height: "125px" }}
      >
        {/* Product Name */}
        <h2 className="text-xl font-medium leading-tight tracking-tight">
          {name}
        </h2>

        {/* Price — Bottom Left */}
        <div className="absolute bottom-4 left-4 flex items-baseline gap-1">
          <span className="text-2xl font-light">₹</span>
          <span className="text-5xl font-bold leading-none">
            {price}
          </span>
        </div>

        {/* Net Weight — Bottom Right */}
        <div className="absolute bottom-4 right-4 text-right leading-none">
          <p className="text-[10px] opacity-90 uppercase tracking-tighter">
            net wt.
          </p>
          <p className="text-lg font-semibold">{netQuantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
