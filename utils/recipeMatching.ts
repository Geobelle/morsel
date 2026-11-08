const normalizeIngredient = (name: string) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/^(fresh|dried|ground|chopped|minced|crushed|whole)\s+/, "")
    .replace(/\s+/g, " ")
    .replace(/ies$/, "y")
    .replace(/oes$/, "o")
    .replace(/s$/, "");
};

type RecipeMatch = ReciepeDetails & {
  availableIngredients: number;
  totalIngredients: number;
};

export const getRecipeMatches = (
  recipes: ReciepeDetails[],
  pantry: pantryitem[],
) => {
  const pantryNames = new Set(
    pantry.map((item) => normalizeIngredient(item.name)),
  );

  const exactRecipe: RecipeMatch[] = [];
  const partialRecipe: RecipeMatch[] = [];

  recipes.forEach((recipe) => {
    const availableIngredients = recipe.ingredients.filter((ingredient) =>
      pantryNames.has(normalizeIngredient(ingredient.name)),
    ).length;

    const totalIngredients = recipe.ingredients.length;

    if (totalIngredients === 0) return;

    const recipeWithMatches: RecipeMatch = {
      ...recipe,
      availableIngredients,
      totalIngredients,
    };

    if (availableIngredients === totalIngredients) {
      exactRecipe.push(recipeWithMatches);
    } else if (availableIngredients > 0) {
      partialRecipe.push(recipeWithMatches);
    }
  });

  return { exactRecipe, partialRecipe };
};
