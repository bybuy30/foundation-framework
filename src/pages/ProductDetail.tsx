import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, type MouseEvent } from "react";
import { Leaf, Droplet, Package, Calendar, ArrowLeft, Heart, Share } from "lucide-react";
import MainHeader from "@/components/headers/MainHeader";
import { getProductDetail, type ProductDetail as ProductDetailType } from "@/data/product";
import RelatedProductsCarousel from "@/components/products/RelatedProductsCarousel";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Item } from "@radix-ui/react-accordion";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDetailType | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const productData = getProductDetail(productId);
      setProduct(productData);
      setSelectedImageIndex(0);
    }
  }, [id]);

  // Icon mapping for properties
  const iconMap: Record<string, React.ReactNode> = {
    leaf: <Leaf className="w-6 h-6" />,
    droplet: <Droplet className="w-6 h-6" />,
    package: <Package className="w-6 h-6" />,
    calendar: <Calendar className="w-6 h-6" />,
    heart: <Heart className="w-6 h-6" />,
    share: <Share className="w-6 h-6" />,
  };

  const [isWishlisted, setIsWishlisted] = useState(false);

  // Add this useEffect to check status on load
  useEffect(() => {
    const checkWishlistStatus = async () => {
      const token = localStorage.getItem("token");
      if (!token || !product) return;

      try {
        const response = await fetch(`/api/wishlist/check/${product.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setIsWishlisted(data.isWishlisted);
      } catch (err) {
        console.error("Error checking wishlist status", err);
      }
    };

    checkWishlistStatus();
  }, [product, id]);

  const handleWishlistClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!product) return;

    const token = localStorage.getItem("token");

    // If there is no token, silently ignore
    if (!token) {
      alert("Please log in to add products to your wishlist.");
      return;
    }

    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          itemType: "product",
          itemId: product.id,
        }),
      });

      if (response.ok) {
        setIsWishlisted(!isWishlisted);
      }
    } catch (err) {
      console.error("Failed to add products to wishlist", err);
    }
  };

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

  const {
    name,
    price,
    netQuantity,
    description,
    images = [],
    properties = [],
  } = product;

  const primaryImage = images[selectedImageIndex] || images[0] || product.image;

  return (
    <div className="min-h-screen bg-background font-body">
      <MainHeader />

      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Media */}
          <div className="space-y-4">
            {/* Primary Image */}
            <div className="relative bg-[#f3f3f3] w-full overflow-hidden rounded-lg aspect-square flex items-center justify-center">
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

            {/* Thumbnail images */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((thumbnailIndex) => {
                const img = images[thumbnailIndex];
                const isSelected = selectedImageIndex === thumbnailIndex;

                return (
                  <button
                    key={thumbnailIndex}
                    onClick={() => setSelectedImageIndex(thumbnailIndex)}
                    className={`bg-[#f3f3f3] w-full overflow-hidden rounded-lg aspect-square flex items-center justify-center transition-all ${isSelected
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

          {/* Right Column */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-bold text-foreground">{name}</h1>

            {/* Description */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">
                Description
              </h2>
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

            {/* Net Weight + Share */}
            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground uppercase tracking-tight">
                  Net Weight
                </p>
                <p className="text-2xl font-semibold text-foreground">
                  {netQuantity}
                </p>
              </div>

              <button
                type="button"
                onClick={handleWishlistClick}
                className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
                aria-label="Save product to wishlist"
              >
                <Heart
                  className={`w-8 h-8 transition-colors ${isWishlisted ? "fill-red-500" : "text-gray-400"}`} />
              </button>

              <button
                className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
                aria-label="Share"
              >
                <Share className="w-8 h-8" />
              </button>
            </div>

            {/* Properties */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Product Properties
              </h2>

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

            {/* Features Placeholder */}
            <div className="mt-6">
              <div className="bg-muted rounded-lg p-8 text-center">
                <p className="text-muted-foreground text-sm">Features</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12 mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Related Products
          </h2>
          <RelatedProductsCarousel currentProductId={product.id} />
        </div>
      </main>

      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default ProductDetail;
