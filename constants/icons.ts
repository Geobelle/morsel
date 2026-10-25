import ingredients from "@/assets/icons/ingredients.png";
import list from "@/assets/icons/list.png";
import plan from "@/assets/icons/planMeals.png";
import search from "@/assets/icons/search.png";

export const icons = {
  list,
  plan,
  ingredients,
  search,
} as const;

export type IconKey = keyof typeof icons;
