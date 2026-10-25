import { Image, Text, useWindowDimensions, View } from "react-native";

const ReciepeCard = ({ name, time, image }: ReciepeCard) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 40 - 12) / 2;

  return (
    <View
      style={{ width: cardWidth }}
      className="bg-white rounded-3xl border border-sage-light overflow-hidden"
    >
      {/* Recipe image */}
      <Image
        source={image}
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

        <Text className="text-sm text-primary font-body">{time}</Text>
      </View>
    </View>
  );
};

export default ReciepeCard;
