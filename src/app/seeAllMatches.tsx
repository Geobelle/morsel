import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants/icons";
import { getRecipeMatches } from "../../utils/recipeMatching";
import { useApi } from "../lib/api";

const SeeAllMatches = () => {
  const router = useRouter();
  const { type } = useLocalSearchParams<{ type: string }>();

  const { request } = useApi();

  const [PantryItems, setPantryItems] = useState<pantryitem[]>([]);

  useEffect(() => {
    const fetchPantryItems = async () => {
      try {
        const data = await request("/api/pantry/allPantryItems", {
          method: "GET",
        });

        setPantryItems(data.data);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchPantryItems();
  });

  const [recipesList, setRecipesList] = useState<ReciepeDetails[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await request("/api/recipes/getAllRecipes", {
          method: "GET",
        });
        if (Array.isArray(data.data)) {
          setRecipesList(
            data.data.map((item: any) => ({
              id: item._id,
              name: item.name,
              image: item.image,
              time: item.prepTime,
              category: item.category,
              ingredients: item.ingredients,
              Preparation: item.instructions,
            })),
          );
        } else {
          console.error("Expected an array of recipes:", data);
        }
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchRecipes();
  }, []);

  const { exactRecipe, partialRecipe } = getRecipeMatches(
    recipesList,
    PantryItems,
  );

  const isExact = type === "exact";
  const recipes = isExact ? exactRecipe : partialRecipe;

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Pressable
        onPress={() => router.back()}
        className="flex-row items-center mb-5"
      >
        <Image
          source={icons.arrow}
          style={{ width: 22, height: 22 }}
          resizeMode="contain"
        />
      </Pressable>

      <Text className="font-heading text-3xl text-primary-dark">
        {isExact ? "Exact Matches" : "Partial Matches"}
      </Text>

      <Text className="font-body text-foreground mt-2 mb-5">
        {recipes.length} recipes{" "}
        {isExact
          ? "you can make with your pantry"
          : "you can make with some missing ingredients"}
      </Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              router.push({
                pathname: "/(recipeDetails)/recipeDetailsPage/[id]",
                params: { id: item.id },
              });
            }}

            className="bg-white flex-row rounded-2xl border border-sage-light overflow-hidden mb-4"
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 110, height: 120 }}
              resizeMode="cover"
            />

            <View className="flex-1 p-3 justify-center">
              <Text
                className="font-recipe-title text-primary-dark text-xl"
                numberOfLines={1}
              >
                {item.name}
              </Text>

              <Text className="font-body text-foreground text-sm mt-1">
                {item.prepTime}
              </Text>

              {isExact ? (
                <Text className="font-ingredient text-sm text-primary-dark mt-2">
                  All ingredients available
                </Text>
              ) : (
                <Text className="font-ingredient text-sm text-primary-dark mt-2">
                  {item.availableIngredients} of {item.totalIngredients}{" "}
                  ingredients available
                </Text>
              )}
            </View>

            <View className="justify-center pr-3">
              <Text className="text-primary-dark text-xl">›</Text>
            </View>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text className="font-body text-foreground text-center mt-10">
            No recipes found yet.
          </Text>
        }
      />
    </SafeAreaView>
  );
};

export default SeeAllMatches;
