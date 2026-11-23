import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExactMatches from "../../../components/ExactMatches";
import PartialMatches from "../../../components/PartialMatches";
import WhatToCookCategories from "../../../components/WhatToCookCategories";
import { icons } from "../../../constants/icons";
import { tabicons } from "../../../constants/tabIcons";
import { getRecipeMatches } from "../../../utils/recipeMatching";
import { useApi } from "../../lib/api";

const WhatToCook = () => {
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

  const [recipes, setRecipes] = useState<ReciepeDetails[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await request("/api/recipes/getAllRecipes", {
          method: "GET",
        });
        if (Array.isArray(data.data)) {
          setRecipes(
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

  const { exactRecipe, partialRecipe } = getRecipeMatches(recipes, PantryItems);
  const [specificCategory, setSpecificCategory] = useState("all");

  const filteredExactRecipes =
    specificCategory === "all" || specificCategory === "exact"
      ? exactRecipe
      : [];

  const filteredPartialRecipes =
    specificCategory === "all" || specificCategory === "partial"
      ? partialRecipe
      : [];

  const showExact = specificCategory === "all" || specificCategory === "exact";
  const showPartial =
    specificCategory === "all" || specificCategory === "partial";
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <Text className="text-primary-dark font-heading text-3xl">
          What to Cook
        </Text>

        <View className="flex justify-center bg-sage-light p-5 rounded-2xl mt-6 flex-row gap-3">
          <Image
            source={tabicons.pantryUnfilled}
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode="contain"
          />
          <View>
            <Text className="font-ingredient text-lg text-primary-dark mb-4">
              Based on your pantry
            </Text>

            <Text className="font-ingredients text-lg text-primary-dark mb-1">
              You have {PantryItems.length} ingredients
            </Text>
            <Text className="text-sm font-body text-primary-dark">
              checkout your recipes that you can make with what you have.
            </Text>
          </View>
        </View>

        <WhatToCookCategories
          selectedCategory={specificCategory}
          onSelectCategory={setSpecificCategory}
        />
        {showExact && (
          <View>
            <View className="mt-4 mb-2 flex flex-row justify-between">
              <Text className="text-primary-dark font-heading text-xl">
                Exact Matches({filteredExactRecipes.length})
              </Text>
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/seeAllMatches",
                    params: { type: "exact" },
                  })
                }
                className="flex flex-row gap-1 items-center"
              >
                <Text className="text-primary-dark font-ingredient text-lg">
                  See all
                </Text>
                <Image
                  source={icons.forward}
                  style={{
                    width: 16,
                    height: 16,
                  }}
                  resizeMode="contain"
                />
              </Pressable>
            </View>

            <FlatList
              data={filteredExactRecipes.slice(0, 2)}
              renderItem={({ item }) => <ExactMatches {...item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <Text className="home-empty-state">No exact matches yet</Text>
              }
            />
          </View>
        )}

        {showPartial && (
          <View>
            <View className="mt-4 mb-2 flex flex-row justify-between">
              <Text className="text-primary-dark font-heading text-xl">
                Partial Matches({filteredPartialRecipes.length})
              </Text>
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/seeAllMatches",
                    params: { type: "partial" },
                  })
                }
                className="flex flex-row gap-1 items-center"
              >
                <Text className="text-primary-dark font-ingredient text-lg">
                  See all
                </Text>
                <Image
                  source={icons.forward}
                  style={{
                    width: 16,
                    height: 16,
                  }}
                  resizeMode="contain"
                />
              </Pressable>
            </View>

            <FlatList
              data={filteredPartialRecipes.slice(0, 2)}
              renderItem={({ item }) => <PartialMatches {...item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <Text className="home-empty-state">No partial matches yet</Text>
              }
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WhatToCook;
