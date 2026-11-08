import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import image from "../constants/image";

const QuickCategories = () => {
  return (
    <View className="mt-3 w-full flex-row flex-wrap justify-between gap-y-3">
      <Pressable
        className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4"
        onPress={() =>
          router.push({
            pathname: "/(tabs)/recipes",
            params: { category: "breakfast" },
          })
        }
      >
        <Image
          source={image.breakfast}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Breakfast</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/(tabs)/recipes",
            params: { category: "lunch" },
          })
        }
        className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4"
      >
        <Image
          source={image.lunch}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Lunch</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/(tabs)/recipes",
            params: { category: "dinner" },
          })
        }
        className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4"
      >
        <Image
          source={image.dinner}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Dinner</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/(tabs)/recipes",
            params: { category: "salads" },
          })
        }
        className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4"
      >
        <Image
          source={image.salad}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Salads</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/(tabs)/recipes",
            params: { category: "snacks" },
          })
        }
        className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4"
      >
        <Image
          source={image.snack}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Snacks</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/(tabs)/recipes",
            params: { category: "drinks" },
          })
        }
        className="w-[31.5%] items-center gap-2 rounded-xl bg-sage-light px-2 py-4"
      >
        <Image
          source={image.drinks}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text className="font-recipe-title text-primary-dark">Drinks</Text>
      </Pressable>
    </View>
  );
};

export default QuickCategories;
