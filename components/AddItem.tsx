import { useApi } from "@/lib/api";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import image from "../constants/image";
import ListTypeToggle from "./ListToogleType";

const AddItem = () => {
  const { request } = useApi();

  const [name, setname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [listType, setListType] = useState<"toBuy" | "optional">("toBuy");
  return (
    <View>
      <View>
        <Text className="mb-2 text-primary-dark font-button text-xl">
          Item name *
        </Text>
        <View style={styles.container}>
          <Image source={image.leaf} style={styles.icon} resizeMode="contain" />

          <BottomSheetTextInput
            style={styles.input}
            onChangeText={setname}
            value={name}
            placeholder="e.g tomatoes"
            placeholderTextColor="#8FB89A"
          />
        </View>
      </View>

      <View className="my-4">
        <Text className="mb-2 text-primary-dark font-button text-xl">
          Quantity (optional) *
        </Text>
        <View style={styles.container}>
          <BottomSheetTextInput
            style={styles.input}
            onChangeText={setQuantity}
            value={quantity}
            placeholder="e.g 1 cup"
            placeholderTextColor="#8FB89A"
          />
        </View>
      </View>

      <ListTypeToggle value={listType} onChange={setListType} />
      <Pressable
        onPress={async () => {
          try {
            // 2. Create pantry item
            await request("/api/shoppingList/create", {
              method: "POST",
              body: JSON.stringify({
                name: name,
                quantity: quantity,
                category: listType,
              }),
            });

            // 3. Navigate after successful creation
            router.push("/shoppingList");
          } catch (error) {
            console.error("Error creating shopping list item:", error);
          }
        }}

        className="bg-primary-dark py-4  items-center rounded-full mt-4"
      >
        <Text className="text-xl font-button text-background">Add to list</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#8FB89A",
    borderRadius: 10,
    backgroundColor: "#FBFCFB",
    marginTop: 4,
    gap: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingVertical: 0,
    fontSize: 14,
    color: "#493F38",
  },
});
export default AddItem;
