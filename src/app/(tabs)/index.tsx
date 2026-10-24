import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuickAction from "../../../components/QuickAction";
import QuickCategories from "../../../components/QuickCategories";
import image from "../../../constants/image";

const Tabindex = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <View className="flex flex-row justify-between">
          <Text className="text-primary-dark font-heading text-2xl">
            Good Morning Gina 👋
          </Text>
          <Image
            source={image.profileImage}
            style={{ width: 36, height: 36 }}
            resizeMode="contain"
          />
        </View>

        <Text className="text-primary-dark font-recipe-title text-xl">
          what would you like to cook today?
        </Text>
      </View>

      <View>
        <QuickAction />
      </View>

      <View className="mt-6">
        <Text className="text-primary-dark font-heading text-xl">
          Quick Categories{" "}
        </Text>
        <QuickCategories />
      </View>

      <View className="mt-6">
        <Text className="text-primary-dark font-heading text-xl">
          Your Recipes
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Tabindex;
