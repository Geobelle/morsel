import { Image, Text, View } from "react-native";
import image from "../constants/image";

const QuickCategories = () => {
  return (
    <View className="mt-3 w-full flex-row flex-wrap justify-between gap-y-3">
      <View className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4">
        <Image
          source={image.breakfast}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Breakfast</Text>
      </View>

      <View className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4">
        <Image
          source={image.lunch}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Lunch</Text>
      </View>

      <View className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4">
        <Image
          source={image.dinner}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Dinner</Text>
      </View>

      <View className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4">
        <Image
          source={image.salad}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Snacks</Text>
      </View>

      <View className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4">
        <Image
          source={image.snack}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Desserts</Text>
      </View>

      <View className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4">
        <Image
          source={image.drinks}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Drinks</Text>
      </View>
    </View>
  );
};

export default QuickCategories;
