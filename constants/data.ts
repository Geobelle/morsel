import { tabicons } from "./tabIcons";

import image from "./image";
import panttryItems from "./panttryItems";

export const tabsDetails = [
  {
    name: "index",
    title: "Home",
    icon: {
      focused: tabicons.homeFilled,
      unfocused: tabicons.homeUnfilled,
    },
  },
  {
    name: "recipes",
    title: "Recipes",
    icon: {
      focused: tabicons.reciepe,
      unfocused: tabicons.recciepeUnfilled,
    },
  },
  {
    name: "pantry",
    title: "Pantry",
    icon: {
      focused: tabicons.pantry,
      unfocused: tabicons.pantryUnfilled,
    },
  },
  {
    name: "whatToCook",
    title: "What to Cook",
    icon: {
      focused: tabicons.whatToCook,
      unfocused: tabicons.whatToCookUnfilled,
    },
  },

  {
    name: "profile",
    title: "Profile",
    icon: {
      focused: tabicons.profile,
      unfocused: tabicons.profileUnfilled,
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
    ingredients: [
      { id: "rice", name: "Rice", quantity: "2 cups" },
      { id: "tomatoes", name: "Tomatoes", quantity: "2 cups" },
      { id: "oil", name: "oil", quantity: "2 cups" },
      { id: "pepper", name: "pepper", quantity: "2 cups" },
      { id: "shobo", name: "shobo", quantity: "2 cups" },
      { id: "onions", name: "onions", quantity: "2 cups" },
      { id: "tomatoPaste", name: "tomato paste", quantity: "2 cups" },
      { id: "bayleaf", name: "bay leaf", quantity: "2 cups" },
      { id: "maggi", name: "maggi", quantity: "2 cups" },
      { id: "curry", name: "curry", quantity: "2 cups" },
      { id: "salt", name: "salt", quantity: "2 cups" },
    ],

    Preparation: [
      {
        id: "1",
        name: "Wash the rice thoroughly under running water and set aside.",
      },
      {
        id: "2",
        name: "Blend tomatoes, red bell peppers, scotch bonnet peppers and onions until smooth.",
      },
      {
        id: "3",
        name: "Heat vegetable oil in a pot, add sliced onions and tomato paste, and fry for a few minutes.",
      },
      {
        id: "4",
        name: "Pour in the blended pepper mixture and cook until the sauce thickens and the excess liquid reduces.",
      },
      {
        id: "5",
        name: "Season with curry powder, thyme, stock cubes, salt and your preferred spices.",
      },
      {
        id: "6",
        name: "Add stock and rinsed rice, stirring until the rice is evenly coated with the sauce.",
      },
      {
        id: "7",
        name: "Cover the pot with foil and a lid, then cook on low heat until the rice is tender, stirring occasionally.",
      },
      {
        id: "8",
        name: "Fluff the rice gently, allow it to steam for a few more minutes, and serve hot.",
      },
    ],
  },

  {
    name: "Egusi Soup",
    id: "egusi-soup",
    time: "30 mins",
    image: image.egusi,
    category: "dinner",
    ingredients: [
      { id: "egusi", name: "egusi", quantity: "2 cups" },
      { id: "crayfish", name: "crayfish", quantity: "2 cups" },
      { id: "stockfish", name: "stockfish", quantity: "2 cups" },
      { id: "pepper", name: "pepper", quantity: "2 cups" },
      { id: "meatstock", name: "meat stock", quantity: "2 cups" },
      { id: "meat", name: "meat", quantity: "2 cups" },
      { id: "redoil", name: "red oil", quantity: "2 cups" },
      { id: "leaf", name: "leaf", quantity: "2 cups" },
      { id: "maggi", name: "maggi", quantity: "2 cups" },
      { id: "curry", name: "curry", quantity: "2 cups" },
      { id: "salt", name: "salt", quantity: "2 cups" },
    ],

    Preparation: [
      {
        id: "1",
        name: "Wash and season your meat or assorted meat with onions, stock cubes and salt, then cook until tender.",
      },
      {
        id: "2",
        name: "Grind the egusi seeds into a smooth powder and mix with a little water to form a thick paste.",
      },
      {
        id: "3",
        name: "Heat palm oil in a pot, add chopped onions and fry briefly.",
      },
      {
        id: "4",
        name: "Add blended pepper and cook until the mixture thickens and the oil begins to separate.",
      },
      {
        id: "5",
        name: "Add the egusi paste in small portions and allow it to cook until it forms soft lumps.",
      },
      {
        id: "6",
        name: "Pour in the meat stock, add the cooked meat, crayfish, stock cubes and salt, then stir gently.",
      },
      {
        id: "7",
        name: "Cover and simmer until the egusi is fully cooked and the soup reaches your preferred consistency.",
      },
      {
        id: "8",
        name: "Add washed ugu or spinach leaves, stir and cook for a few more minutes.",
      },
      {
        id: "9",
        name: "Taste and adjust the seasoning, then serve hot with your preferred swallow.",
      },
    ],
  },
];

export const pantryItems: pantryitem[] = [
  {
    name: "eggs",
    id: "16",
    image: panttryItems.egg,
    quantity: 2,
    category: "Fresh",
    unit: "pcs",
  },
  {
    name: "tomatoes",
    id: "1",
    image: panttryItems.tomatoes,
    quantity: 2,
    category: "Fresh",
    unit: "kg",
  },
  {
    name: "onions",
    id: "2",
    image: panttryItems.onions,
    quantity: 2,
    category: "Fresh",
    unit: "pcs",
  },
  {
    name: "chicken",
    id: "3",
    image: panttryItems.chicken,
    quantity: 2,
    category: "Frozen",
    unit: "kg",
  },
  {
    name: "rice",
    id: "4",
    image: panttryItems.rice,
    quantity: 2,
    category: "Dry",
    unit: "kg",
  },
  {
    name: "oil",
    id: "5",
    image: panttryItems.oil,
    quantity: 2,
    category: "Others",
    unit: "bottles",
  },
  {
    name: "pepper",
    id: "6",
    image: panttryItems.pepper,
    quantity: 2,
    category: "Fresh",
    unit: "kg",
  },
  {
    name: "garlic",
    id: "7",
    image: panttryItems.garlic,
    quantity: 2,
    category: "Dry",
    unit: "pcs",
  },
  {
    name: "ginger",
    id: "8",
    image: panttryItems.ginger,
    quantity: 2,
    category: "Fresh",
    unit: "slices",
  },
  {
    name: "palm oil",
    id: "9",
    image: panttryItems.palmOil,
    quantity: 2,
    category: "Others",
    unit: "bottles",
  },
  {
    name: "beans",
    id: "10",
    image: panttryItems.beans,
    quantity: 2,
    category: "Dry",
    unit: "kg",
  },
  {
    name: "bell pepper",
    id: "11",
    image: panttryItems.bellPepper,
    quantity: 2,
    category: "Fresh",
    unit: "pcs",
  },
  {
    name: "plantain",
    id: "12",
    image: panttryItems.plantain,
    quantity: 2,
    category: "Fresh",
    unit: "pcs",
  },
  {
    name: "ugu",
    id: "13",
    image: panttryItems.ugu,
    quantity: 2,
    category: "Fresh",
    unit: "pcs",
  },
  {
    name: "zobo leaf",
    id: "14",
    image: panttryItems.zoboLeaf,
    quantity: 2,
    category: "Dry",
    unit: "kg",
  },
  {
    name: "fish",
    id: "15",
    image: panttryItems.fish,
    quantity: 2,
    category: "Fresh",
    unit: "kg",
  },
];

export const exactRecipe: ReciepeDetails[] = [];
export const partialRecipe: ReciepeDetails[] = [];
