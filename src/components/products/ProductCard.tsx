/**
 * ProductCard Component - Updated for green theme
 */

import { useState } from "react";
import { type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showB2B, setShowB2B] = useState(false);

  const togglePricing = () => {
    setShowB2B((prev) => !prev);
  };

  return (
    <div
      className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
        showB2B 
          ? "border-orange-500/50 bg-orange-500/5" 
          : "border-primary/50 bg-primary/5"
      }`}
      onClick={togglePricing}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && togglePricing()}
      aria-label={`${product.name} - Click to toggle pricing`}
    >
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-sm line-clamp-1">{product.name}</h3>
        
        {/* Pricing Display */}
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className={`text-xs uppercase tracking-wider ${
              showB2B ? "text-orange-500" : "text-primary"
            }`}>
              {showB2B ? "B2B Price" : "Retail Price"}
            </p>
            <p className="text-lg font-bold">
              ${showB2B ? product.b2bPrice.toFixed(2) : product.retailPrice.toFixed(2)}
            </p>
          </div>
          
          {/* Toggle Indicator */}
          <div className={`w-3 h-3 rounded-full ${
            showB2B ? "bg-orange-500" : "bg-primary"
          }`} />
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <p className="text-xs text-muted-foreground">Out of Stock</p>
        )}
      </div>

      {/* Click hint */}
      <div className="absolute top-2 right-2 px-2 py-1 rounded text-xs bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity">
        Click to toggle
      </div>
    </div>
  );
};

export default ProductCard;
