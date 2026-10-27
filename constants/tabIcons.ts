import homeFilled from "@/assets/tabIcon/HomeFilled.png";
import homeUnfilled from "@/assets/tabIcon/homeUnfilled.png";
import pantry from "@/assets/tabIcon/pantryFilled.png";
import pantryUnfilled from "@/assets/tabIcon/pantryUnfilled.png";
import profile from "@/assets/tabIcon/profileFilled.png";
import profileUnfilled from "@/assets/tabIcon/profileUnfilled.png";
import reciepe from "@/assets/tabIcon/recipeFilled.png";
import recciepeUnfilled from "@/assets/tabIcon/recipeunfilled.png";
import whatToCook from "@/assets/tabIcon/whatToCook.png";
import whatToCookUnfilled from "@/assets/tabIcon/whatToCookUnfilled.png";

export const tabicons = {
  homeFilled,
  homeUnfilled,
  reciepe,
  recciepeUnfilled,
  whatToCook,
  whatToCookUnfilled,
  pantry,
  pantryUnfilled,
  profile,
  profileUnfilled,
} as const;

export type IconKey = keyof typeof tabicons;
