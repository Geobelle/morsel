import { FlatList, Pressable, Text, View } from "react-native";

const category = [
  { name: "All", id: "all" },
  { name: "Fresh", id: "fresh" },
  { name: "Dry", id: "dry" },
  { name: "Frozen", id: "frozen" },
  { name: "Others", id: "others" },
];
interface PantryCategoryProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const PantryCategory = ({
  selectedCategory,
  onSelectCategory,
}: PantryCategoryProps) => {
  return (
    <View className="my-6">
      <FlatList
        data={category}
        renderItem={({ item }) => {
          const isSelected = selectedCategory === item.id;

          return (
            <Pressable
              onPress={() => onSelectCategory(item.id)}
              className={`mx-2 px-4 py-2 rounded-2xl ${
                isSelected ? "bg-primary-dark" : "bg-sage-light"
              }`}
            >
              <Text
                className={`font-ingredient ${
                  isSelected ? "text-background" : "text-primary-dark"
                }`}
              >
                {item.name}
              </Text>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default PantryCategory;
