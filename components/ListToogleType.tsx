import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type ListType = "toBuy" | "optional";

type Props = {
  value: ListType;
  onChange: (value: ListType) => void;
};

const ListTypeToggle = ({ value, onChange }: Props) => {
  return (
    <View className="flex-row bg-sage-light rounded-full p-1">
      {/* To Buy */}
      <Pressable
        onPress={() => onChange("toBuy")}
        className={`flex-1 flex-row items-center justify-center py-4 rounded-full ${
          value === "toBuy" ? "bg-primary-dark" : ""
        }`}
      >
        <Ionicons
          name="cart-outline"
          size={25}
          color={value === "toBuy" ? "#FBFCFB" : "#53765B"}
        />

        <Text
          className={`ml-3 text-lg font-button ${
            value === "toBuy" ? "text-background" : "text-primary-dark"
          }`}
        >
          To Buy
        </Text>
      </Pressable>

      {/* Optional */}
      <Pressable
        onPress={() => onChange("optional")}
        className={`flex-1 flex-row items-center justify-center py-4 rounded-full ${
          value === "optional" ? "bg-primary-dark" : ""
        }`}
      >
        <Ionicons
          name="star-outline"
          size={25}
          color={value === "optional" ? "#FBFCFB" : "#53765B"}
        />

        <Text
          className={`ml-3 text-lg font-button ${
            value === "optional" ? "text-background" : "text-primary-dark"
          }`}
        >
          Optional
        </Text>
      </Pressable>
    </View>
  );
};

export default ListTypeToggle;
