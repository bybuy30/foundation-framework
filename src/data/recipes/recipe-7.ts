import { Recipe } from "./types";

const recipe8: Recipe = {
  id: 8,
  slug: "swiss-chard-tomato-saute",
  name: "Swiss Chard & Tomato Rustic Sauté",
  cookingTime: "15 mins",
  difficulty: "Easy",
  cuisine: "European",
  heroImage: "",
  secondaryImage: "",
  leftOverflowImage: "",
  rightOverflowImage: "",
  vegetables: ["Swiss Chard", "Cherry Tomato"],
  ingredients: [
    "1 bunch swiss chard",
    "1 cup cherry tomatoes",
    "2 cloves garlic",
    "1 tbsp olive oil",
    "Salt",
  ],
  instructions: [
    "Separate chard stems from leaves and chop.",
    "Heat olive oil in a pan.",
    "Add garlic and sauté lightly.",
    "Add chard stems and cook for 3 minutes.",
    "Add leaves and tomatoes.",
    "Cook until leaves wilt and tomatoes soften.",
    "Season and serve warm.",
  ],
};

export default recipe8;
