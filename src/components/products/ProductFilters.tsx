import { filterCategories, type FilterCategory } from "@/data/filters";

interface ProductFiltersProps {
  activeFilter: string;
  onFilterChange: (categoryId: string) => void;
}

const ProductFilters = ({ activeFilter, onFilterChange }: ProductFiltersProps) => {
    return (
    <div className="flex flex-wrap gap-3">
      {filterCategories.map((filter) => {
        const isActive = activeFilter === filter.id;
  return (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            isActive
              ? "border-2 border-[#43856d] text-[#43856d] bg-transparent rounded-full"
              : "text-gray-600 bg-transparent hover:text-[#43856d]"
          }`}
          aria-pressed={isActive}
        >
          {filter.label}
        </button>
      );
      })}
    </div>
  );
};

export default ProductFilters;

