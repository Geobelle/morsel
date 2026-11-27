import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const SelectRecipeCard = ({ id, name, prepTime, image }: ReciepeDetails) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 100) / 2;

  const { date, type } = useLocalSearchParams<{
    date: string;
    type?: string;
  }>();

  const handleSelectRecipe = () => {
    router.push({
      pathname:
        type === "custom"
          ? "/planMeals/(addCustomMeal)/[id]"
          : "/planMeals/(addMeal)/[id]",
      params: {
        id: id,
        date: date,
      },
    });
  };

  return (
    <Pressable onPress={handleSelectRecipe}>
      <View
        style={{ width: cardWidth }}
        className="bg-white rounded-3xl border border-sage-light overflow-hidden"
      >
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 100 }}
          resizeMode="cover"
          className="shadow-lg"
        />

        <View className="p-3">
          <Text
            className="font-recipe-title capitalize text-primary-dark text-lg flex-1"
            numberOfLines={1}
          >
            {name}
          </Text>

          <Text className="text-sm text-foreground font-body">{prepTime}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SelectRecipeCard;
