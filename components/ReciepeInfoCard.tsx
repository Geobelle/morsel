import { router } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const ReciepeInfoCard = ({ id, name, time, image, category }: ReciepeCard) => {
  const { width } = useWindowDimensions();
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "/(recipeDetails)/recipeDetailsPage/[id]",
          params: { id },
        });
      }}
      className="bg-white w-full flex h-fit flex-row rounded-xl border border-sage-light overflow-hidden mb-4"
    >
      <Image
        source={image}
        style={{ width: "30%", height: 100 }}
        resizeMode="cover"
      />

      {/* Recipe details */}
      <View className="pl-2 w-2/3">
        <View className="flex items-end justify-end w-full">
          <Text className="text-2xl ">...</Text>
        </View>

        <View className="flex gap-1">
          <Text
            className="font-recipe-title text-primary-dark text-lg "
            numberOfLines={1}
          >
            {name}
          </Text>

          <Text className="text-sm text-foreground font-body">{time}</Text>

          <Text className="font-recipe-title text-primary-dark w-1/3 rounded-full  py-2 px-3 bg-sage-light capitalize">
            {category}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ReciepeInfoCard;
