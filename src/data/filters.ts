/**
 * Filter Configuration
 * 
 * This file contains filter categories and logic.
 * Modify categories here to update filters across the entire site.
 */

export interface FilterCategory {
  id: string;
  label: string;
  // Add additional filter criteria here as needed
  // e.g., subcategories, tags, price ranges, etc.
}

export const filterCategories: FilterCategory[] = [
  { id: "all", label: "All" },
  { id: "exotic-greens", label: "Exotic Greens" },
  { id: "live-plants", label: "Live Plants" },
  { id: "peppers", label: "Peppers" },
  { id: "salads", label: "Salads" },
];

/**
 * Filter products by category
 * 
 * @param products - Array of products to filter
 * @param categoryId - Category ID to filter by (use "all" for no filter)
 * @returns Filtered array of products
 * 
 * TODO: Extend this function with additional filter logic as needed
 * - Price range filtering
 * - In-stock filtering
 * - Multiple category selection
 * - Search text matching
 */
export function filterProducts<T extends { category: string }>(
  products: T[],
  categoryId: string
): T[] {
  if (categoryId === "all") {
    return products;
  }
  return products.filter((product) => product.category === categoryId);
}

/**
 * Sort products
 * 
 * TODO: Implement sorting logic
 * - By price (low to high / high to low)
 * - By name (A-Z / Z-A)
 * - By availability
 */
export type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";

export function sortProducts<T extends { name: string; retailPrice: number }>(
  products: T[],
  sortBy: SortOption
): T[] {
  const sorted = [...products];
  
  switch (sortBy) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "price-asc":
      return sorted.sort((a, b) => a.retailPrice - b.retailPrice);
    case "price-desc":
      return sorted.sort((a, b) => b.retailPrice - a.retailPrice);
    default:
      return sorted;
  }
}

export default filterCategories;
