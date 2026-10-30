import forward from "@/assets/icons/forward.png";
import help from "@/assets/icons/help.png";
import ingredients from "@/assets/icons/ingredients.png";
import list from "@/assets/icons/list.png";
import plan from "@/assets/icons/planMeals.png";
import search from "@/assets/icons/search.png";
import settings from "@/assets/icons/setting.png";

export const icons = {
  list,
  plan,
  ingredients,
  search,
  forward,
  settings,
  help,
} as const;

export type IconKey = keyof typeof icons;
