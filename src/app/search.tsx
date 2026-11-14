import { router } from "expo-router";
import { useState } from "react";
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
import { pantryItems, reciepeDetails } from "../../constants/data";
import { icons } from "../../constants/icons";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const filteredPantryItems = pantryItems.filter((item) => {
    return (
      searchText.trim().length > 0 &&
      item.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
  });

  const filteredRecipe = reciepeDetails.filter((item) => {
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
                    keyExtractor={(item) => String(item.id)}
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
                  <Text className="home-empty-state">No items found</Text>
                ) : null
              }
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Search;
