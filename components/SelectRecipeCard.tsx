import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const SelectRecipeCard = ({ id, name, time, image }: ReciepeCard) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 100) / 2;
  const { date } = useLocalSearchParams<{ date: string }>();
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "/planMeals/(addMeal)/[id]",
          params: {
            id: id,
            date: date,
          },
        });
      }}
    >
      <View
        key={id}
        style={{ width: cardWidth }}

        className=" bg-white rounded-3xl border border-sage-light overflow-hidden"
      >
        {/* pantry image */}
        <Image
          source={image}
          style={{ width: "100%", height: 100 }}
          resizeMode="cover"
          className="shadow-lg"
        />

        {/* pantry details */}
        <View className="p-3">
          <Text
            className="font-recipe-title capitalize text-primary-dark text-lg flex-1"
            numberOfLines={1}
          >
            {name}
          </Text>

          <Text className="text-sm text-foreground font-body"> {time}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SelectRecipeCard;
