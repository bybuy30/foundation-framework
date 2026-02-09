import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById } from "@/data/recipes";
import React from "react";
import MainHeader from "@/components/headers/MainHeader";
import { Heart, Share } from "lucide-react";
import { MouseEvent } from "react";

const RecipeDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = Number(id);
  const recipe = getRecipeById(recipeId);

  const iconMap: Record<string, React.ReactNode> = {
    heart: <Heart className="w-6 h-6" />,
    share: <Share className="w-6 h-6" />,
  };

  const handleWishlistClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!recipe) return;

    const token = localStorage.getItem("token");

    // If there is no token, silently ignore
    if (!token) return;

    try {
      await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          itemType: "product",
          itemId: recipe.id,
        }),
      });
    } catch (err) {
      console.error("Failed to add product to wishlist", err);
    }
  };

  if (!recipe) {
    return (
      <div className="container mx-auto py-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">Recipe not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-100 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden w-full bg-background">
      <MainHeader />

      {/* landing section */}
      <div className="w-full h-80 md:h-[520px] bg-gray-100 overflow-hidden">
        {recipe.heroImage ? (
          <img
            src={recipe.heroImage}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <span className="text-slate-600">Top Image</span>
          </div>
        )}
      </div>

      {/* Title and Meta Data */}
      <div className="max-w-5xl mx-auto text-center mt-12 px-4 mb-16">
        <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-wide mb-6">
          {recipe.name}
        </h1>
        <div className="text-sm md:text-base text-muted-foreground flex items-center justify-center gap-4">
          <span>{recipe.cookingTime}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
          <span>Difficulty: {recipe.difficulty}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
          <span>{recipe.cuisine}</span>
        </div>
      </div>

      {/* Secondary Info Section */}
      <section className="py-12 px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto mb-12">
        <div className="flex-1 w-full max-w-xl">
          {recipe.secondaryImage ? (
            <img
              src={recipe.secondaryImage}
              alt="secondary"
              className="w-full rounded-lg shadow-md object-cover h-64 md:h-80"
            />
          ) : (
            <div className="w-full h-56 bg-gray-100 rounded-lg flex items-center justify-center">
              Secondary Image
            </div>
          )}
        </div>

        <div className="flex-1 w-full text-center md:text-left">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Quick Info</h3>
          </div>
          <button
            type="button"
            onClick={handleWishlistClick}
            className="px-6 py-2 hover:bg-foreground/10 rounded-full transition-colors"
            aria-label="Save product to wishlist"
          >
            <Heart className="w-8 h-8" />
          </button>

          <button
            className="px-6 py-2 p-2 hover:bg-foreground/10 rounded-full transition-colors"
            aria-label="Share"
          >
            <Share className="w-8 h-8" />
          </button>
        </div>
      </section>

      <section className="w-full flex flex-col md:flex-row mb-0">
        {/* Left Side: Image*/}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px]">
          {recipe.leftOverflowImage ? (
            <img
              src={recipe.leftOverflowImage}
              alt="Ingredients visual"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              Image
            </div>
          )}
        </div>

        <div className="w-full md:w-1/3 ml-[12rem] p-2 md:p-4 flex flex-col justify-right items-start text-right">
          <div className="max-w-md">
            <h3 className="text-3xl font-serif font-medium mb-8">Ingredients</h3>
            <ul className="space-y-4">
              {recipe.ingredients.map((ing) => (
                <li className="flex flex-row-reverse items-start gap-3 text-right text-lg text-muted-foreground border-b border-border/50 pb-3 last:border-0">
                  {/* Bullet Point*/}
                  <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0" />

                  {/* Text Content */}
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 bg-background pt-8 pr-8 pb-8 pl-4 md:pt-16 md:pr-16 md:pb-16 md:pl-8 flex flex-col justify-center items-end text-left">

          {/* 'items-end' pushes the container to the right, 'text-left' keeps text readable */}
          <div className="max-w-md w-full">
            <h3 className="text-3xl font-serif font-medium mb-8">Instructions</h3>
            <ol className="space-y-5">
              {recipe.instructions.map((step, idx) => (
                <li key={idx} className="group">
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-primary/30 text-primary font-serif text-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <p className="text-lg text-muted-foreground leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right Side: Image (Touches Right Edge) */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px]">
          {recipe.rightOverflowImage ? (
            <img
              src={recipe.rightOverflowImage}
              alt="Instructions visual"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              Right Overflow Image
            </div>
          )}
        </div>
      </section>

      {/* Bottom Spacer */}
      <div className="h-24"></div>
    </div>
  );
};

export default RecipeDetail;