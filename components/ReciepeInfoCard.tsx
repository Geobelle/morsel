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
      className="bg-white w-full flex flex-row rounded-xl border border-sage-light overflow-hidden mb-4"
    >
      <Image
        source={image}
        style={{ width: "30%", height: 100 }}
        resizeMode="cover"
      />

      <View className="pl-3 pr-2 flex-1 py-2">
        <View className="gap-1">
          <Text
            className="font-recipe-title text-primary-dark text-lg"
            numberOfLines={1}
          >
            {name}
          </Text>

          <Text className="text-sm text-foreground font-body">{time}</Text>

          <Text className="self-start font-body text-xs text-primary-dark bg-sage-light rounded-md px-2 py-1">
            {category}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ReciepeInfoCard;
