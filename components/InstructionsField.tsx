import { Image, Pressable, Text, TextInput, View } from "react-native";
import image from "../constants/image";

interface InstructionsFieldProps {
  number: number;
  text: string;
  onChangeText: (text: string) => void;
  onDelete: () => void;
}

const InstructionsField = ({
  number,
  text,
  onChangeText,
  onDelete,
}: InstructionsFieldProps) => {
  return (
    <View className="flex flex-row items-center justify-between mt-4">
      <View className="bg-primary h-10 w-10 rounded-full items-center justify-center">
        <Text className="text-background font-button text-lg">{number}</Text>
      </View>

      <TextInput
        className="border border-primary p-4 rounded-full h-14 w-4/5"
        value={text}
        onChangeText={onChangeText}
        placeholder="e.g Rinse rice and set aside"
        placeholderTextColor="#8FB89A"
      />

      <Pressable onPress={onDelete}>
        <Image
          source={image.deleteOption}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

export default InstructionsField;
