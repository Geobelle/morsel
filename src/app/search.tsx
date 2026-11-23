import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PantryCard from "../../components/PantryCard";
import ReciepeInfoCard from "../../components/ReciepeInfoCard";
import SearchBar from "../../components/SearchBar";

import { icons } from "../../constants/icons";
import { useApi } from "../lib/api";

const Search = () => {
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

  const [searchText, setSearchText] = useState("");

  const filteredPantryItems = PantryItems.filter((item) => {
    return (
      searchText.trim().length > 0 &&
      item.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
  });

  const filteredRecipe = recipes.filter((item) => {
    return (
      searchText.trim().length > 0 &&
      item.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
  });
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className=" mb-40">
          <Pressable
            onPress={() => router.back()}
            className="flex-row items-center "
          >
            <Image
              source={icons.arrow}
              style={{ width: 22, height: 22 }}
              resizeMode="contain"
            />
          </Pressable>
          <View className="mb-5">
            <SearchBar value={searchText} onChangeText={setSearchText} />
          </View>

          <View className=" mb-10">
            <FlatList
              ListHeaderComponent={() => (
                <>
                  <FlatList
                    data={filteredPantryItems}
                    renderItem={({ item }) => <PantryCard {...item} />}
                    keyExtractor={(item) => String(item._id)}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    columnWrapperStyle={{
                      justifyContent: "flex-start",
                      gap: 10,
                      marginBottom: 10,
                    }}
                    contentContainerStyle={{
                      paddingBottom: 30,
                    }}
                  />
                </>
              )}

              data={filteredRecipe}
              renderItem={({ item }) => <ReciepeInfoCard {...item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                searchText.trim().length > 0 ? (
                  <Text className="text-center font-body text-foreground">
                    No items found.
                  </Text>
                ) : undefined
              }
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Search;
