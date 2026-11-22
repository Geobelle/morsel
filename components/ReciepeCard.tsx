import { router } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

interface ReciepeDetails {
  id: string;
  image: string;
  name: string;
  prepTime: string;
  category: string;
  ingredients: Ingredients[];
  Preparation: Preparation[];
}

const ReciepeCard = ({ id, name, prepTime, image }: ReciepeDetails) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 40) / 2;

  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "/(recipeDetails)/recipeDetailsPage/[id]",
          params: { id: id },
        });
      }}
      style={{ width: cardWidth }}
      className="bg-white rounded-3xl border border-sage-light overflow-hidden"
    >
      {/* Recipe image */}
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: 150 }}
        resizeMode="cover"
      />

      {/* Recipe details */}
      <View className="p-3 gap-2">
        <Text
          className="font-recipe-title text-primary-dark text-lg flex-1"
          numberOfLines={1}
        >
          {name}
        </Text>

        <Text className="text-sm text-primary font-body">{prepTime}</Text>
      </View>
    </Pressable>
  );
};

export default ReciepeCard;
