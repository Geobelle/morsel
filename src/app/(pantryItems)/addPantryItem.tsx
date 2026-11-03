import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryDropDown from "../../../components/CategoryDropdown";
import PantryUnitDropDown from "../../../components/PantryUnitsDropdown";
import { icons } from "../../../constants/icons";
import image from "../../../constants/image";

const addPantryItem = () => {
  const [text, setText] = useState("");
  const [unit, setUnit] = useState("pcs");
  const [category, setCategory] = useState("Breakfast");
  return (
    <SafeAreaView className="flex-1 p-6 bg-background">
      <View className="flex mb-6 flex-row relative items-center">
        <Pressable
          onPress={() => {
            router.push("/(tabs)/pantry");
          }}
          className="bg-sage-light rounded-full p-3 z-50"
        >
          <Image
            source={icons.arrow}
            style={{
              width: 24,
              height: 24,
            }}
            resizeMode="contain"
          />
        </Pressable>

        <Text className="text-primary-dark font-heading text-3xl absolute left-0 right-0 text-center">
          Add Pantry Item
        </Text>
      </View>

      <View className="my-2 border border-dashed border-primary w-full h-[220px] rounded-xl flex items-center justify-center">
        <Text className="mb-2 text-primary-dark font-button text-xl">
          Add a photo
        </Text>
        <View className="bg-sage-light p-6 rounded-full">
          <Image
            source={image.camera}
            style={{
              width: 60,
              height: 60,
            }}
            resizeMode="contain"
          />
        </View>
      </View>

      <View>
        <Text className="mb-2 text-primary-dark font-button text-xl">
          Item name *
        </Text>
        <View style={styles.container}>
          <Image source={image.leaf} style={styles.icon} resizeMode="contain" />

          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="e.g tomatoes"
            placeholderTextColor="#8FB89A"
          />
        </View>
      </View>

      <View className="mt-4">
        <Text className="mb-2 text-primary-dark font-button text-xl">
          Quantity *
        </Text>

        <View className="flex flex-row items-center justify-around">
          <View className="flex flex-row items-center justify-between border border-sage-light rounded-xl w-3/5">
            <Pressable className="rounded-full bg-sage-light w-10 h-10 flex items-center justify-center">
              <Text className="text-4xl font-recipe-title leading-none -mt-0.5 text-primary-dark">
                -
              </Text>
            </Pressable>

            <TextInput
              keyboardType="numeric"
              className="w-16 h-[48px] border border-primary rounded-xl px-2 text-center text-foreground font-body"
              placeholder="2"
              placeholderTextColor="#8FB89A"
            />

            <Pressable className="rounded-full bg-sage-light w-10 h-10 flex items-center justify-center">
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

      <View className="mt-4">
        <Text className="mb-2 text-primary-dark font-button text-xl">
          Category *
        </Text>
        <CategoryDropDown value={category} onChange={setCategory} />
      </View>
      <View className="mt-4 bg-sage-light p-3 flex flex-row items-center rounded-lg gap-3">
        <Image
          source={icons.circle}
          style={{
            width: 20,
            height: 20,
          }}
          resizeMode="contain"
        />

        <Text className=" text-primary-dark font-body ">
          This item will be added to your pantry
        </Text>
      </View>

      <Pressable className="bg-primary-dark py-4  items-center rounded-full mt-4">
        <Text className="text-xl font-button text-background">Save item</Text>
      </Pressable>
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
export default addPantryItem;
