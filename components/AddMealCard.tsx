import { Image, Text, View } from "react-native";

const AddMealCard = ({ id, name, time, image, category }: ReciepeCard) => {
  return (
    <View className="bg-cream w-full flex flex-row rounded-xl border border-sage-light overflow-hidden mb-4">
      <Image
        source={image}
        style={{ width: "40%", height: 120 }}
        resizeMode="cover"
      />

      <View className="pl-3 pr-2 flex-1 py-2">
        <View className="gap-1">
          <Text className="font-recipe-title text-foreground text-2xl">
            {name}
          </Text>

          <Text className="text-sm text-foreground font-body">{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default AddMealCard;
