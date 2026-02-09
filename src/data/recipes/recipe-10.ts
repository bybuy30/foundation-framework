import { Recipe } from "./types";

const recipe11: Recipe = {
  id: 11,
  slug: "green-detox-soup",
  name: "Green Detox Soup Bowl",
  cookingTime: "25 mins",
  difficulty: "Medium",
  cuisine: "Global Wellness",
  heroImage: "",
  secondaryImage: "",
  leftOverflowImage: "",
  rightOverflowImage: "",
  vegetables: ["Broccoli", "Spinach", "Kale", "Celery", "Zucchini"],
  ingredients: [
    "1 cup broccoli",
    "1 cup spinach",
    "1 cup kale",
    "1 celery stalk",
    "1 zucchini",
    "2 cloves garlic",
    "Water or vegetable stock",
    "Salt & pepper",
  ],
  instructions: [
    "Chop all vegetables into medium pieces.",
    "Add vegetables and garlic to a pot with water or stock.",
    "Bring to boil and simmer for 15 minutes.",
    "Blend until smooth.",
    "Reheat gently and season.",
    "Serve warm as a light dinner.",
  ],
};

export default recipe11;
