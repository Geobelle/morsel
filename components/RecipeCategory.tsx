import { FlatList, Pressable, Text, View } from "react-native";

const category = [
  { name: "All", id: "all" },
  { name: "Breakfast", id: "breakfast" },
  { name: "Lunch", id: "lunch" },
  { name: "Dinner", id: "dinner" },
  { name: "Snacks", id: "snacks" },
  { name: "Salads", id: "salads" },
  { name: "Drinks", id: "drinks" },
];

interface RecipeCategoryProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const RecipeCategory = ({
  selectedCategory,
  onSelectCategory,
}: RecipeCategoryProps) => {
  return (
    <View className="mt-6">
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
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeCategory;
