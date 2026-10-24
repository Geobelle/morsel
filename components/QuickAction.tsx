import { Image, Text, View } from "react-native";
import { icons } from "../constants/icons";

const QuickAction = () => {
  return (
    <View className="flex gap-4 flex-row w-full justify-center mt-10">
      <View className=" px-4 py-6 bg-sage-light w-[31.5%] rounded-lg items-center gap-4">
        <Image
          source={icons.list}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">
          {" "}
          Shopping List
        </Text>
      </View>

      <View className=" px-4 py-6 gap-4 items-center bg-sage-light w-[31.5%] rounded-lg">
        <Image
          source={icons.plan}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark"> Plan Meals</Text>
      </View>

      <View className=" px-4 py-6 gap-4 items-center bg-sage-light w-[31.5%] rounded-lg">
        <Image
          source={icons.ingredients}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark text-center">
          {" "}
          Add Ingredients
        </Text>
      </View>
    </View>
  );
};

export default QuickAction;
