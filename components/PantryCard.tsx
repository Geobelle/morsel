import { Image, Text, View, useWindowDimensions } from "react-native";

const PantryCard = ({ name, quantity, image, id }: pantryitem) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 40 - 20) / 3;

  return (
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
      <View className="p-3 gap-2">
        <Text
          className="font-ingredient capitalize text-primary-dark text-lg flex-1"
          numberOfLines={1}
        >
          {name}
        </Text>

        <Text className="text-sm text-foreground font-body">{quantity}</Text>
      </View>
    </View>
  );
};

export default PantryCard;
