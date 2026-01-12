/**
 * Related Products Carousel Component
 * 
 * Displays a carousel of related products with dual-component structure:
 * - Image click: navigates to product detail page
 * - Card body click: toggles background color (green/red)
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductDetail, getRelatedProducts } from "@/data/product";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface RelatedProductsCarouselProps {
  currentProductId: number;
}

const RelatedProductsCarousel: React.FC<RelatedProductsCarouselProps> = ({
  currentProductId,
}) => {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<Set<number>>(new Set());
  
  const productDetail = getProductDetail(currentProductId);
  const relatedProductIds = productDetail?.relatedProductIds || [];
  const relatedProducts = getRelatedProducts(relatedProductIds);

  if (relatedProducts.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No related products available
      </div>
    );
  }

  const handleImageClick = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation(); // Prevent card body click from firing
    navigate(`/product/${productId}`);
  };

  const handleCardBodyClick = (productId: number) => {
    setSelectedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {relatedProducts.map((product: Product) => {
          const isSelected = selectedProducts.has(product.id);
          
          return (
            <div
              key={product.id}
              className="flex-shrink-0 w-64 select-none flex flex-col"
            >
              {/* Image Section - Clickable for Navigation */}
              <div
                onClick={(e) => handleImageClick(e, product.id)}
                className="bg-[#f3f3f3] w-full overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                style={{ aspectRatio: "299 / 300" }}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300" />
                )}
              </div>

              {/* Content Section - Clickable for Color Toggle */}
              <div
                onClick={() => handleCardBodyClick(product.id)}
                className={cn(
                  "p-4 text-white relative transition-colors duration-300 ease-in-out cursor-pointer",
                  isSelected ? "bg-[#CF3C2C]" : "bg-[#4A613D]"
                )}
                style={{ height: "125px" }}
              >
                {/* Product Name */}
                <h3 className="text-xl font-medium leading-tight tracking-tight">
                  {product.name}
                </h3>

                {/* Price — Bottom Left */}
                <div className="absolute bottom-4 left-4 flex items-baseline gap-1">
                  <span className="text-2xl font-light">₹</span>
                  <span className="text-5xl font-bold leading-none">
                    {product.price}
                  </span>
                </div>

                {/* Net Weight — Bottom Right */}
                <div className="absolute bottom-4 right-4 text-right leading-none">
                  <p className="text-[10px] opacity-90 uppercase tracking-tighter">
                    net wt.
                  </p>
                  <p className="text-lg font-semibold">{product.netQuantity}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProductsCarousel;
