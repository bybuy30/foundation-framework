/**
 * ProductFilters Component
 * 
 * Filter buttons for product categories.
 * Update filter categories in src/data/filters.ts
 */

import { filterCategories, type FilterCategory } from "@/data/filters";

interface ProductFiltersProps {
  activeFilter: string;
  onFilterChange: (categoryId: string) => void;
}

const ProductFilters = ({ activeFilter, onFilterChange }: ProductFiltersProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {filterCategories.map((category: FilterCategory) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === category.id
              ? "filter-active"
              : "filter-inactive"
          }`}
          aria-pressed={activeFilter === category.id}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default ProductFilters;
