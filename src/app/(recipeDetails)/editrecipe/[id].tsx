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
import IngredientsFields from "../../../../components/IngredientsFields";
import InstructionsField from "../../../../components/InstructionsField";
import { reciepeDetails } from "../../../../constants/data";
import { icons } from "../../../../constants/icons";
import image from "../../../../constants/image";

const EditRecipe = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const recipe = reciepeDetails.find((item) => item.id === id);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");
  const [ingredients, setIngredients] = useState<
    { id: string; name: string; quantity: string }[]
  >([]);

  const [instructions, setInstructions] = useState<
    { id: string; text: string }[]
  >([]);

  useEffect(() => {
    if (recipe) {
      setName(recipe.name.replace(/\b\w/g, (char) => char.toUpperCase()));
      setCategory(recipe.category);
      setTime(recipe.time);

      setIngredients(
        recipe.ingredients.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
        })),
      );

      setInstructions(
        recipe.Preparation.map((step) => ({
          id: step.id,
          text: step.name,
        })),
      );
    }
  }, [id]);

  const addIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: "",
        quantity: "",
      },
    ]);
  };

  const updateIngredient = (
    id: string,
    field: "name" | "quantity",
    value: string,
  ) => {
    setIngredients((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const deleteIngredient = (id: string) => {
    setIngredients((prev) => prev.filter((item) => item.id !== id));
  };

  const addStep = () => {
    setInstructions((prev) => [
      ...prev,
      { id: Date.now().toString(), text: "" },
    ]);
  };

  const updateStep = (id: string, text: string) => {
    setInstructions((prev) =>
      prev.map((step) => (step.id === id ? { ...step, text } : step)),
    );
  };

  const deleteStep = (id: string) => {
    setInstructions((prev) => prev.filter((step) => step.id !== id));
  };

  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <View className="flex mb-6 flex-row relative items-center">
              <Pressable
                onPress={() => {
                  router.back();
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

            <View className="mt-6 border border-sage-light p-3 rounded-3xl">
              <View className="flex flex-row justify-between items-center">
                <Text className="mb-2 text-primary-dark font-button text-xl">
                  Ingredients
                </Text>

                <Pressable
                  className="flex flex-row gap-3 items-center"
                  onPress={addIngredient}
                >
                  <Text className="mb-2 text-primary-dark font-ingredient text-lg">
                    Add ingredients
                  </Text>

                  <Image
                    source={image.add}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>

              {ingredients.map((item) => (
                <IngredientsFields
                  key={item.id}
                  ingredientName={item.name}
                  quantity={item.quantity}
                  onChangeQantity={(quantity) =>
                    updateIngredient(item.id, "quantity", quantity)
                  }
                  onChangeText={(name) =>
                    updateIngredient(item.id, "name", name)
                  }
                  onDelete={() => deleteIngredient(item.id)}
                />
              ))}
            </View>

            <View className="mt-6 border border-sage-light p-3 rounded-3xl">
              <View className="flex flex-row justify-between items-center">
                <Text className="mb-2 text-primary-dark font-button text-xl">
                  Instructions
                </Text>

                <Pressable
                  className="flex flex-row gap-3 items-center"
                  onPress={addStep}
                >
                  <Text className="mb-2 text-primary-dark font-ingredient text-lg">
                    Add steps
                  </Text>

                  <Image
                    source={image.add}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>

              {instructions.map((step, index) => (
                <InstructionsField
                  key={step.id}
                  number={index + 1}
                  text={step.text}
                  onChangeText={(text) => updateStep(step.id, text)}
                  onDelete={() => deleteStep(step.id)}
                />
              ))}
            </View>

            <Pressable className="bg-primary-dark py-4  items-center rounded-full mt-6">
              <Text className="text-xl font-button text-background">
                Save Changes
              </Text>
            </Pressable>
            <Pressable className=" border-2 border-primary-dark py-4  items-center rounded-full mt-4">
              <Text className="text-xl font-button text-primary-dark">
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
export default EditRecipe;
