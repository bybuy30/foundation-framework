import { Recipe } from "./types";

const recipe2: Recipe = {
  id: 2,
  slug: "mediterranean-zucchini-bell-pepper-saute",
  name: "Mediterranean Zucchini & Bell Pepper Sauté",
  cookingTime: "20 mins",
  difficulty: "Easy",
  cuisine: "Mediterranean",
  heroImage: "",
  secondaryImage: "",
  leftOverflowImage: "",
  rightOverflowImage: "",
  vegetables: ["Zucchini", "Bell Peppers", "Italian Basil"],
  ingredients: [
    "1 green zucchini, sliced",
    "1 yellow zucchini, sliced",
    "1 red bell pepper, sliced",
    "1 yellow bell pepper, sliced",
    "2 cloves garlic, minced",
    "2 tbsp olive oil",
    "Salt & black pepper to taste",
    "Fresh Italian basil leaves",
  ],
  instructions: [
    "Wash and slice all vegetables evenly to ensure uniform cooking.",
    "Heat olive oil in a wide pan over medium heat.",
    "Add minced garlic and sauté for 30 seconds until aromatic.",
    "Add bell peppers first and cook for 3–4 minutes until slightly soft.",
    "Add zucchini slices and toss well.",
    "Cook for another 6–8 minutes, stirring occasionally.",
    "Season with salt and black pepper.",
    "Turn off heat and garnish with fresh basil before serving.",
  ],
};

export default recipe2;
