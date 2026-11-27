import { useApi } from "@/lib/api";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddMealCard from "../../../../components/AddMealCard";

import { icons } from "../../../../constants/icons";

const AddCustomMeal = () => {
  const { request } = useApi();
  const { id, date } = useLocalSearchParams<{ id: string; date: string }>();

  const [recipeDetails, setRecipeDetails] = useState<ReciepeDetails | null>(
    null,
  );
  const [mealName, setMealName] = useState("");

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const data = await request(`/api/recipes/details/${id}`, {
          method: "GET",
        });
        setRecipeDetails(data.data);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const getDisplayDate = (date: string) => {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  const [note, setNote] = useState("");
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex mb-4 flex-row relative items-start">
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
            Add Meal
          </Text>
        </View>

        {recipeDetails && (
          <AddMealCard
            id={recipeDetails?.id}
            name={recipeDetails?.name}
            image={recipeDetails?.image}
            prepTime={recipeDetails?.prepTime}
            category={recipeDetails?.category}
          />
        )}
        <View>
          <Text className="font-recipe-title text-foreground text-2xl">
            Assign to
          </Text>
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={setMealName}
            value={mealName}
            placeholder="e.g tomatoes"
            placeholderTextColor="#8FB89A"
          />
        </View>

        <View className="my-4">
          <Text className="font-recipe-title text-foreground text-2xl">
            Date
          </Text>
          <View className="my-3 py-3 px-4  w-full rounded-2xl flex-row gap-2 items-center bg-sage-light ">
            <Ionicons name="calendar-outline" size={24} color={"#53765B"} />

            <Text className=" text-foreground font-body">
              {getDisplayDate(date)}
            </Text>
          </View>
        </View>

        <View className="">
          <View className="flex flex-row gap-2 mb-2">
            <Text className="font-recipe-title text-foreground text-2xl">
              Note
            </Text>
            <Text className="font-body text-foreground text-xl">
              (optional)
            </Text>
          </View>

          <TextInput
            className="flex-1 border font-body text-foreground border-sage-light px-3 rounded-2xl h-16"
            value={note}
            onChangeText={setNote}
            placeholder="Add a note"
            placeholderTextColor="#D4D4D4"
          />
        </View>

        <Pressable
          onPress={async () => {
            if (!mealName.trim()) {
              alert("Please enter a meal name");
              return;
            }

            try {
              await request("/api/planMeals/addCustomMeal", {
                method: "POST",
                body: JSON.stringify({
                  date,
                  recipeId: id,
                  mealName: mealName,
                }),
              });

              // 3. Navigate after successful creation
              router.push("/planMeals");
            } catch (error) {
              console.error("Error creating plan meals", error);
            }
          }}
          className="bg-primary-dark py-4  items-center rounded-full mt-6"
        >
          <Text className="text-xl font-button text-background">Save Meal</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.back();
          }}
          className=" border-2 border-primary-dark py-4  items-center rounded-full mt-4"
        >
          <Text className="text-xl font-button text-primary-dark">Cancel</Text>
        </Pressable>
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
  input: {
    flex: 1,
    height: "100%",
    paddingVertical: 0,
    fontSize: 14,
    color: "#493F38",
  },
});
export default AddCustomMeal;
