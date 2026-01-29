/**
 * Recipe Filters Section
 * 
 * Displays vegetable-based filters in circular format.
 * Features:
 * - Vegetable image in circular format
 * - Filter selection capability
 * - Multiple vegetable selection support
 */

import { useState } from "react";

const RecipeFiltersSection = () => {
  const [selectedVegetables, setSelectedVegetables] = useState<number[]>([]);

  const vegetables = [
    { id: 1, name: "Vegetable 1", image: "" },
    { id: 2, name: "Vegetable 2", image: "" },
    { id: 3, name: "Vegetable 3", image: "" },
    { id: 4, name: "Vegetable 4", image: "" },
    { id: 5, name: "Vegetable 5", image: "" },
    { id: 6, name: "Vegetable 6", image: "" }
  ];

  const handleVegetableSelect = (id: number) => {
    setSelectedVegetables((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Filter by Vegetables</h2>
        <p className="text-muted-foreground mb-8">
          {/* Description about filtering */}
        </p>

        {/* Vegetable Filters Grid */}
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          {vegetables.map((vegetable) => (
            <div
              key={vegetable.id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleVegetableSelect(vegetable.id)}
            >
              {/* Circular Vegetable Image */}
              <div
                className={`w-24 h-24 rounded-full mb-3 flex items-center justify-center transition-all duration-300 ${
                  selectedVegetables.includes(vegetable.id)
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
                className={`text-sm font-medium transition-colors ${
                  selectedVegetables.includes(vegetable.id)
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {vegetable.name}
              </span>
            </div>
          ))}
        </div>

        {/* Selected Filters Display */}
        {selectedVegetables.length > 0 && (
          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground mb-2">
              Active filters: {selectedVegetables.length}
            </p>
            <button
              onClick={() => setSelectedVegetables([])}
              className="text-xs text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipeFiltersSection;
