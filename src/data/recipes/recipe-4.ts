import { Recipe } from "./types";

const recipe5: Recipe = {
  id: 5,
  slug: "rainbow-veggie-salad-bowl",
  name: "Rainbow Veggie Salad Bowl",
  cookingTime: "10 mins",
  difficulty: "Very Easy",
  cuisine: "International",
  heroImage: "",
  secondaryImage: "",
  leftOverflowImage: "",
  rightOverflowImage: "",
  vegetables: ["Lettuce Mix", "Rocket Leaves", "Cucumber", "Cherry Tomato", "Bell Peppers"],
  ingredients: [
    "2 cups lettuce mix",
    "1 cup rocket leaves",
    "1 cucumber, sliced",
    "1 cup cherry tomatoes",
    "1 bell pepper, sliced",
    "1 tbsp olive oil",
    "1 tbsp lemon juice",
    "Salt to taste",
  ],
  instructions: [
    "Wash and pat dry all vegetables thoroughly.",
    "Slice cucumber, tomatoes, and bell pepper.",
    "Add all vegetables to a large mixing bowl.",
    "Drizzle olive oil and lemon juice evenly.",
    "Sprinkle salt and toss gently.",
    "Serve immediately for best freshness.",
  ],
};

export default recipe5;
