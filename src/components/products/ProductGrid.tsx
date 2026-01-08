/**
 * ProductGrid Component
 * 
 * Displays products in a responsive grid layout.
 * Handles filtering and displays ProductCard components.
 */

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import { products, type Product } from "@/data/products";
import { filterProducts } from "@/data/filters";

const ProductGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = useMemo(() => {
    return filterProducts<Product>(products, activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <ProductFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <p className="text-sm text-muted-foreground">
          Showing {filteredProducts.length} products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
