/**
 * ProductsSection Component - Updated styling
 */

import ProductGrid from "@/components/products/ProductGrid";

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-6xl text-primary font-medium uppercase tracking-wider">
            Our Products
          </span>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4 mt-6">
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
