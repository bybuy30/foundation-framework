import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "@/components/recipes/RecipeCard";
import { getAllRecipes } from "@/data/recipes";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecipeListingSection = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const recipes = getAllRecipes();

  const CARD_WIDTH = 288;
  const GAP = 24; 
  const SCROLL_AMOUNT = CARD_WIDTH + GAP;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-2 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">

        
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-background border shadow
                     items-center justify-center hover:bg-muted transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-background border shadow
                     items-center justify-center hover:bg-muted transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        
        <div
          ref={scrollRef}
          className="
            flex 
            gap-10
            overflow-x-auto 
            pb-6 
            snap-x 
            snap-mandatory 
            scrollbar-hide
          "
        >
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="flex-shrink-0 snap-start"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeListingSection;

