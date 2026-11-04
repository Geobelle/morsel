import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
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
import CategoryDropDown from "../../../../components/CategoryDropdown";
import { reciepeDetails } from "../../../../constants/data";
import { icons } from "../../../../constants/icons";
import image from "../../../../constants/image";

const editRecipe = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const recipe = reciepeDetails.find((item) => item.id === id);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (recipe) {
      setName(recipe.name.replace(/\b\w/g, (char) => char.toUpperCase()));
      setCategory(recipe.category);
      setTime(recipe.time);
    }
  }, [id]);

  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <View className="flex mb-6 flex-row relative items-center">
              <Pressable
                onPress={() => {
                  router.push({
                    pathname: "/(recipeDetails)/recipeDetailsPage/[id]",
                    params: { id },
                  });
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
                Edit Recipe Details
              </Text>
            </View>
            <View className="my-6  w-full h-[220px] rounded-xl overflow-hidden items-center justify-center">
              <Image
                source={recipe?.image}
                style={{
                  width: "100%",
                  height: "100%",
                }}
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
                  onChangeText={setName}
                  value={name}
                  autoCapitalize="words"
                  placeholder="e.g tomatoes"
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
                  onChangeText={setTime}
                  value={time}
                  placeholder="e.g 45 mins"
                  placeholderTextColor="#8FB89A"
                />
              </View>
            </View>
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
export default editRecipe;
