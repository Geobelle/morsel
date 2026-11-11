import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddMealCard from "../../../../components/AddMealCard";
import MealCategory from "../../../../components/MealCategory";
import { reciepeDetails } from "../../../../constants/data";
import { icons } from "../../../../constants/icons";

const AddMeal = () => {
  const { id, date } = useLocalSearchParams<{ id: string; date: string }>();

  const recipe = reciepeDetails.find((item) => item.id === id);

  const [specificCategory, setSpecificCategory] = useState(
    recipe?.category ?? "",
  );

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

        {recipe && (
          <AddMealCard
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            time={recipe.time}
            category={recipe.category}
          />
        )}
        <View>
          <Text className="font-recipe-title text-foreground text-2xl">
            Assign to
          </Text>

          <MealCategory
            selectedCategory={specificCategory}
            onSelectCategory={setSpecificCategory}
          />
        </View>

        <View className="my-4">
          <Text className="font-recipe-title text-foreground text-2xl">
            Date
          </Text>
          <View className="my-3 py-3 px-4  w-full rounded-2xl flex-row gap-2 items-center bg-sage-light ">
            <Ionicons name="calendar-outline" size={24} color={"#53765B"} />

            <Text className=" text-foreground font-body">{date}</Text>
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

        <Pressable className="bg-primary-dark py-4  items-center rounded-full mt-6">
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

export default AddMeal;
