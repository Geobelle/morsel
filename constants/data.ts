import { tabicons } from "./tabIcons";

import image from "./image";
import panttryItems from "./panttryItems";
import recipeImage from "./recipeImage";

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
      { id: "tomatoes", name: "Tomatoes", quantity: "4 medium" },
      { id: "oil", name: "Oil", quantity: "½ cup" },
      { id: "pepper", name: "Pepper", quantity: "4 pieces" },
      { id: "shobo", name: "Shombo", quantity: "5 pieces" },
      { id: "onions", name: "Onions", quantity: "2 medium" },
      { id: "tomatoPaste", name: "Tomato paste", quantity: "1 small tin" },
      { id: "bayleaf", name: "Bay leaf", quantity: "2 leaves" },
      { id: "maggi", name: "Seasoning cubes", quantity: "3 cubes" },
      { id: "curry", name: "Curry powder", quantity: "1 tsp" },
      { id: "salt", name: "Salt", quantity: "To taste" },
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
      { id: "egusi", name: "Ground egusi", quantity: "2 cups" },
      { id: "crayfish", name: "Ground crayfish", quantity: "3 tbsp" },
      { id: "stockfish", name: "Stockfish", quantity: "2 pieces" },
      { id: "pepper", name: "Fresh pepper", quantity: "4" },
      { id: "meat-stock", name: "Meat stock", quantity: "2 cups" },
      { id: "meat", name: "Assorted meat", quantity: "500g" },
      { id: "palm-oil", name: "Palm oil", quantity: "½ cup" },
      { id: "vegetables", name: "Ugu leaves", quantity: "2 cups" },
      { id: "seasoning", name: "Seasoning cubes", quantity: "2" },
      { id: "onion", name: "Onion", quantity: "1" },
      { id: "salt", name: "Salt", quantity: "To taste" },
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

  {
    name: "Pancakes",
    image: recipeImage.pancake,
    id: "pancakes",
    time: "20 mins",
    category: "Breakfast",
    ingredients: [
      { id: "flour", name: "All-purpose flour", quantity: "1 cup" },
      { id: "milk", name: "Milk", quantity: "¾ cup" },
      { id: "egg", name: "Egg", quantity: "1" },
      { id: "sugar", name: "Sugar", quantity: "2 tbsp" },
      { id: "baking-powder", name: "Baking powder", quantity: "1 tsp" },
      { id: "butter", name: "Butter", quantity: "2 tbsp" },
      { id: "salt", name: "Salt", quantity: "½ tsp" },
    ],
    Preparation: [
      {
        id: "1",
        name: "Combine flour, sugar, baking powder and salt in a mixing bowl.",
      },
      {
        id: "2",
        name: "Whisk the milk, egg and melted butter in a separate bowl.",
      },
      {
        id: "3",
        name: "Pour the wet ingredients into the dry ingredients and mix until combined.",
      },
      { id: "4", name: "Heat a lightly greased frying pan over medium heat." },
      {
        id: "5",
        name: "Pour small portions of batter into the pan and cook until bubbles appear.",
      },
      {
        id: "6",
        name: "Flip and cook the other side until golden brown. Serve with your preferred toppings.",
      },
    ],
  },
  {
    name: "Bread and Tea",
    image: recipeImage.tea,
    id: "bread-and-tea",
    time: "10 mins",
    category: "Breakfast",
    ingredients: [
      { id: "bread", name: "Sliced bread", quantity: "4 slices" },
      { id: "tea", name: "Tea bag", quantity: "1" },
      { id: "milk", name: "Milk", quantity: "½ cup" },
      { id: "sugar", name: "Sugar", quantity: "2 tsp" },
      { id: "water", name: "Water", quantity: "1 cup" },
    ],
    Preparation: [
      { id: "1", name: "Boil water in a kettle or small pot." },
      {
        id: "2",
        name: "Place the tea bag in a cup and pour in the hot water.",
      },
      { id: "3", name: "Allow the tea to steep for a few minutes." },
      { id: "4", name: "Add milk and sugar, then stir until well combined." },
      { id: "5", name: "Serve hot with slices of fresh bread." },
    ],
  },
  {
    name: "French Toast",
    image: recipeImage.frenchToast,
    id: "french-toast",
    time: "15 mins",
    category: "Breakfast",
    ingredients: [
      { id: "bread", name: "Bread slices", quantity: "4 slices" },
      { id: "egg", name: "Eggs", quantity: "2" },
      { id: "milk", name: "Milk", quantity: "¼ cup" },
      { id: "sugar", name: "Sugar", quantity: "1 tbsp" },
      { id: "cinnamon", name: "Cinnamon", quantity: "½ tsp" },
      { id: "butter", name: "Butter", quantity: "2 tbsp" },
      { id: "vanilla", name: "Vanilla extract", quantity: "½ tsp" },
    ],
    Preparation: [
      {
        id: "1",
        name: "Whisk eggs, milk, sugar, cinnamon and vanilla extract in a shallow bowl.",
      },
      {
        id: "2",
        name: "Dip each bread slice into the mixture, coating both sides.",
      },
      { id: "3", name: "Heat butter in a frying pan over medium heat." },
      {
        id: "4",
        name: "Place the soaked bread slices in the pan and cook until golden brown.",
      },
      {
        id: "5",
        name: "Flip and cook the other side, then serve warm with your preferred toppings.",
      },
    ],
  },
  {
    name: "Fried Egg and Plantain",
    image: recipeImage.eggAndPlantain,
    id: "fried-egg-and-plantain",
    time: "20 mins",
    category: "Breakfast",
    ingredients: [
      { id: "plantain", name: "plantain", quantity: "2" },
      { id: "egg", name: "Eggs", quantity: "3" },
      { id: "tomato", name: "Tomatoes", quantity: "2" },
      { id: "pepper", name: "Fresh pepper", quantity: "2" },
      { id: "onion", name: "Onion", quantity: "½" },
      { id: "oil", name: " oil", quantity: "½ cup" },
      { id: "salt", name: "Salt", quantity: "To taste" },
    ],
    Preparation: [
      {
        id: "1",
        name: "Peel the plantains and slice them into your preferred shape.",
      },
      {
        id: "2",
        name: "Heat vegetable oil in a frying pan and fry the plantain until golden brown on both sides.",
      },
      { id: "3", name: "Remove the plantain and set aside." },
      { id: "4", name: "Chop the tomatoes, pepper and onions." },
      {
        id: "5",
        name: "Heat a little oil in a pan, add the chopped vegetables and fry briefly.",
      },
      {
        id: "6",
        name: "Whisk the eggs with salt, pour into the pan and scramble or fry until cooked.",
      },
      { id: "7", name: "Serve the fried egg with the fried plantain." },
    ],
  },

  // DRINKS
  {
    name: "Zobo Drink",
    image: recipeImage.zobo,
    id: "zobo-drink",
    time: "40 mins",
    category: "Drinks",
    ingredients: [
      { id: "zobo", name: "Dried hibiscus leaves", quantity: "2 cups" },
      { id: "pineapple", name: "Pineapple", quantity: "1 medium" },
      { id: "ginger", name: "Fresh ginger", quantity: "1 piece" },
      { id: "cloves", name: "Cloves", quantity: "1 tsp" },
      { id: "water", name: "Water", quantity: "8 cups" },
      { id: "sugar", name: "Sugar", quantity: "To taste" },
    ],
    Preparation: [
      {
        id: "1",
        name: "Rinse the dried hibiscus leaves thoroughly to remove dirt.",
      },
      {
        id: "2",
        name: "Wash and cut the pineapple, ginger and other flavourings.",
      },
      {
        id: "3",
        name: "Add the hibiscus leaves, pineapple peel, ginger and cloves to a pot of water.",
      },
      {
        id: "4",
        name: "Boil for about 25–30 minutes until the water becomes deep red and flavourful.",
      },
      {
        id: "5",
        name: "Allow the mixture to cool, then strain into a clean container.",
      },
      {
        id: "6",
        name: "Add sugar to taste, stir and refrigerate until chilled.",
      },
      { id: "7", name: "Serve cold." },
    ],
  },
  {
    name: "Tigernut Drink",
    image: recipeImage.tigernut,
    id: "tigernut-drink",
    time: "30 mins",
    category: "Drinks",
    ingredients: [
      { id: "tigernut", name: "Dried or fresh tigernuts", quantity: "2 cups" },
      { id: "dates", name: "Dates", quantity: "½ cup" },
      { id: "coconut", name: "Coconut", quantity: "1 medium" },
      { id: "ginger", name: "Fresh ginger", quantity: "1 small piece" },
      { id: "water", name: "Water", quantity: "4 cups" },
    ],
    Preparation: [
      {
        id: "1",
        name: "Wash the tigernuts thoroughly and soak them in water until softened.",
      },
      {
        id: "2",
        name: "Remove the seeds from the dates and cut the coconut into smaller pieces.",
      },
      {
        id: "3",
        name: "Add the tigernuts, dates, coconut and ginger to a blender.",
      },
      { id: "4", name: "Pour in some water and blend until smooth." },
      {
        id: "5",
        name: "Strain the mixture through a fine sieve or nut milk bag.",
      },
      { id: "6", name: "Add more water if needed, stir and refrigerate." },
      {
        id: "7",
        name: "Serve chilled. Keep refrigerated and consume within a few days.",
      },
    ],
  },

  // LUNCH AND DINNER
  {
    name: "Fried Rice",
    image: recipeImage.friedRice,
    id: "fried-rice",
    time: "45 mins",
    category: "Dinner",
    ingredients: [
      { id: "rice", name: "Rice", quantity: "3 cups" },
      { id: "carrot", name: "Carrots", quantity: "2" },
      { id: "peas", name: "Green peas", quantity: "½ cup" },
      { id: "green-beans", name: "Green beans", quantity: "½ cup" },
      { id: "corn", name: "Sweet corn", quantity: "½ cup" },
      { id: "liver", name: "Liver", quantity: "1 cup" },
      { id: "onion", name: "Onion", quantity: "1" },
      { id: "oil", name: " oil", quantity: "½ cup" },
      { id: "curry", name: "Curry powder", quantity: "1 tsp" },
      { id: "thyme", name: "Thyme", quantity: "1 tsp" },
      { id: "stock", name: "Chicken stock", quantity: "As needed" },
      { id: "salt", name: "Salt", quantity: "To taste" },
    ],
    Preparation: [
      {
        id: "1",
        name: "Wash the rice and cook it in seasoned chicken stock until tender but firm.",
      },
      {
        id: "2",
        name: "Dice the carrots, green beans, onions and liver into small pieces.",
      },
      {
        id: "3",
        name: "Cook the liver separately until tender, then cut into smaller cubes.",
      },
      {
        id: "4",
        name: "Heat vegetable oil in a large pan and sauté the onions.",
      },
      {
        id: "5",
        name: "Add the vegetables, peas, sweet corn and liver, then stir-fry briefly.",
      },
      { id: "6", name: "Season with curry, thyme, salt and seasoning cubes." },
      {
        id: "7",
        name: "Add the cooked rice in batches and stir-fry until everything is evenly combined.",
      },
      { id: "8", name: "Taste, adjust the seasoning and serve hot." },
    ],
  },
  {
    name: "Asun Rice",
    image: recipeImage.asunrice,
    id: "asun-rice",
    time: "50 mins",
    category: "Dinner",
    ingredients: [
      { id: "rice", name: "Rice", quantity: "3 cups" },
      { id: "goat-meat", name: "Goat meat", quantity: "500g" },
      { id: "pepper", name: "Scotch bonnet peppers", quantity: "5" },
      { id: "bell-pepper", name: "Red bell pepper", quantity: "1" },
      { id: "onion", name: "Onions", quantity: "2" },
      { id: "garlic", name: "Garlic", quantity: "2 cloves" },
      { id: "oil", name: " oil", quantity: "3 tbsp" },
      { id: "stock-cube", name: "Seasoning cubes", quantity: "2" },
      { id: "salt", name: "Salt", quantity: "To taste" },
    ],
    Preparation: [
      {
        id: "1",
        name: "Wash and season the goat meat with onions, salt and seasoning cubes.",
      },
      {
        id: "2",
        name: "Cook until tender, then grill or roast until slightly charred.",
      },
      { id: "3", name: "Cut the goat meat into bite-sized pieces." },
      {
        id: "4",
        name: "Blend the peppers, bell pepper, garlic and some onions roughly.",
      },
      {
        id: "5",
        name: "Heat oil in a pot, add the remaining onions and fry briefly.",
      },
      {
        id: "6",
        name: "Add the pepper mixture and cook until the sauce thickens.",
      },
      {
        id: "7",
        name: "Add the roasted goat meat and stir until well coated in the spicy sauce.",
      },
      {
        id: "8",
        name: "Cook the rice separately until tender, then serve with the asun.",
      },
    ],
  },
  {
    name: "White Rice and Stew",
    image: recipeImage.riceandStew,
    id: "white-rice-and-stew",
    time: "45 mins",
    category: "Lunch",
    ingredients: [
      { id: "rice", name: "Rice", quantity: "3 cups" },
      { id: "tomatoes", name: "Fresh tomatoes", quantity: "6" },
      { id: "pepper", name: "Red bell pepper", quantity: "2" },
      { id: "scotch-bonnet", name: "Scotch bonnet pepper", quantity: "2" },
      { id: "onion", name: "Onion", quantity: "2" },
      { id: "tomato-paste", name: "Tomato paste", quantity: "2 tbsp" },
      { id: "oil", name: " oil", quantity: "½ cup" },
      { id: "meat", name: "Beef or chicken", quantity: "500g" },
      { id: "stock", name: "Meat stock", quantity: "1 cup" },
      { id: "seasoning", name: "Seasoning cubes", quantity: "2" },
      { id: "salt", name: "Salt", quantity: "To taste" },
    ],
    Preparation: [
      {
        id: "1",
        name: "Wash the rice and cook in salted water until soft and fluffy.",
      },
      {
        id: "2",
        name: "Season the meat with onions, salt and seasoning cubes, then cook until tender.",
      },
      { id: "3", name: "Blend the tomatoes, peppers and onions until smooth." },
      {
        id: "4",
        name: "Heat vegetable oil in a pot and fry the tomato paste for a few minutes.",
      },
      {
        id: "5",
        name: "Add the blended pepper mixture and cook until the sauce thickens.",
      },
      { id: "6", name: "Add meat stock, seasoning and the cooked meat." },
      {
        id: "7",
        name: "Simmer until the stew is rich and the oil begins to separate.",
      },
      { id: "8", name: "Serve the stew over the cooked white rice." },
    ],
  },
  {
    name: "Rice and Beans",
    image: recipeImage.riceandBeans,
    id: "rice-and-beans",
    time: "50 mins",
    category: "Lunch",
    ingredients: [
      { id: "rice", name: "Rice", quantity: "2 cups" },
      { id: "beans", name: "Brown beans", quantity: "1 cup" },
      { id: "onion", name: "Onion", quantity: "1" },
      { id: "salt", name: "Salt", quantity: "To taste" },
      { id: "water", name: "Water", quantity: "As needed" },
    ],
    Preparation: [
      { id: "1", name: "Pick and wash the beans thoroughly." },
      {
        id: "2",
        name: "Place the beans in a pot with enough water and cook until partially tender.",
      },
      { id: "3", name: "Wash the rice and add it to the pot of beans." },
      {
        id: "4",
        name: "Add chopped onions, salt and enough water to cook the rice.",
      },
      {
        id: "5",
        name: "Cover and cook on low heat until both the rice and beans are soft.",
      },
      {
        id: "6",
        name: "Allow the remaining water to dry up, fluff gently and serve with stew or sauce.",
      },
    ],
  },
  {
    name: "Oil Rice",
    image: recipeImage.oilrice,
    id: "oil-rice",
    time: "40 mins",
    category: "Lunch",
    ingredients: [
      { id: "rice", name: "Rice", quantity: "3 cups" },
      { id: "palm-oil", name: "Palm oil", quantity: "½ cup" },
      { id: "smoked-fish", name: "Smoked fish", quantity: "1 medium" },
      { id: "crayfish", name: "Ground crayfish", quantity: "3 tbsp" },
      { id: "pepper", name: "Fresh pepper", quantity: "3" },
      { id: "onion", name: "Onion", quantity: "1" },
      { id: "stock", name: "Meat or fish stock", quantity: "2 cups" },
      { id: "seasoning", name: "Seasoning cubes", quantity: "2" },
      { id: "salt", name: "Salt", quantity: "To taste" },
    ],
    Preparation: [
      { id: "1", name: "Wash the rice and set aside." },
      { id: "2", name: "Clean the smoked fish and remove any bones." },
      { id: "3", name: "Blend or chop the fresh pepper and onions." },
      {
        id: "4",
        name: "Heat palm oil in a pot and sauté the onions and pepper.",
      },
      {
        id: "5",
        name: "Add the crayfish, smoked fish, seasoning cubes and salt.",
      },
      {
        id: "6",
        name: "Pour in the stock and bring the mixture to a gentle boil.",
      },
      { id: "7", name: "Add the washed rice, stir and cover the pot." },
      {
        id: "8",
        name: "Cook on low heat until the rice is tender and has absorbed the flavourful sauce.",
      },
      { id: "9", name: "Fluff gently and serve hot." },
    ],
  },

  // SOUPS

  {
    name: "Owho Soup",
    image: recipeImage.owho,
    id: "owho-soup",
    time: "60 mins",
    category: "Dinner",
    ingredients: [
      { id: "owho", name: "Owho powder", quantity: "2 cups" },
      { id: "meat", name: "Assorted meat", quantity: "500g" },
      { id: "smoked-fish", name: "Smoked fish", quantity: "1 medium" },
      { id: "stockfish", name: "Stockfish", quantity: "2 pieces" },
      { id: "palm-oil", name: "Palm oil", quantity: "½ cup" },
      { id: "pepper", name: "Fresh pepper", quantity: "4" },
      { id: "crayfish", name: "Ground crayfish", quantity: "3 tbsp" },
      { id: "potash", name: "Potash solution", quantity: "As needed" },
      { id: "seasoning", name: "Seasoning cubes", quantity: "2" },
      { id: "salt", name: "Salt", quantity: "To taste" },
    ],
    Preparation: [
      {
        id: "1",
        name: "Wash and season the assorted meat and stockfish, then cook until tender.",
      },
      { id: "2", name: "Clean the smoked fish, remove bones and set aside." },
      {
        id: "3",
        name: "Mix the Owho powder with a little water until smooth and free of lumps.",
      },
      {
        id: "4",
        name: "Add the meat stock to a pot and bring it to a gentle boil.",
      },
      {
        id: "5",
        name: "Add the palm oil, blended pepper, crayfish and cooked meat.",
      },
      {
        id: "6",
        name: "Stir in the Owho mixture gradually while mixing to prevent lumps.",
      },
      {
        id: "7",
        name: "Add the smoked fish and season with salt and seasoning cubes.",
      },
      {
        id: "8",
        name: "Add a little properly prepared potash solution if needed, following the traditional preparation method.",
      },
      {
        id: "9",
        name: "Simmer until the soup thickens and the ingredients are well combined. Serve with starch or your preferred swallow.",
      },
    ],
  },
  {
    name: "Vegetable Soup",
    image: recipeImage.vegetablesoup,
    id: "vegetable-soup",
    time: "45 mins",
    category: "Dinner",
    ingredients: [
      { id: "ugu", name: "Ugu leaves", quantity: "3 cups" },
      { id: "waterleaf", name: "Waterleaf", quantity: "2 cups" },
      { id: "meat", name: "Assorted meat", quantity: "500g" },
      { id: "palm-oil", name: "Palm oil", quantity: "½ cup" },
      { id: "crayfish", name: "Ground crayfish", quantity: "3 tbsp" },
      { id: "stockfish", name: "Stockfish", quantity: "2 pieces" },
      { id: "smoked-fish", name: "Smoked fish", quantity: "1 medium" },
      { id: "pepper", name: "Fresh pepper", quantity: "3" },
      { id: "onion", name: "Onion", quantity: "1" },
      { id: "seasoning", name: "Seasoning cubes", quantity: "2" },
      { id: "salt", name: "Salt", quantity: "To taste" },
    ],
    Preparation: [
      {
        id: "1",
        name: "Wash and slice the ugu and waterleaf, keeping them separate.",
      },
      {
        id: "2",
        name: "Season the assorted meat and stockfish, then cook until tender.",
      },
      { id: "3", name: "Clean the smoked fish and remove any bones." },
      {
        id: "4",
        name: "Heat palm oil in a pot and add chopped onions and pepper.",
      },
      {
        id: "5",
        name: "Add the cooked meat, stockfish, smoked fish and crayfish.",
      },
      {
        id: "6",
        name: "Add the waterleaf and allow it to soften and release some moisture.",
      },
      { id: "7", name: "Add the ugu leaves, seasoning cubes and salt." },
      {
        id: "8",
        name: "Stir and cook for a few minutes until the vegetables are tender but still vibrant.",
      },
      { id: "9", name: "Taste and adjust the seasoning before serving." },
    ],
  },
  {
    name: "Banga Soup",
    image: recipeImage.bangasoup,
    id: "banga-soup",
    time: "60 mins",
    category: "Dinner",
    ingredients: [
      { id: "banga", name: "Palm nut extract", quantity: "1 litre" },
      { id: "meat", name: "Assorted meat", quantity: "500g" },
      { id: "fish", name: "Fresh or smoked fish", quantity: "1 medium" },
      { id: "crayfish", name: "Ground crayfish", quantity: "3 tbsp" },
      { id: "pepper", name: "Fresh pepper", quantity: "4" },
      { id: "banga-spice", name: "Banga spice", quantity: "2 tbsp" },
      { id: "beletete", name: "Beletete leaves", quantity: "1 small bunch" },
      { id: "onion", name: "Onion", quantity: "1" },
      { id: "seasoning", name: "Seasoning cubes", quantity: "2" },
      { id: "salt", name: "Salt", quantity: "To taste" },
    ],
    Preparation: [
      {
        id: "1",
        name: "Wash and season the assorted meat, then cook until tender.",
      },
      { id: "2", name: "Clean the fish and set aside." },
      {
        id: "3",
        name: "Pour the palm nut extract into a pot and bring to a boil.",
      },
      {
        id: "4",
        name: "Allow it to cook until it thickens and the oil begins to rise to the surface.",
      },
      {
        id: "5",
        name: "Add the cooked meat, fish, pepper and ground crayfish.",
      },
      { id: "6", name: "Add the banga spice and seasoning cubes." },
      {
        id: "7",
        name: "Simmer until the fish and meat absorb the flavour of the soup.",
      },
      { id: "8", name: "Add the beletete leaves and salt to taste." },
      {
        id: "9",
        name: "Cook for a few more minutes and serve with starch, fufu or your preferred swallow.",
      },
    ],
  },

  // RICE DISHES
  {
    name: "Banga Rice",
    image: recipeImage.bangarice,
    id: "banga-rice",
    time: "45 mins",
    category: "Lunch",
    ingredients: [
      { id: "rice", name: "Rice", quantity: "3 cups" },
      { id: "banga", name: "Palm nut extract", quantity: "2 cups" },
      { id: "fish", name: "Smoked fish", quantity: "1 medium" },
      { id: "crayfish", name: "Ground crayfish", quantity: "3 tbsp" },
      { id: "pepper", name: "Fresh pepper", quantity: "3" },
      { id: "onion", name: "Onion", quantity: "1" },
      { id: "banga-spice", name: "Banga spice", quantity: "1 tbsp" },
      { id: "seasoning", name: "Seasoning cubes", quantity: "2" },
      { id: "salt", name: "Salt", quantity: "To taste" },
      { id: "water", name: "Water or stock", quantity: "As needed" },
    ],
    Preparation: [
      { id: "1", name: "Wash the rice thoroughly and set aside." },
      { id: "2", name: "Clean the smoked fish and remove any bones." },
      {
        id: "3",
        name: "Pour the palm nut extract into a pot and bring to a boil.",
      },
      {
        id: "4",
        name: "Add chopped onions, pepper, crayfish and banga spice.",
      },
      { id: "5", name: "Add the smoked fish, seasoning cubes and salt." },
      {
        id: "6",
        name: "Pour in the washed rice and add enough water or stock to cook it.",
      },
      {
        id: "7",
        name: "Cover and cook on low heat until the rice is tender and has absorbed the sauce.",
      },
      { id: "8", name: "Fluff gently and serve hot." },
    ],
  },
  {
    name: "Goat Meat Pepper Soup",
    image: recipeImage.goatmeatpeppersoup,
    id: "goat-meat-pepper-soup",
    time: "50 mins",
    category: "Dinner",
    ingredients: [
      { id: "goat-meat", name: "Goat meat", quantity: "700g" },
      { id: "pepper", name: "Fresh pepper", quantity: "4" },
      { id: "onion", name: "Onion", quantity: "1" },
      {
        id: "pepper-soup-spice",
        name: "Pepper soup spice",
        quantity: "2 tbsp",
      },
      { id: "uziza", name: "Uziza leaves", quantity: "1 small bunch" },
      { id: "ginger", name: "Fresh ginger", quantity: "1 small piece" },
      { id: "garlic", name: "Garlic", quantity: "2 cloves" },
      { id: "seasoning", name: "Seasoning cubes", quantity: "2" },
      { id: "salt", name: "Salt", quantity: "To taste" },
      { id: "water", name: "Water", quantity: "As needed" },
    ],
    Preparation: [
      { id: "1", name: "Wash the goat meat and place it in a pot." },
      {
        id: "2",
        name: "Add chopped onions, ginger, garlic, seasoning cubes and salt.",
      },
      {
        id: "3",
        name: "Add a little water and cook until the meat is partially tender.",
      },
      {
        id: "4",
        name: "Add enough water to form the soup and bring to a boil.",
      },
      { id: "5", name: "Add the pepper soup spice and blended fresh pepper." },
      {
        id: "6",
        name: "Continue cooking until the goat meat becomes tender and the broth is flavourful.",
      },
      { id: "7", name: "Add chopped uziza leaves and simmer briefly." },
      { id: "8", name: "Taste, adjust the seasoning and serve hot." },
    ],
  },
  {
    name: "Chicken Pepper Soup",
    image: recipeImage.chickenpeppersoup,
    id: "chicken-pepper-soup",
    time: "40 mins",
    category: "Dinner",
    ingredients: [
      { id: "chicken", name: "Chicken", quantity: "700g" },
      { id: "pepper", name: "Fresh pepper", quantity: "3" },
      { id: "onion", name: "Onion", quantity: "1" },
      {
        id: "pepper-soup-spice",
        name: "Pepper soup spice",
        quantity: "2 tbsp",
      },
      { id: "ginger", name: "Fresh ginger", quantity: "1 small piece" },
      { id: "garlic", name: "Garlic", quantity: "2 cloves" },
      { id: "scent-leaf", name: "Scent leaves", quantity: "1 small bunch" },
      { id: "seasoning", name: "Seasoning cubes", quantity: "2" },
      { id: "salt", name: "Salt", quantity: "To taste" },
      { id: "water", name: "Water", quantity: "As needed" },
    ],
    Preparation: [
      { id: "1", name: "Wash the chicken pieces and place them in a pot." },
      {
        id: "2",
        name: "Add chopped onions, ginger, garlic, seasoning cubes and salt.",
      },
      {
        id: "3",
        name: "Add a little water and cook until the chicken is partially tender.",
      },
      {
        id: "4",
        name: "Pour in more water to make the soup and bring to a boil.",
      },
      { id: "5", name: "Add pepper soup spice and blended fresh pepper." },
      {
        id: "6",
        name: "Simmer until the chicken is completely cooked and the broth is flavourful.",
      },
      {
        id: "7",
        name: "Add chopped scent leaves and cook for another few minutes.",
      },
      { id: "8", name: "Adjust the seasoning and serve hot." },
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
  {
    name: "salt",
    id: "17",
    image: panttryItems.salt,
    quantity: 1,
    category: "others",
    unit: "kg",
  },
];

export const exactRecipe: ReciepeDetails[] = [];
export const partialRecipe: ReciepeDetails[] = [];
export const optionalItems: pantryitem[] = [
  {
    name: "milk",
    id: "18",
    image: {},
    quantity: 2,
    category: "",
    unit: "bottles",
  },
  {
    name: "sugar",
    id: "19",
    image: {},
    quantity: 1,
    category: "",
    unit: "kg",
  },

  {
    name: "butter",
    id: "20",
    image: {},
    quantity: 1,
    category: "",
    unit: "g",
  },
];
export const toBuyList: pantryitem[] = [
  {
    name: "bread",
    id: "21",
    image: {},
    quantity: 4,
    category: "",
    unit: "bags",
  },
  {
    name: "carrot",
    id: "22",
    image: {},
    quantity: 1,
    category: "",
    unit: "kg",
  },

  {
    name: "curry",
    id: "23",
    image: {},
    quantity: 1,
    category: "",
    unit: "g",
  },
];
