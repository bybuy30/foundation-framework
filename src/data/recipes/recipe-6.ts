import { Recipe } from "./types";

const recipe7: Recipe = {
  id: 7,
  slug: "broccoli-bell-pepper-stir-fry",
  name: "Broccoli & Bell Pepper Crunch Stir Fry",
  cookingTime: "15 mins",
  difficulty: "Easy",
  cuisine: "Indo-Chinese",
  heroImage: "",
  secondaryImage: "",
  leftOverflowImage: "",
  rightOverflowImage: "",
  vegetables: ["Broccoli", "Green Capsicum", "Cocktail Bell Peppers"],
  ingredients: [
    "1 cup broccoli florets",
    "1 green capsicum, sliced",
    "1 cup cocktail bell peppers",
    "2 cloves garlic",
    "1 tbsp oil",
    "Salt & pepper",
  ],
  instructions: [
    "Blanch broccoli briefly in hot water and drain.",
    "Heat oil in a pan on high heat.",
    "Add garlic and sauté quickly.",
    "Add peppers and stir fry for 3 minutes.",
    "Add broccoli and toss well.",
    "Season and cook for another 2 minutes.",
    "Serve hot and crunchy.",
  ],
};

export default recipe7;
