import { Pressable, View } from "react-native";

interface ChecksProps {
  checked: boolean;
  onCheck: () => void;
}

const CustomCheckbox = ({ checked, onCheck }: ChecksProps) => {
  return (
    <Pressable
      onPress={onCheck}
      className={`w-6 h-6 rounded-md border-2 items-center justify-center ${
        checked
          ? "bg-primary-dark border-primary-dark"
          : "bg-background border-primary"
      }`}
    >
      {checked && (
        <View className="w-2 h-3 border-r-2 border-b-2 border-background rotate-45 mb-1" />
      )}
    </Pressable>
  );
};

export default CustomCheckbox;
