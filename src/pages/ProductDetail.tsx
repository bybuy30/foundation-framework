/**
 * Product Detail Page
 * 
 * Displays detailed product information with images, properties, and related products.
 */

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Leaf, Droplet, Package, Calendar, ArrowLeft } from "lucide-react";
import MainHeader from "@/components/headers/MainHeader";
import { getProductDetail, type ProductDetail } from "@/data/product";
import RelatedProductsCarousel from "@/components/products/RelatedProductsCarousel";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const productData = getProductDetail(productId);
      setProduct(productData);
      setSelectedImageIndex(0);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background font-body">
        <MainHeader />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const { name, price, netQuantity, description, images = [], properties = [] } = product;

  // Icon mapping for properties
  const iconMap: Record<string, React.ReactNode> = {
    leaf: <Leaf className="w-6 h-6" />,
    droplet: <Droplet className="w-6 h-6" />,
    package: <Package className="w-6 h-6" />,
    calendar: <Calendar className="w-6 h-6" />,
  };

  const primaryImage = images[selectedImageIndex] || images[0] || product.image;

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <MainHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Back Button - Positioned to left of first image, outside header container */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="relative z-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Top Section - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Media */}
          <div className="space-y-4">
            {/* Primary Image */}
            <div className="bg-[#f3f3f3] w-full overflow-hidden rounded-lg aspect-square flex items-center justify-center">
              {primaryImage ? (
                <img
                  src={primaryImage}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300" />
              )}
            </div>

            {/* Thumbnail Row - Always show 2 thumbnails (Image 2, Image 3) */}
            <div className="grid grid-cols-2 gap-4">
              {[0, 1].map((offset) => {
                const thumbnailIndex = offset + 1; // Image 2 and Image 3 (skip primary Image 1)
                const img = images[thumbnailIndex];
                const isSelected = selectedImageIndex === thumbnailIndex;
                
                return (
                  <button
                    key={offset}
                    onClick={() => setSelectedImageIndex(thumbnailIndex)}
                    className={`bg-[#f3f3f3] w-full overflow-hidden rounded-lg aspect-square flex items-center justify-center transition-all ${
                      isSelected
                        ? "ring-2 ring-primary ring-offset-2"
                        : "hover:opacity-80"
                    }`}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={`${name} thumbnail ${thumbnailIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column - Content (aligned to top) */}
          <div className="flex flex-col space-y-6">
            {/* Title */}
            <h1 className="text-4xl font-bold text-foreground">{name}</h1>

            {/* Description */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {description || "To be added"}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-light text-foreground">₹</span>
              <span className="text-6xl font-bold text-foreground leading-none">
                {price}
              </span>
            </div>

            {/* Net Weight */}
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground uppercase tracking-tight">
                Net Weight
              </p>
              <p className="text-2xl font-semibold text-foreground">{netQuantity}</p>
            </div>

            {/* Properties Section - Moved here to be adjacent to image gallery */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Product Properties</h2>
              <div className="grid grid-cols-2 gap-4">
                {properties.length > 0 ? (
                  properties.map((property, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 bg-muted rounded-lg text-center space-y-2"
                    >
                      <div className="text-muted-foreground">
                        {property.icon && iconMap[property.icon] ? (
                          iconMap[property.icon]
                        ) : (
                          <div className="w-6 h-6 bg-muted-foreground/20 rounded" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {property.label}
                        </p>
                        {property.value && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {property.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-4 text-muted-foreground text-sm">
                    Product properties to be added
                  </div>
                )}
              </div>
            </div>

            {}
            <div className="mt-6">
              <div className="bg-muted rounded-lg p-8 text-center">
                <p className="text-muted-foreground text-sm">Features</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Carousel */}
        <div className="mb-12 mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
          <RelatedProductsCarousel currentProductId={product.id} />
        </div>
      </main>

      {/* Footer & Contact Sections */}
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default ProductDetail;
