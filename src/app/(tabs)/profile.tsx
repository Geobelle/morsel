import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { pantryItems, reciepeDetails } from "../../../constants/data";
import image from "../../../constants/image";

const profile = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <Text className="text-primary-dark font-heading text-3xl">Profile</Text>
        <View className="flex flex-row mt-6 gap-8 items-center">
          <Image
            source={image.profileImage}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
          <View>
            <Text className="text-primary-dark font-recipe-title text-xl">
              Gina
            </Text>
            <Text className="text-foreground font-ingredient">
              gina@yahoo.com
            </Text>
          </View>
        </View>

        <View className="flex flex-row justify-between mt-8">
          <View className="gap-2 w-1/3">
            <Text className="text-center text-primary-dark font-recipe-title text-xl">
              {reciepeDetails.length}
            </Text>
            <Text className="text-center text-foreground font-body">
              Recipes Saved
            </Text>
          </View>
          <View className="border-primary border-x px-6 gap-2 w-1/3">
            <Text className="text-center text-primary-dark font-recipe-title text-xl">
              12
            </Text>
            <Text className="text-center text-foreground font-body">
              Meal Plans
            </Text>
          </View>
          <View className="gap-2 w-1/3">
            <Text className="text-center text-primary-dark font-recipe-title text-xl">
              {pantryItems.length}
            </Text>
            <Text className="text-center text-foreground font-body">
              Ingredients
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profile;
