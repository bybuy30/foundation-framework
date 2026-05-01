import { MouseEvent } from "react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  vegetables: string[];
  cookingTime: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  const handleWishlistClick = async (e: MouseEvent) => {
    e.stopPropagation();

    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          itemType: "recipe",
          itemId: recipe.id,
        }),
      });
      // The UI is not yet showing saved state; this call just persists the wishlist server-side.
    } catch (err) {
      console.error("Failed to add recipe to wishlist", err);
    }
  };

  return (
    <div
      className="w-72 h-94 rounded-lg overflow-hidden border bg-background hover:shadow-lg transition-shadow cursor-pointer snap-center group"
      onClick={onClick}
    >
      <div className="relative h-56 bg-muted overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
          <p className="text-sm text-slate-500">Recipe Image</p>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {recipe.name}
        </h3>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {recipe.vegetables.map((vegetable, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 border border-green-700 text-green-700 rounded-full"
              >
                {vegetable}
              </span>
            ))}
          </div>
        </div>

        <div className="text-lg font-bold justify-center flex items-center gap-2 text-muted-foreground">
          <span>Cooking Time:</span>
          <span>{recipe.cookingTime}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

