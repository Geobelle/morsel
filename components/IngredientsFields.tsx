import { Image, Pressable, TextInput, View } from "react-native";
import image from "../constants/image";

interface IngredientsFieldProps {
  ingredientName: string;
  quantity: string;
  onChangeText: (ingredientName: string) => void;
  onChangeQantity: (quantity: string) => void;
  onDelete: () => void;
}

const IngredientsFields = ({
  ingredientName,
  quantity,
  onChangeQantity,
  onChangeText,
  onDelete,
}: IngredientsFieldProps) => {
  return (
    <View className="flex flex-row items-center gap-2 mt-4">
      <TextInput
        className="flex-1 border border-primary px-3 rounded-full h-14"
        value={ingredientName}
        onChangeText={onChangeText}
        placeholder="e.g Rice"
        placeholderTextColor="#8FB89A"
      />

      <TextInput
        className="flex-1 border border-primary px-3 rounded-full h-14"
        value={quantity}
        onChangeText={onChangeQantity}
        placeholder="e.g 2 cups"
        placeholderTextColor="#8FB89A"
      />

      <Pressable onPress={onDelete} className="w-8 items-center">
        <Image
          source={image.deleteOption}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

export default IngredientsFields;
