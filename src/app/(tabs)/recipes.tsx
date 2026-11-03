import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ReciepeInfoCard from "../../../components/ReciepeInfoCard";
import RecipeCategory from "../../../components/RecipeCategory";
import SearchBar from "../../../components/SearchBar";
import { reciepeDetails } from "../../../constants/data";

const Recipe = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-primary-dark font-heading text-3xl">
        My Recipes
      </Text>
      <RecipeCategory />
      <View className="flex flex-row justify-between items-center">
        <View className="w-[82%]">
          <SearchBar />
        </View>

        <Pressable className="rounded-full bg-primary-dark w-14 h-14 flex items-center mt-3 justify-center">
          <Text className="text-5xl font-recipe-title  text-background">+</Text>
        </Pressable>
      </View>
      <View className="mt-4">
        <FlatList
          data={reciepeDetails}
          renderItem={({ item }) => <ReciepeInfoCard {...item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator
          ListEmptyComponent={
            <Text className="home-empty-state">No recipes yet</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Recipe;
