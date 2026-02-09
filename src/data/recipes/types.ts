export interface Recipe {
  id: number;
  slug?: string;
  name: string;
  cookingTime?: string;
  difficulty?: string;
  cuisine?: string;
  heroImage?: string;
  secondaryImage?: string;
  leftOverflowImage?: string;
  rightOverflowImage?: string;
  vegetables?: string[];
  ingredients: string[];
  instructions: string[];
}
