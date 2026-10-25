import {
  FlatList,
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import QuickAction from "../../../components/QuickAction";
import QuickCategories from "../../../components/QuickCategories";
import ReciepeCard from "../../../components/ReciepeCard";
import SearchBar from "../../../components/SearchBar";

import { reciepeDetails } from "../../../constants/data";
import image from "../../../constants/image";

const Tabindex = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <FlatList
          data={reciepeDetails}
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

                <Image
                  source={image.profileImage}
                  style={{ width: 36, height: 36 }}
                  resizeMode="contain"
                />
              </View>

              <Text className="text-primary-dark font-recipe-title text-xl mt-2">
                What would you like to cook today?
              </Text>

              <View>
                <SearchBar />
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
