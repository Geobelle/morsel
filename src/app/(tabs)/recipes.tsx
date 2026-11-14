import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ReciepeInfoCard from "../../../components/ReciepeInfoCard";
import RecipeCategory from "../../../components/RecipeCategory";
import SearchBar from "../../../components/SearchBar";
import { reciepeDetails } from "../../../constants/data";

const Recipe = () => {
  const { category } = useLocalSearchParams<{ category?: string }>();
  const [searchText, setSearchText] = useState("");

  const [specificCategory, setSpecificCategory] = useState(
    category?.toLowerCase() || "all",
  );

  const filteredRecipes = reciepeDetails.filter((item) => {
    const matchesCategory =
      specificCategory === "all" ||
      item.category.toLowerCase() === specificCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-primary-dark font-heading text-3xl">
        My Recipes
      </Text>
      <RecipeCategory
        selectedCategory={specificCategory}
        onSelectCategory={setSpecificCategory}
      />
      <View className="flex flex-row justify-between items-center">
        <View className="w-[82%]">
          <SearchBar value={searchText} onChangeText={setSearchText} />
        </View>

        <Pressable
          onPress={() => {
            router.push("/(recipeDetails)/addRecipe");
          }}
          className="rounded-full bg-primary-dark w-14 h-14 flex items-center mt-3 justify-center"
        >
          <Text className="text-5xl font-recipe-title  text-background">+</Text>
        </Pressable>
      </View>
      <View className="mt-4 mb-60">
        <FlatList
          data={filteredRecipes}
          renderItem={({ item }) => <ReciepeInfoCard {...item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text className="home-empty-state">No recipes yet</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Recipe;
