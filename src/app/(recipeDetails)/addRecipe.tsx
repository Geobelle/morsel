import { router } from "expo-router";
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
import CategoryDropDown from "../../../components/CategoryDropdown";
import { icons } from "../../../constants/icons";
import image from "../../../constants/image";

const addRecipe = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Breakfast");
  return (
    <SafeAreaView className="flex-1 p-6 bg-background">
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <View className="flex mb-6 flex-row relative items-center">
              <Pressable
                onPress={() => {
                  router.push("/(tabs)/recipes");
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
                Add Recipe
              </Text>
            </View>

            <View className="my-6 border border-dashed border-primary w-full h-[220px] rounded-xl flex items-center justify-center">
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
                Recipe name *
              </Text>
              <View style={styles.container}>
                <Image
                  source={image.pot}
                  style={styles.icon}
                  resizeMode="contain"
                />

                <TextInput
                  style={styles.input}
                  onChangeText={setText}
                  value={text}
                  placeholder="e.g Jollof rice"
                  placeholderTextColor="#8FB89A"
                />
              </View>
            </View>

            <View className="mt-6">
              <Text className="mb-2 text-primary-dark font-button text-xl">
                Category *
              </Text>
              <CategoryDropDown value={category} onChange={setCategory} />
            </View>

            <View className="mt-6">
              <Text className="mb-2 text-primary-dark font-button text-xl">
                Prep time *
              </Text>
              <View style={styles.container}>
                <Image
                  source={image.time}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                />

                <TextInput
                  style={styles.input}
                  onChangeText={setText}
                  value={text}
                  placeholder="e.g 45 mins"
                  placeholderTextColor="#8FB89A"
                />
              </View>
            </View>

            <View className="mt-6 flex flex-row justify-between items-center">
              <Text className="mb-2 text-primary-dark font-button text-xl">
                Ingredients
              </Text>
              <Pressable className="flex flex-row gap-3 items-center">
                <Text className="mb-2 text-primary-dark font-ingredient text-lg">
                  Add ingredients
                </Text>

                <Image
                  source={image.add}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                />
              </Pressable>
            </View>

            <View className="mt-6 flex flex-row justify-between items-center">
              <Text className="mb-2 text-primary-dark font-button text-xl">
                Instructions
              </Text>
              <Pressable className="flex flex-row gap-3 items-center">
                <Text className="mb-2 text-primary-dark font-ingredient text-lg">
                  Add steps
                </Text>

                <Image
                  source={image.add}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                />
              </Pressable>
            </View>

            <Pressable className="bg-primary-dark py-4  items-center rounded-full mt-6">
              <Text className="text-xl font-button text-background">
                Save recipe
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
export default addRecipe;
