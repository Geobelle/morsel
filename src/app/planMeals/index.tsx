import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MealCalendar from "../../../components/MealCalender";
import { icons } from "../../../constants/icons";

const planPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDateKey = (date: Date) => {
    const day = date.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const month = date.toLocaleDateString("en-US", {
      month: "short",
    });

    const dayNumber = String(date.getDate()).padStart(2, "0");

    return ` ${day}, ${month} ${dayNumber}`;
  };

  // rest of your component
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <ScrollView>
        <View>
          <View className="flex mb-2 flex-row relative items-center">
            <Pressable
              onPress={() => {
                router.push("/");
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
              Meal Planner
            </Text>
          </View>
          <View>
            <MealCalendar
              plannedDates={["2026-11-11", "2026-11-12", "2026-11-14"]}
              onDateChange={(date) => {
                setSelectedDate(date);
                console.log("Selected date:", date);
              }}
            />
          </View>
          <View className="justify-between flex flex-row items-center bg-sage-light p-3 my-4 rounded-2xl mb-5">
            <Text className="font-ingredient text-lg text-foreground">
              Planned meals
            </Text>
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/planMeals/(viewDay)/[id]",
                  params: {
                    id: getDateKey(selectedDate),
                  },
                });
              }}
              className="p-2 border border-primary shadow-md rounded-full"
            >
              <Text className="font-ingredient text-lg text-primary-dark">
                View day
              </Text>
            </Pressable>
          </View>

          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Breakfast
            </Text>
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/planMeals/SelectRecipe",
                  params: {
                    date: getDateKey(selectedDate),
                  },
                });
              }}
              className="my-3 py-3 border border-dashed border-primary w-full rounded-2xl flex-row gap-2 items-center bg-sage-light justify-center"
            >
              <Ionicons name="add-circle" size={30} color={"#53765B"} />

              <Text className=" text-primary-dark font-button text-lg">
                Add Meal
              </Text>
            </Pressable>
          </View>

          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Lunch
            </Text>
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/planMeals/SelectRecipe",
                  params: {
                    date: getDateKey(selectedDate),
                  },
                });
              }}
              className="my-3 py-3 border border-dashed border-primary w-full rounded-2xl flex-row gap-2 items-center bg-sage-light justify-center"
            >
              <Ionicons name="add-circle" size={30} color={"#53765B"} />

              <Text className=" text-primary-dark font-button text-lg">
                Add Meal
              </Text>
            </Pressable>
          </View>
          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Dinner
            </Text>
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/planMeals/SelectRecipe",
                  params: {
                    date: getDateKey(selectedDate),
                  },
                });
              }}
              className="my-3 py-3 border border-dashed border-primary w-full rounded-2xl flex-row gap-2 items-center bg-sage-light justify-center"
            >
              <Ionicons name="add-circle" size={30} color={"#53765B"} />

              <Text className=" text-primary-dark font-button text-lg">
                Add Meal
              </Text>
            </Pressable>
          </View>
          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Snacks
            </Text>
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/planMeals/SelectRecipe",
                  params: {
                    date: getDateKey(selectedDate),
                  },
                });
              }}
              className="my-3 py-3 border border-dashed border-primary w-full rounded-2xl flex-row gap-2 items-center bg-sage-light justify-center"
            >
              <Ionicons name="add-circle" size={30} color={"#53765B"} />

              <Text className=" text-primary-dark font-button text-lg">
                Add Meal
              </Text>
            </Pressable>
          </View>

          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Drinks
            </Text>
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/planMeals/SelectRecipe",
                  params: {
                    date: getDateKey(selectedDate),
                  },
                });
              }}
              className="my-3 py-3 border border-dashed border-primary w-full rounded-2xl flex-row gap-2 items-center bg-sage-light justify-center"
            >
              <Ionicons name="add-circle" size={30} color={"#53765B"} />

              <Text className=" text-primary-dark font-button text-lg">
                Add Meal
              </Text>
            </Pressable>
          </View>

          <Pressable className="bg-primary-dark py-4  items-center rounded-full mt-6">
            <Text className="text-xl font-button text-background">
              Generate Shopping List
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default planPage;
