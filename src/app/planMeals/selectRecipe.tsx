import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeCategory from "../../../components/RecipeCategory";
import SearchBar from "../../../components/SearchBar";
import SelectRecipeCard from "../../../components/SelectRecipeCard";
// import { reciepeDetails } from "../../../constants/data";
import { useApi } from "@/lib/api";
import { icons } from "../../../constants/icons";

const SelectRecipe = () => {
  const { request } = useApi();

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
              prepTime: item.prepTime,
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
  const { category, date, type } = useLocalSearchParams<{
    category?: string;
    date: string;
    type?: string;
  }>();
  const [searchText, setSearchText] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(
    category?.toLowerCase() || "all",
  );

  const filteredRecipes = recipes.filter((item) => {
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
