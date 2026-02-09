import { Recipe } from "./types";

const recipe3: Recipe = {
  id: 3,
  slug: "bok-choy-mushroom-stir-fry",
  name: "Bok Choy & Mushroom Stir Fry",
  cookingTime: "15 mins",
  difficulty: "Easy",
  cuisine: "Chinese",
  heroImage: "",
  secondaryImage: "",
  leftOverflowImage: "",
  rightOverflowImage: "",
  vegetables: ["Bok Choy", "Button Mushroom", "Baby Corn"],
  ingredients: [
    "2 cups bok choy, chopped",
    "1 cup button mushrooms, sliced",
    "6–8 baby corns, sliced lengthwise",
    "2 cloves garlic, minced",
    "1 tbsp vegetable oil",
    "1 tbsp soy sauce (optional)",
    "Salt to taste",
  ],
  instructions: [
    "Wash and chop bok choy, separating stems and leaves.",
    "Heat oil in a wok or pan on high heat.",
    "Add garlic and stir quickly until fragrant.",
    "Add mushrooms and baby corn; stir fry for 4–5 minutes.",
    "Add bok choy stems and cook for 2 minutes.",
    "Add bok choy leaves and toss gently.",
    "Add soy sauce and salt, stir fry for another minute.",
    "Serve immediately while hot and crisp.",
  ],
};

export default recipe3;
