import { router } from "expo-router";
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

import QuickAction from "../../../components/QuickAction";
import QuickCategories from "../../../components/QuickCategories";
import ReciepeCard from "../../../components/ReciepeCard";
import SearchBar from "../../../components/SearchBar";

import { useState } from "react";
import { reciepeDetails } from "../../../constants/data";
import image from "../../../constants/image";

const Tabindex = () => {
  const [searchText, setSearchText] = useState("");

  // const filteredRecipes = reciepeDetails.filter((item) => {
  //   const matchesSearch = item.name
  //     .toLowerCase()
  //     .includes(searchText.toLowerCase());

  //   return matchesSearch;
  // });

  const randomRecipes = [...reciepeDetails]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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

              <View>
                <SearchBar value={searchText} onChangeText={setSearchText} />
              </View>

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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Tabindex;
