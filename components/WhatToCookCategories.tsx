import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

const category = [
  { name: "All", id: "all" },
  { name: "Exact matches", id: "exact" },
  { name: "Partial matches", id: "partial" },
];

const WhatToCookCategories = () => {
  const [specificCategory, setSpecificCategory] = useState("all");
  return (
    <View className="mt-6">
      <FlatList
        data={category}
        renderItem={({ item }) => {
          const isSelected = specificCategory === item.id;

          return (
            <Pressable
              onPress={() => setSpecificCategory(item.id)}
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

export default WhatToCookCategories;
