import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { pantryItems, reciepeDetails } from "../../constants/data";
import { icons } from "../../constants/icons";
import { getRecipeMatches } from "../../utils/recipeMatching";

const SeeAllMatches = () => {
  const router = useRouter();
  const { type } = useLocalSearchParams<{ type: string }>();

  const { exactRecipe, partialRecipe } = getRecipeMatches(
    reciepeDetails,
    pantryItems,
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
              source={item.image}
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
                {item.time}
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
