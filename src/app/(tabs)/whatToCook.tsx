import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExactMatches from "../../../components/ExactMatches";
import PartialMatches from "../../../components/PartialMatches";
import WhatToCookCategories from "../../../components/WhatToCookCategories";
import { pantryItems, reciepeDetails } from "../../../constants/data";
import { icons } from "../../../constants/icons";
import { tabicons } from "../../../constants/tabIcons";
import { getRecipeMatches } from "../../../utils/recipeMatching";

const WhatToCook = () => {
  const { exactRecipe, partialRecipe } = getRecipeMatches(
    reciepeDetails,
    pantryItems,
  );
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
              You have {pantryItems.length} ingredients
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
