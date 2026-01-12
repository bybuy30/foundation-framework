import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

  const { name, price, netQuantity } = product;

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card body click from firing
    navigate(`/product/${product.id}`);
  };

  const handleCardBodyClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="select-none flex flex-col w-full">
      {/* Image Section - Clickable for Navigation */}
      <div
        onClick={handleImageClick}
        className="bg-[#f3f3f3] w-full overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
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

      {/* Content Section - Clickable for Color Toggle */}
      <div
        onClick={handleCardBodyClick}
        className={cn(
          "p-4 text-white relative transition-colors duration-300 ease-in-out cursor-pointer",
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
