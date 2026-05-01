import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, type MouseEvent } from "react";
import { Leaf, Droplet, Package, Calendar, ArrowLeft, Heart, Share } from "lucide-react";
import MainHeader from "@/components/headers/MainHeader";
import { getProductDetail, type ProductDetail as ProductDetailType } from "@/data/product";
import RelatedProductsCarousel from "@/components/products/RelatedProductsCarousel";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDetailType | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Check out ${product.name} on Hydronest!`,
      url: window.location.href, // Current product URL
    };

    // 1. Try Native Mobile Sharing (WhatsApp, Instagram, etc.)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        // Optional: Notify backend that a share occurred here
      } catch (err) {
        console.log("Share cancelled or failed", err);
      }
    } else {
      // 2. Fallback: Copy to Clipboard or Open a Modal with Social Links
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard! Share it anywhere.");
      } catch (err) {
        console.error("Failed to copy", err);
      }
    }
  };

  // Helper to remove from wishlist using the same logic as wishlist.tsx
  const removeFromWishlist = async (itemId: number, itemType: "product" | "recipe") => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await fetch(`/api/wishlist/${itemId}?itemType=${itemType}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.error("Error removing item from wishlist", err);
    }
  };

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const productData = getProductDetail(productId);
      setProduct(productData);
      setSelectedImageIndex(0);
    }
  }, [id]);

  // Check wishlist status on load
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
    if (!token) {
      alert("Please log in to add products to your wishlist.");
      return;
    }

    try {
      if (!isWishlisted) {
        // Add to wishlist
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
        if (response.ok) setIsWishlisted(true);
      } else {
        // Remove from wishlist
        await removeFromWishlist(product.id, "product");
        setIsWishlisted(false);
      }
    } catch (err) {
      console.error("Failed to toggle wishlist", err);
    }
  };

  const iconMap: Record<string, React.ReactNode> = {
    leaf: <Leaf className="w-6 h-6" />,
    droplet: <Droplet className="w-6 h-6" />,
    package: <Package className="w-6 h-6" />,
    calendar: <Calendar className="w-6 h-6" />,
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

  const { name, price, netQuantity, description, images = [], properties = [] } = product;
  const primaryImage = images[selectedImageIndex] || images[0] || product.image;

  return (
    <div className="min-h-screen bg-background font-body">
      <MainHeader />
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="relative bg-[#f3f3f3] w-full overflow-hidden rounded-lg aspect-square flex items-center justify-center">
              <img src={primaryImage} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`bg-[#f3f3f3] overflow-hidden rounded-lg aspect-square transition-all ${selectedImageIndex === idx ? "ring-2 ring-primary" : "hover:opacity-80"}`}
                >
                  <img src={images[idx] || product.image} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-bold text-foreground">{name}</h1>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{description || "To be added"}</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-light text-foreground">₹</span>
              <span className="text-6xl font-bold text-foreground leading-none">{price}</span>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground uppercase">Net Weight</p>
                <p className="text-2xl font-semibold text-foreground">{netQuantity}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={handleWishlistClick} className="p-2 hover:bg-foreground/10 rounded-full transition-colors">
                  <Heart className={`w-8 h-8 transition-colors ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                </button>
                <button 
                onClick={handleShare} 
                className="p-2 hover:bg-foreground/10 rounded-full transition-colors"><Share className="w-8 h-8" /></button>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Product Properties</h2>
              <div className="grid grid-cols-2 gap-4">
                {properties.map((prop, i) => (
                  <div key={i} className="flex flex-col items-center p-4 bg-muted rounded-lg text-center space-y-2">
                    <div className="text-muted-foreground">{iconMap[prop.icon] || <Package />}</div>
                    <p className="text-sm font-semibold">{prop.label}</p>
                    <p className="text-xs text-muted-foreground">{prop.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12 mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <RelatedProductsCarousel currentProductId={product.id} />
        </div>
      </main>
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default ProductDetail;
