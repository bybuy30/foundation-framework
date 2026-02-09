import { Recipe } from "./types";

const recipe9: Recipe = {
  id: 9,
  slug: "baby-corn-capsicum-masala",
  name: "Baby Corn & Capsicum Masala",
  cookingTime: "20 mins",
  difficulty: "Medium",
  cuisine: "Indian",
  heroImage: "",
  secondaryImage: "",
  leftOverflowImage: "",
  rightOverflowImage: "",
  vegetables: ["Baby Corn", "Bell Peppers", "Celery"],
  ingredients: [
    "1 cup baby corn, sliced",
    "1 capsicum, sliced",
    "1 red bell pepper, sliced",
    "1 celery stalk, chopped",
    "Spices (turmeric, chili powder, coriander)",
    "2 tbsp oil",
    "Salt",
  ],
  instructions: [
    "Heat oil in a pan and sauté celery.",
    "Add spices and stir quickly.",
    "Add baby corn and cook for 5 minutes.",
    "Add peppers and mix well.",
    "Cook until vegetables are coated and tender.",
    "Serve hot with flatbread or rice.",
  ],
};

export default recipe9;
