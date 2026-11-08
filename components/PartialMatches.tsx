import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

type PartialMatchesProps = ReciepeCard & {
  availableIngredients: number;
  totalIngredients: number;
};

const PartialMatches = ({
  name,
  time,
  image,
  availableIngredients,
  totalIngredients,
  id,
}: PartialMatchesProps) => {
  return (
    <Pressable
      //   style={{ width: }}
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

      <View className="p-2 w-2/3">
        <View className="flex items-end justify-end w-full">
          <Text className="text-2xl">...</Text>
        </View>

        <Text
          className="font-recipe-title text-primary-dark text-lg"
          numberOfLines={1}
        >
          {name}
        </Text>

        <Text className="text-sm text-foreground font-body">{time}</Text>

        <Text className="text-sm text-foreground font-body">
          {availableIngredients} of {totalIngredients} ingredients available
        </Text>
      </View>
    </Pressable>
  );
};

export default PartialMatches;
