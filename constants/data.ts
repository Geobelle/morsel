import { icons } from "./tabIcons";

import image from "./image";

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
