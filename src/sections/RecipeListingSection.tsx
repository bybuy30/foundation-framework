/**
 * Recipe Listing Section
 * 
 * Displays horizontally scrollable recipe cards.
 * Features:
 * - Horizontal scrolling
 * - Recipe cards with dish image, name, and associated vegetables
 * - Click to redirect to Recipe Detail page
 */

import { useNavigate } from "react-router-dom";
import RecipeCard from "@/components/recipes/RecipeCard";

const RecipeListingSection = () => {
  const navigate = useNavigate();

  const recipes = [
    {
      id: 1,
      name: "Recipe 1",
      image: "",
      vegetables: ["Vegetable 1", "Vegetable 2"]
    },
    {
      id: 2,
      name: "Recipe 2",
      image: "",
      vegetables: ["Vegetable 2", "Vegetable 3"]
    },
    {
      id: 3,
      name: "Recipe 3",
      image: "",
      vegetables: ["Vegetable 3", "Vegetable 4"]
    },
    {
      id: 4,
      name: "Recipe 4",
      image: "",
      vegetables: ["Vegetable 4", "Vegetable 5"]
    },
    {
      id: 5,
      name: "Recipe 5",
      image: "",
      vegetables: ["Vegetable 5", "Vegetable 1"]
    },
    {
      id: 6,
      name: "Recipe 6",
      image: "",
      vegetables: ["Vegetable 1", "Vegetable 6"]
    }
  ];

  const handleRecipeClick = (id: number) => {
    // Navigate to recipe detail page
    navigate(`/recipe/${id}`);
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Featured Recipes</h2>

        {/* Horizontally Scrollable Recipe Cards */}
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => handleRecipeClick(recipe.id)}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <p className="text-xs text-muted-foreground text-center mt-6">
          Scroll horizontally to see more recipes
        </p>
      </div>
    </section>
  );
};

export default RecipeListingSection;
