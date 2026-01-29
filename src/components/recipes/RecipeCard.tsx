import { Button } from "@/components/ui/button";

interface Recipe {
  id: number;
  name: string;
  image: string;
  vegetables: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  return (
    <div
      className="flex-shrink-0 w-64 rounded-lg overflow-hidden border bg-background hover:shadow-lg transition-shadow cursor-pointer snap-center group"
      onClick={onClick}
    >
      {/* Recipe Image */}
      <div className="aspect-video bg-muted overflow-hidden relative">
        {/* Recipe dish image would go here */}
        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center group-hover:opacity-90 transition-opacity">
          <p className="text-sm text-slate-500">Recipe Image</p>
        </div>
      </div>

      {/* Recipe Details */}
      <div className="p-4">
        {/* Recipe Name */}
        <h3 className="font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {recipe.name}
        </h3>

        {/* Associated Vegetables */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {recipe.vegetables.map((vegetable, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-green-100/50 text-green-700 rounded-full"
              >
                {vegetable}
              </span>
            ))}
          </div>
        </div>

        {/* View Recipe Button */}
        <Button
          variant="outline"
          className="w-full text-sm"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          View Recipe
        </Button>
      </div>
    </div>
  );
};

export default RecipeCard;
