import ingredients from "@/assets/icons/ingredients.png";
import list from "@/assets/icons/list.png";
import plan from "@/assets/icons/planMeals.png";

export const icons = {
  list,
  plan,
  ingredients,
} as const;

export type IconKey = keyof typeof icons;
