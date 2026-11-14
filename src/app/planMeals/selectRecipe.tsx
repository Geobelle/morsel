import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeCategory from "../../../components/RecipeCategory";
import SearchBar from "../../../components/SearchBar";
import SelectRecipeCard from "../../../components/SelectRecipeCard";
import { reciepeDetails } from "../../../constants/data";
import { icons } from "../../../constants/icons";

const SelectRecipe = () => {
  const { category } = useLocalSearchParams<{ category?: string }>();
  const [searchText, setSearchText] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(
    category?.toLowerCase() || "all",
  );

  const filteredRecipes = reciepeDetails.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      item.category.toLowerCase() === selectedCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <View className="flex mb-2 flex-row relative items-center">
          <Pressable
            onPress={() => {
              router.push("/planMeals");
            }}
            className="bg-sage-light rounded-full p-3 z-50"
          >
            <Image
              source={icons.arrow}
              style={{
                width: 24,
                height: 24,
              }}
              resizeMode="contain"
            />
          </Pressable>

          <Text className="text-primary-dark font-heading text-3xl absolute left-0 right-0 text-center">
            Select Recipe
          </Text>
        </View>
        <RecipeCategory
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <View className="">
          <SearchBar value={searchText} onChangeText={setSearchText} />
        </View>

        <View className="mt-4 mb-60">
          <FlatList
            data={filteredRecipes}
            renderItem={({ item }) => <SelectRecipeCard {...item} />}
            keyExtractor={(item) => String(item.id)}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "center",
              gap: 20,
              marginBottom: 10,
            }}
            contentContainerStyle={{
              paddingBottom: 40,
            }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text className="home-empty-state">No recipes yet</Text>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectRecipe;
