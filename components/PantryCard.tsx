import { router } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

type pantryitem = {
  _id: string;
  name: string;
  image: string;
  category: string;
  quantity: number;
  unit: string;
};

const PantryCard = ({ name, quantity, image, _id, unit }: pantryitem) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 40 - 20) / 3;

  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "/(pantryItems)/pantryDetails/[id]",
          params: { id: _id },
        });
      }}
    >
      <View
        key={_id}
        style={{ width: cardWidth }}

        className=" bg-white rounded-3xl border border-sage-light overflow-hidden"
      >
        {/* pantry image */}
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: 100 }}
            resizeMode="cover"
            className="shadow-lg"
          />
        ) : (
          <View
            style={{ width: "100%", height: 100 }}
            className="bg-sage-light items-center justify-center"
          >
            <Text className="text-primary-dark">No image</Text>
          </View>
        )}

        {/* pantry details */}
        <View className="p-3">
          <Text
            className="font-ingredient capitalize text-primary-dark text-lg flex-1"
            numberOfLines={1}
          >
            {name}
          </Text>

          <Text className="text-sm text-foreground font-body">
            {quantity} {unit}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PantryCard;
