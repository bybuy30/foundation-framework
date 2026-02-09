import { Recipe } from "./types";

const recipe4: Recipe = {
  id: 4,
  slug: "kale-spinach-breakfast-scramble",
  name: "Kale & Spinach Breakfast Scramble",
  cookingTime: "10 mins",
  difficulty: "Easy",
  cuisine: "Western",
  heroImage: "",
  secondaryImage: "",
  leftOverflowImage: "",
  rightOverflowImage: "",
  vegetables: ["Curly Kale", "Baby Spinach", "Yellow Bell Pepper"],
  ingredients: [
    "1 cup curly kale, chopped",
    "1 cup baby spinach",
    "1 yellow bell pepper, diced",
    "1 tbsp olive oil",
    "1 clove garlic, minced",
    "Salt & pepper to taste",
  ],
  instructions: [
    "Wash and finely chop the kale and spinach.",
    "Heat olive oil in a pan over medium heat.",
    "Add garlic and sauté briefly.",
    "Add diced bell pepper and cook for 2 minutes.",
    "Add kale and cook until slightly wilted.",
    "Add spinach last and stir until just softened.",
    "Season with salt and pepper.",
    "Serve warm as a healthy breakfast dish.",
  ],
};

export default recipe4;
