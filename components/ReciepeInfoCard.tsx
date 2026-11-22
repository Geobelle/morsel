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
  time: string;
  category: string;
  ingredients: Ingredients[];
  Preparation: Preparation[];
}

const ReciepeInfoCard = ({
  id,
  name,
  time,
  image,
  category,
}: ReciepeDetails) => {
  const { width } = useWindowDimensions();
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "/(recipeDetails)/recipeDetailsPage/[id]",
          params: { id: id },
        });
      }}
      className="bg-white w-full flex flex-row rounded-xl border border-sage-light overflow-hidden mb-4"
    >
      {image ? (
        <Image
          source={{ uri: image }}
          style={{ width: "30%", height: 100 }}
          resizeMode="cover"
        />
      ) : (
        <View
          style={{ width: "100%", height: 100 }}
          className="bg-sage-light items-center justify-center"
        >
          <Text className="text-primary-dark">No image</Text>
        </View>
      )}

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
