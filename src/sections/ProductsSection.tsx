/**
 * ProductsSection Component
 * 
 * Section wrapper for the product grid with filters.
 * Includes decorative blob backgrounds.
 */

import ProductGrid from "@/components/products/ProductGrid";

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-20 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="blob-decoration w-80 h-80 bg-primary top-0 -right-40" />
      <div className="blob-decoration w-60 h-60 bg-secondary bottom-20 -left-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Fresh From the Farm
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our selection of premium hydroponic produce and live plants. 
            Click any product to see B2B wholesale pricing.
          </p>
        </div>

        {/* Products Grid with Filters */}
        <ProductGrid />
      </div>
    </section>
  );
};

export default ProductsSection;
