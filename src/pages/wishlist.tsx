import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, Clock, ChefHat, ArrowLeft } from "lucide-react";
import MainHeader from "@/components/headers/MainHeader";
import FooterSection from "@/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { getProductDetail } from "@/data/product";
import { getRecipeById } from "@/data/recipes";
import ContactSection from "@/sections/ContactSection";

// Interface for wishlist items
interface WishlistItem {
  id: number;
  itemType: "product" | "recipe";
  name: string;
  price?: number;
  image: string;
  meta?: string; 
}

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/wishlist", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();

      const enrichedItems: WishlistItem[] = (data.wishlist || [])
        .map((item: any) => {
          if (item.itemType === "product") {
            const product = getProductDetail(item.itemId);
            if (!product) return null;
            return {
              id: product.id,
              itemType: "product" as const,
              name: product.name,
              price: product.price,
              image: product.images?.[0] || product.image || "/placeholder.png",
            };
          } else if (item.itemType === "recipe") {
            const recipe = getRecipeById(item.itemId);
            if (!recipe) return null;
            return {
              id: recipe.id,
              itemType: "recipe" as const,
              name: recipe.name,
              image: recipe.heroImage || recipe.secondaryImage || "/placeholder.png",
              meta: `${recipe.cookingTime || "N/A"} • ${recipe.difficulty || "N/A"}`,
            };
          }
          return null;
        })
        .filter((item: WishlistItem | null): item is WishlistItem => item !== null);

      setWishlistItems(enrichedItems);
    } catch (err) {
      console.error("Error fetching wishlist", err);
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (id: number, itemType: "product" | "recipe") => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`/api/wishlist/${id}?itemType=${itemType}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        setWishlistItems((prev) =>
          prev.filter((item) => !(item.id === id && item.itemType === itemType))
        );
      }
    } catch (err) {
      console.error("Failed to remove item", err);
    }
  };

  // Separate data for sections
  const productItems = wishlistItems.filter(item => item.itemType === "product");
  const recipeItems = wishlistItems.filter(item => item.itemType === "recipe");

  return (
    <div className="min-h-screen bg-background font-body">
      <MainHeader />

      <main className="container mx-auto px-4 pt-28 pb-12">
        
        <div className="flex flex-col gap-4 mb-10">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
          <h1 className="text-4xl font-bold tracking-tight">My Wishlist</h1>
        </div>

        {loading ? (
          <div className="text-center py-20 flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="text-muted-foreground">Gathering your favorites...</p>
          </div>
        ) : wishlistItems.length === 0 ? (
          <div className="text-center py-20 bg-muted/50 rounded-2xl border-2 border-dashed">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h2 className="text-xl font-medium mb-4">Your wishlist is empty</h2>
            <Button onClick={() => navigate("/")}>Explore Products</Button>
          </div>
        ) : (
          <div className="space-y-16">
            
            {productItems.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                  <h2 className="text-2xl font-bold">Saved Products</h2>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">
                    {productItems.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {productItems.map((item) => (
                    <WishlistCard 
                      key={`prod-${item.id}`} 
                      item={item} 
                      onRemove={removeFromWishlist} 
                      navigate={navigate} 
                    />
                  ))}
                </div>
              </section>
            )}

            
            {recipeItems.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                  <h2 className="text-2xl font-bold">Saved Recipes</h2>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">
                    {recipeItems.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {recipeItems.map((item) => (
                    <WishlistCard 
                      key={`rec-${item.id}`} 
                      item={item} 
                      onRemove={removeFromWishlist} 
                      navigate={navigate} 
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      <ContactSection />
      <FooterSection />
    </div>
  );
};

/**
 * Reusable Card Component for Products and Recipes
 */
const WishlistCard = ({ item, onRemove, navigate }: any) => {
  return (
    <div className="relative group">
      
      <Button
        variant="destructive"
        size="icon"
        className="absolute top-2 right-2 z-10 rounded-full w-8 h-8 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(item.id, item.itemType);
        }}
      >
        <Trash2 className="w-4 h-4" />
      </Button>

      {item.itemType === "product" ? (
        <div className="select-none flex flex-col w-full shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden border">
          <div
            onClick={() => navigate(`/product/${item.id}`)}
            className="relative bg-[#f3f3f3] w-full aspect-[299/300] overflow-hidden flex items-center justify-center cursor-pointer"
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div
            onClick={() => navigate(`/product/${item.id}`)}
            className="p-4 text-white relative bg-[#4A613D] cursor-pointer"
            style={{ height: "125px" }}
          >
            <h2 className="text-lg font-semibold leading-tight line-clamp-2 mb-2">{item.name}</h2>
            <div className="absolute bottom-4 left-4 flex items-baseline gap-1">
              <span className="text-xl font-light">₹</span>
              <span className="text-4xl font-bold leading-none">{item.price}</span>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="w-full rounded-lg overflow-hidden border bg-background hover:shadow-xl transition-all duration-300 cursor-pointer group"
          onClick={() => navigate(`/recipe/${item.id}`)}
        >
          <div className="relative h-56 bg-muted overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-3 line-clamp-1 group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                <span>{item.meta?.split(" • ")[0] || "N/A"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ChefHat className="w-4 h-4 text-primary" />
                <span>{item.meta?.split(" • ")[1] || "N/A"}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
