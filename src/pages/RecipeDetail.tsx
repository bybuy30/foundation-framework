import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById } from "@/data/recipes";
import React, { useEffect, useState, MouseEvent } from "react";
import MainHeader from "@/components/headers/MainHeader";
import { Heart, Share } from "lucide-react";

const RecipeDetail: React.FC = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<any>(null); // Use your specific Recipe type here

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id, 10);
      const recipeData = getRecipeById(parsedId);
      setRecipe(recipeData);
    }
  }, [id]);


  // Helper to remove from wishlist
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

  // Check wishlist status on load
  useEffect(() => {
    const checkWishlistStatus = async () => {
      const token = localStorage.getItem("token");
      if (!token || !recipe) return;

      try {
        // include itemType=recipe so server checks the correct type
        const response = await fetch(`/api/wishlist/check/${recipe.id}?itemType=recipe`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setIsWishlisted(data.isWishlisted);
      } catch (err) {
        console.error("Error checking wishlist status", err);
      }
    };

    checkWishlistStatus();
  }, [recipe, id]); // Keeping both as dependencies matches ProductDetail logic

  const handleWishlistClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!recipe) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to save recipes.");
      return;
    }

    try {
      if (!isWishlisted) {
        const response = await fetch("/api/wishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ itemType: "recipe", itemId: recipe.id }),
        });
        if (response.ok) setIsWishlisted(true);
      } else {
        await removeFromWishlist(recipe.id, "recipe");
        setIsWishlisted(false);
      }
    } catch (err) {
      console.error("Wishlist toggle error", err);
    }
  };

  if (!recipe) {
    return (
      <div className="container mx-auto py-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">Recipe not found</h2>
        <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-100 rounded">Go Back</button>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden w-full bg-background">
      <MainHeader />
      <div className="w-full h-80 md:h-[520px] bg-gray-100 overflow-hidden">
        <img src={recipe.heroImage} alt={recipe.name} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-5xl mx-auto text-center mt-12 px-4 mb-16">
        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">{recipe.name}</h1>
        <div className="text-sm md:text-base text-muted-foreground flex items-center justify-center gap-4">
          <span>{recipe.cookingTime}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
          <span>Difficulty: {recipe.difficulty}</span>
        </div>
      </div>

      <section className="py-12 px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto mb-12">
        <div className="flex-1 w-full max-w-xl">
          <img src={recipe.secondaryImage} className="w-full rounded-lg shadow-md object-cover h-64 md:h-80" />
        </div>
        <div className="flex-1 w-full text-center md:text-left">
          <h3 className="text-xl font-semibold mb-6">Quick Info</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <button onClick={handleWishlistClick} className="p-2 hover:bg-foreground/10 rounded-full transition-colors">
              <Heart className={`w-8 h-8 transition-colors ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
            </button>
            <button className="p-2 hover:bg-foreground/10 rounded-full transition-colors"><Share className="w-8 h-8" /></button>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px]">
          <img src={recipe.leftOverflowImage} className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-12">
          <h3 className="text-3xl font-serif mb-8">Ingredients</h3>
          <ul className="space-y-4">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="flex items-start gap-3 text-lg border-b pb-3 border-border/50">
                <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary" />
                <span>{ing}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 p-12">
          <h3 className="text-3xl font-serif mb-8">Instructions</h3>
          <ol className="space-y-5">
            {recipe.instructions.map((step, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="w-8 h-8 rounded-full border border-primary flex items-center justify-center shrink-0">{idx + 1}</span>
                <p className="text-lg text-muted-foreground pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px]">
          <img src={recipe.rightOverflowImage} className="w-full h-full object-cover" />
        </div>
      </section>
      <div className="h-24"></div>
    </div>
  );
};

export default RecipeDetail;
