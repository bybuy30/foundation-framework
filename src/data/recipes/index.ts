import recipe1 from "./recipe-1";
import recipe2 from "./recipe-2";
import recipe3 from "./recipe-3";
import recipe4 from "./recipe-4";
import recipe5 from "./recipe-5";
import recipe6 from "./recipe-6";
import recipe7 from "./recipe-7";
import recipe8 from "./recipe-8";
import recipe9 from "./recipe-9";
import recipe10 from "./recipe-10";
import { Recipe } from "./types";

// Export all recipe modules so getAllRecipes returns the full dataset
const recipes: Recipe[] = [
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
  recipe7,
  recipe8,
  recipe9,
  recipe10,
];

export const getAllRecipes = () => recipes;

export const getRecipeById = (id: number) => recipes.find((r) => r.id === id);

export default recipes;
