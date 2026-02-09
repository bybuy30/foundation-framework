import { useState } from "react";
import RecipeCard from "@/components/recipes/RecipeCard";
import { getAllRecipes } from "@/data/recipes";
import { Search, Heart, User, Menu, X } from "lucide-react";

const RecipeFiltersSection = () => {
  const [selectedVegetables, setSelectedVegetables] = useState<number[]>([]);

  const vegetables = [
    { id: 1, name: "Vegetable 1", image: "" },
    { id: 2, name: "Vegetable 2", image: "" },
    { id: 3, name: "Vegetable 3", image: "" },
    { id: 4, name: "Vegetable 4", image: "" },
    { id: 5, name: "Vegetable 5", image: "" },
    { id: 6, name: "Vegetable 6", image: "" },
    { id: 7, name: "Vegetable 7", image: "" },
    { id: 8, name: "Vegetable 8", image: "" },
    { id: 9, name: "Vegetable 9", image: "" },
    { id: 10, name: "Vegetable 10", image: "" }
  ];

  const handleVegetableSelect = (id: number) => {
    setSelectedVegetables((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Centered Intro Heading */}
        <div className="text-center mb-12">
<h1 className="font-Rubik text-4xl md:text-5xl mb-4 leading-tight">
  Fresh recipes to try
</h1>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            From comforting favorites to nutritious, feel-good meals,
            we bring you a wide range of recipes crafted to suit every taste and lifestyle.
          </p>
        </div>

          <div className="hidden md:flex flex-1 max-w-md mx-[20rem] justify-center mb-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
              <input
                type="text"
                placeholder="What are you looking to cooking today?"
                className="search-bar w-full pl-10"
              />
            </div>
          </div>

        <p className="text-muted-foreground mb-8">
          {/* Description about filtering */}
        </p>

        {/* Your vegetable grid goes here */}



        {/* Vegetable Filters Grid */}
        <div className="flex gap-8 justify-center">
          {vegetables.map((vegetable) => (
            <div
              key={vegetable.id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleVegetableSelect(vegetable.id)}
            >
              {/* Circular Vegetable Image */}
              <div
                className={`w-24 h-24 rounded-full mb-3 flex items-center justify-center transition-all duration-300 ${selectedVegetables.includes(vegetable.id)
                  ? "bg-primary/20 ring-2 ring-primary scale-110"
                  : "bg-muted group-hover:bg-muted/80"
                  }`}
              >
                {/* Vegetable image would go here */}
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    {vegetable.name.split(" ")[0]}
                  </p>
                </div>
              </div>

              {/* Vegetable Name */}
              <span
                className={`text-sm font-medium transition-colors ${selectedVegetables.includes(vegetable.id)
                  ? "text-primary"
                  : "text-foreground"
                  }`}
              >
                {vegetable.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecipeFiltersSection;
