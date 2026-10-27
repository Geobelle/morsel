import { FlatList, Keyboard, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PantryCard from "../../../components/PantryCard";
import PantryCategory from "../../../components/PantryCategories";
import SearchIngredients from "../../../components/SearchIngredients";
import { pantryItems } from "../../../constants/data";

const Pantry = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View className="flex-1">
        <Pressable onPress={Keyboard.dismiss}>
          <Text className="text-primary-dark font-heading text-3xl">
            My Pantry
          </Text>

          <View className="flex flex-row justify-between items-center">
            <View className="w-[82%]">
              <SearchIngredients />
            </View>

            <Pressable className="rounded-full bg-primary-dark w-14 h-14 flex items-center mt-3 justify-center">
              <Text className="text-5xl font-recipe-title  text-background">
                +
              </Text>
            </Pressable>
          </View>

          <PantryCategory />
        </Pressable>
        <FlatList
          data={pantryItems}
          renderItem={({ item }) => <PantryCard {...item} />}
          keyExtractor={(item) => String(item.id)}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 10,
            marginBottom: 10,
          }}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text className="home-empty-state">No pantry items yet</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Pantry;
