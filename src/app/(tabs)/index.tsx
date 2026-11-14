import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import QuickAction from "../../../components/QuickAction";
import QuickCategories from "../../../components/QuickCategories";
import ReciepeCard from "../../../components/ReciepeCard";

import { reciepeDetails } from "../../../constants/data";
import { icons } from "../../../constants/icons";
import image from "../../../constants/image";

const Tabindex = () => {
  // const filteredRecipes = reciepeDetails.filter((item) => {
  //   const matchesSearch = item.name
  //     .toLowerCase()
  //     .includes(searchText.toLowerCase());

  //   return matchesSearch;
  // });

  const [randomRecipes] = useState(() =>
    [...reciepeDetails].sort(() => Math.random() - 0.5).slice(0, 2),
  );
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <FlatList
        data={randomRecipes}
        renderItem={({ item }) => <ReciepeCard {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}

        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View className="flex-row justify-between items-center">
              <Text className="text-primary-dark font-heading text-2xl">
                Good Morning Gina 👋
              </Text>

              <Pressable
                onPress={() => {
                  router.push("/(tabs)/profile");
                }}
              >
                <Image
                  source={image.profileImage}
                  style={{ width: 36, height: 36 }}
                  resizeMode="contain"
                />
              </Pressable>
            </View>

            <Text className="text-primary-dark font-recipe-title text-xl mt-2">
              What would you like to cook today?
            </Text>

            <Pressable onPress={() => router.push("/search")}>
              <View className="flex-row items-center h-12 px-4 border border-primary rounded-2xl bg-background mt-4 gap-3">
                <Image
                  source={icons.search}
                  className="w-5 h-5"
                  resizeMode="contain"
                />

                <Text className="text-sm font-body text-[#B7B7B7]">
                  Search recipes, ingredients...
                </Text>
              </View>
            </Pressable>

            <View>
              <QuickAction />
            </View>

            <View className="mt-6">
              <Text className="text-primary-dark font-heading text-xl">
                Quick Categories
              </Text>

              <QuickCategories />
            </View>

            <View className="mt-6 mb-4">
              <Text className="text-primary-dark font-heading text-xl">
                Your Recipes
              </Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text className="home-empty-state">No recipes yet</Text>
        }
      />
    </SafeAreaView>
  );
};

export default Tabindex;
