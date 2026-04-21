import React, { useState, useEffect, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);

  const navigate = useNavigate();
  const { name, price, netQuantity, images } = product;

  // Slideshow logic
  useEffect(() => {
    if (!isHovering || !images || images.length <= 1) return;

    const interval = setInterval(() => {
      setDisableTransition(false); // Ensure animation is on
      setCurrentImageIndex((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovering, images]);

  const handleTransitionEnd = () => {
    // If we've reached the cloned image (the end)
    if (currentImageIndex === images.length) {
      setDisableTransition(true); // Turn off animation
      setCurrentImageIndex(0); // Snap back to start
    }
  };

  const handleImageClick = (e: MouseEvent) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="select-none flex flex-col w-full border rounded-lg overflow-hidden group">
      {/* Image Container */}
      <div
        onClick={handleImageClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setCurrentImageIndex(0);
        }}
        className="relative bg-[#f3f3f3] w-full overflow-hidden cursor-pointer"
        style={{ aspectRatio: "299 / 300" }}
      >
        {images && images.length > 0 ? (
          <div
            className={cn(
              "flex h-full",
              disableTransition ? "transition-none" : "transition-transform duration-500 ease-in-out"
            )}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${(currentImageIndex * 100) / (images.length + 1)}%)`,
              width: `${(images.length + 1) * 100}%`,
            }}
          >
            {/* Map images + clone of first image */}
            {[...images, images[0]].map((img, index) => (
              <div 
                key={index} 
                className="h-full flex-shrink-0" 
                style={{ width: `${100 / (images.length + 1)}%` }}
              >
                <img
                  src={img}
                  alt={`${name}-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      {/* Content Body */}
      <div
        onClick={() => setIsSelected(!isSelected)}
        className={cn(
          "p-4 text-white relative transition-colors duration-300 ease-in-out cursor-pointer",
          isSelected ? "bg-[#CF3C2C]" : "bg-[#4A613D]"
        )}
        style={{ height: "125px" }}
      >
        <h2 className="text-xl font-medium leading-tight tracking-tight">{name}</h2>

        <div className="absolute bottom-4 left-4 flex items-baseline gap-1">
          <span className="text-2xl font-light">₹</span>
          <span className="text-5xl font-bold leading-none">{price}</span>
        </div>

        <div className="absolute bottom-4 right-4 text-right leading-none">
          <p className="text-[10px] opacity-90 uppercase tracking-tighter">net wt.</p>
          <p className="text-lg font-semibold">{netQuantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;