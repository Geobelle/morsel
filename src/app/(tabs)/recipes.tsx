import { FlatList, Text, View } from "react-native";
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
      <SearchBar />
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
