import { Recipe } from "./types";

const recipe10: Recipe = {
  id: 10,
  slug: "lettuce-wrap-veggie-filling",
  name: "Lettuce Wrap Veggie Filling",
  cookingTime: "12 mins",
  difficulty: "Easy",
  cuisine: "Asian Fusion",
  heroImage: "",
  secondaryImage: "",
  leftOverflowImage: "",
  rightOverflowImage: "",
  vegetables: ["Iceberg Lettuce", "Mushroom", "Bell Pepper", "Bok Choy"],
  ingredients: [
    "Iceberg lettuce leaves",
    "1 cup mushrooms, chopped",
    "1 bell pepper, chopped",
    "1 cup bok choy, chopped",
    "1 tbsp oil",
    "Salt",
  ],
  instructions: [
    "Separate and wash lettuce leaves.",
    "Heat oil in a pan.",
    "Add mushrooms and cook until browned.",
    "Add bell pepper and bok choy.",
    "Season and cook briefly.",
    "Spoon mixture into lettuce cups and serve.",
  ],
};

export default recipe10;
