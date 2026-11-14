import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PantryCategoryDropdown from "../../../../components/PantryCategoryDropdown";
import PantryUnitDropDown from "../../../../components/PantryUnitsDropdown";
import { pantryItems } from "../../../../constants/data";
import { icons } from "../../../../constants/icons";
import image from "../../../../constants/image";

const EditPantryItem = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const pantry = pantryItems.find((item) => item.id === id);

  const [text, setText] = useState(
    () => pantry?.name.replace(/\b\w/g, (char) => char.toUpperCase()) || "",
  );

  const [unit, setUnit] = useState(pantry?.unit || "");
  const [category, setCategory] = useState(pantry?.category || "");

  const [Quantity, setQuantity] = useState<number | "">(pantry?.quantity ?? "");

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev === "" ? "" : Math.max(0, prev - 1)));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => (prev === "" ? 1 : prev + 1));
  };

  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <View className="flex mb-6 flex-row relative items-center">
              <Pressable
                onPress={() => router.back()}
                className="bg-sage-light rounded-full p-3 z-50"
              >
                <Image
                  source={icons.arrow}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                />
              </Pressable>

              <Text className="text-primary-dark font-heading text-3xl absolute left-0 right-0 text-center">
                Edit Pantry Item
              </Text>
            </View>

            <View className="my-6 w-full h-[220px] rounded-xl overflow-hidden items-center justify-center">
              <Image
                source={pantry?.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>

            <View>
              <Text className="mb-2 text-primary-dark font-button text-xl">
                Item name *
              </Text>

              <View style={styles.container}>
                <Image
                  source={image.leaf}
                  style={styles.icon}
                  resizeMode="contain"
                />

                <TextInput
                  style={styles.input}
                  onChangeText={setText}
                  value={text}
                  autoCapitalize="words"
                  placeholder="e.g tomatoes"
                  placeholderTextColor="#8FB89A"
                />
              </View>
            </View>

            <View className="mt-6">
              <Text className="mb-2 text-primary-dark font-button text-xl">
                Quantity *
              </Text>

              <View className="flex flex-row items-center justify-around">
                <View className="flex flex-row items-center justify-between border border-primary rounded-xl w-3/5">
                  <Pressable
                    onPress={decreaseQuantity}
                    className="rounded-full bg-sage-light w-10 h-10 flex items-center justify-center"
                  >
                    <Text className="text-4xl font-recipe-title leading-none -mt-0.5 text-primary-dark">
                      -
                    </Text>
                  </Pressable>

                  <TextInput
                    value={Quantity.toString()}
                    onChangeText={(value) =>
                      setQuantity(value === "" ? "" : Number(value))
                    }
                    keyboardType="numeric"
                    className="w-24 h-[48px] border border-primary rounded-xl px-2 text-center text-foreground font-body"
                    placeholder="2"
                    placeholderTextColor="#8FB89A"
                  />

                  <Pressable
                    onPress={increaseQuantity}
                    className="rounded-full bg-sage-light w-10 h-10 flex items-center justify-center"
                  >
                    <Text className="text-4xl font-recipe-title leading-none -mt-0.5 text-primary-dark">
                      +
                    </Text>
                  </Pressable>
                </View>

                <View className="w-1/3">
                  <PantryUnitDropDown value={unit} onChange={setUnit} />
                </View>
              </View>
            </View>

            <View className="mt-6">
              <Text className="mb-2 text-primary-dark font-button text-xl">
                Category *
              </Text>

              <PantryCategoryDropdown value={category} onChange={setCategory} />
            </View>

            <View className="mt-6 bg-sage-light p-3 flex flex-row items-center rounded-lg gap-3">
              <Image
                source={icons.circle}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />

              <Text className="text-primary-dark font-body">
                In your pantry
              </Text>
            </View>

            <Pressable className="bg-primary-dark py-4 items-center rounded-full mt-6">
              <Text className="text-xl font-button text-background">
                Save changes
              </Text>
            </Pressable>

            <Pressable className="border-2 border-red-500 py-4 items-center rounded-full mt-4">
              <Text className="text-xl font-button text-red-500">
                Delete items
              </Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
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

export default EditPantryItem;
