import { icons } from "./tabIcons";

import image from "./image";
import panttryItems from "./panttryItems";

export const tabsDetails = [
  {
    name: "index",
    title: "Home",
    icon: {
      focused: icons.homeFilled,
      unfocused: icons.homeUnfilled,
    },
  },
  {
    name: "recipes",
    title: "Recipes",
    icon: {
      focused: icons.reciepe,
      unfocused: icons.recciepeUnfilled,
    },
  },
  {
    name: "pantry",
    title: "Pantry",
    icon: {
      focused: icons.pantry,
      unfocused: icons.pantryUnfilled,
    },
  },
  {
    name: "whatToCook",
    title: "What to Cook",
    icon: {
      focused: icons.whatToCook,
      unfocused: icons.whatToCookUnfilled,
    },
  },

  {
    name: "profile",
    title: "Profile",
    icon: {
      focused: icons.profile,
      unfocused: icons.profileUnfilled,
    },
  },
];

export const reciepeDetails: ReciepeDetails[] = [
  {
    name: "Jollof Rice",
    id: "jollof-rice",
    time: "45 mins",
    image: image.jollof,
    category: "lunch",
    ingredients:
      " rice, tomatoes, oil, pepper, shobo, onions tomato paste, bay leaf, maggi, curry, salt,",
    Preparation:
      "Wash the rice and blend tomatoes, red bell peppers, scotch bonnet peppers, and onions Cook the stew base: Heat oil, sauté onions, add tomato paste, and fry for a few minutes. Add the blended mixture and cook until thick and the excess water reduces. Add stock, curry powder, thyme, bay leaves, seasoning cubes, and salt to taste. Add rice: Stir in the washed rice until well coated with the sauce. Cover the pot tightly and cook on low heat until the rice is tender, adding a little stock or water if necessary. Allow the rice to steam until fully cooked, fluff gently, and serve hot with chicken, beef, fried plantain, or vegetables.",
  },

  {
    name: "Egusi Soup",
    id: "egusi-soup",
    time: "30 mins",
    image: image.egusi,
    category: "dinner",
    ingredients:
      " egusi, crayfish, stockfish, meat stock, meat, red oil, pepper, leaf, maggi, curry, salt,",
    Preparation:
      "Egusi soup is prepared by boiling seasoned meat and fish until tender. Palm oil is heated with onions and pepper, then ground egusi is added and cooked until thick. Meat stock, crayfish, cooked meat, and fish are added and simmered until the soup thickens. Finally, vegetables such as ugu or bitterleaf are stirred in and cooked briefly. The soup is seasoned to taste and served hot with eba, pounded yam, fufu, or semovita.",
  },
];

export const pantryItems: pantryitem[] = [
  { name: "eggs", id: "16", image: panttryItems.egg, quantity: "2kg" },
  { name: "tomatoes", id: "1", image: panttryItems.tomatoes, quantity: "2kg" },
  { name: "onions", id: "2", image: panttryItems.onions, quantity: "2kg" },
  { name: "chicken", id: "3", image: panttryItems.chicken, quantity: "2kg" },
  { name: "rice", id: "4", image: panttryItems.rice, quantity: "2kg" },
  { name: "oil", id: "5", image: panttryItems.oil, quantity: "2kg" },
  { name: "pepper", id: "6", image: panttryItems.pepper, quantity: "2kg" },
  { name: "garlic", id: "7", image: panttryItems.garlic, quantity: "2kg" },
  { name: "ginger", id: "8", image: panttryItems.ginger, quantity: "2kg" },
  { name: "palm oil", id: "9", image: panttryItems.palmOil, quantity: "2kg" },
  { name: "beans", id: "10", image: panttryItems.beans, quantity: "2kg" },
  {
    name: "bell pepper",
    id: "11",
    image: panttryItems.bellPepper,
    quantity: "2kg",
  },
  { name: "plantain", id: "12", image: panttryItems.plantain, quantity: "2kg" },
  { name: "ugu", id: "13", image: panttryItems.ugu, quantity: "2kg" },
  {
    name: "zobo leaf",
    id: "14",
    image: panttryItems.zoboLeaf,
    quantity: "2kg",
  },
  { name: "fish", id: "15", image: panttryItems.fish, quantity: "2kg" },
];
