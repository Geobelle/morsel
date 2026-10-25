import { Image, Pressable, Text, View } from "react-native";
import { icons } from "../constants/icons";

const QuickAction = () => {
  return (
    <View className="flex gap-4 flex-row w-full justify-center mt-6">
      <Pressable className=" px-4 py-6 gap-4 items-center bg-sage-light w-[31.5%] rounded-lg">
        <Image
          source={icons.list}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">
          {" "}
          Shopping List
        </Text>
      </Pressable>

      <Pressable className=" px-4 py-6 gap-4 items-center bg-sage-light w-[31.5%] rounded-lg">
        <Image
          source={icons.plan}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark"> Plan Meals</Text>
      </Pressable>

      <Pressable className=" px-4 py-6 gap-4 items-center bg-sage-light w-[31.5%] rounded-lg">
        <Image
          source={icons.ingredients}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark text-center">
          {" "}
          Add Ingredients
        </Text>
      </Pressable>
    </View>
  );
};

export default QuickAction;
