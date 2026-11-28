import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { useApi } from "@/lib/api";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MealCalendar from "../../../components/MealCalender";
import { icons } from "../../../constants/icons";

export interface Meal {
  _id: string;
  name: string;
  type: "default" | "custom";
  recipe: string | ReciepeDetails | null;
  note?: string;
}

export interface MealPlan {
  _id: string;
  userId: string;
  date: string;
  meals: Meal[];
  createdAt: string;
  updatedAt: string;
}

const PlanPage = () => {
  const { request } = useApi();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [daysMeal, setDaysMeal] = useState<MealPlan | null>(null);

  const getDateKey = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchTodaysMeal = async () => {
      try {
        const data = await request(
          `/api/planMeals/getMealByDate/${getDateKey(selectedDate)}`,
          {
            method: "GET",
          },
        );

        setDaysMeal(data.data);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchTodaysMeal();
  }, [selectedDate]);

  const getMeal = (mealName: string) => {
    return daysMeal?.meals.find(
      (meal) => meal.name.toLowerCase() === mealName.toLowerCase(),
    );
  };

  const getMealRecipe = (mealName: string) => {
    const recipe = getMeal(mealName)?.recipe;

    if (recipe && typeof recipe === "object") {
      return recipe as ReciepeDetails;
    }
    return null;
  };
  const customMeals =
    daysMeal?.meals.filter((meal) => meal.type === "custom") || [];

  const breakfastRecipe = getMealRecipe("Breakfast");
  const lunchRecipe = getMealRecipe("Lunch");
  const dinnerRecipe = getMealRecipe("Dinner");
  const snackRecipe = getMealRecipe("Snacks");

  // rest of your component
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View className="flex mb-2 flex-row relative items-center">
            <Pressable
              onPress={() => {
                router.push("/(tabs)");
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

            {breakfastRecipe ? (
              <Pressable
                onPress={() => {
                  // You can add your edit/replace recipe navigation here
                }}
                className="my-3 flex-row items-center gap-3 bg-cream p-3 rounded-2xl"
              >
                <Image
                  source={{ uri: breakfastRecipe.image }}
                  className="w-24 h-24 rounded-2xl"
                  resizeMode="cover"
                />

                <View className="flex-1">
                  <Text className="text-foreground font-recipe-title text-lg">
                    {breakfastRecipe.name}
                  </Text>

                  <View className="flex-row items-center gap-1 mt-1">
                    {getMeal("Breakfast")?.note ? (
                      <Text className="text-primary-dark text-xs font-body mt-1">
                        {getMeal("Breakfast")?.note}
                      </Text>
                    ) : null}
                  </View>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  router.push({
                    pathname: "/planMeals/selectRecipe",
                    params: {
                      date: getDateKey(selectedDate),
                    },
                  });
                }}
                className="my-3 py-3 border border-dashed border-primary w-full rounded-2xl flex-row gap-2 items-center bg-sage-light justify-center"
              >
                <Ionicons name="add-circle" size={30} color="#53765B" />

                <Text className="text-primary-dark font-button text-lg">
                  Add Meal
                </Text>
              </Pressable>
            )}
          </View>

          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Lunch
            </Text>

            {lunchRecipe ? (
              <Pressable
                onPress={() => {
                  // You can add your edit/replace recipe navigation here
                }}
                className="my-3 flex-row items-center gap-3 bg-cream p-3 rounded-2xl"
              >
                <Image
                  source={{ uri: lunchRecipe.image }}
                  className="w-24 h-24 rounded-2xl"
                  resizeMode="cover"
                />

                <View className="flex-1">
                  <Text className="text-foreground font-recipe-title text-lg">
                    {lunchRecipe.name}
                  </Text>

                  <View className="flex-row items-center gap-1 mt-1">
                    {getMeal("Lunch")?.note ? (
                      <Text className="text-primary-dark text-xs font-body mt-1">
                        {getMeal("Lunch")?.note}
                      </Text>
                    ) : null}
                  </View>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  router.push({
                    pathname: "/planMeals/selectRecipe",
                    params: {
                      date: getDateKey(selectedDate),
                    },
                  });
                }}
                className="my-3 py-3 border border-dashed border-primary w-full rounded-2xl flex-row gap-2 items-center bg-sage-light justify-center"
              >
                <Ionicons name="add-circle" size={30} color="#53765B" />

                <Text className="text-primary-dark font-button text-lg">
                  Add Meal
                </Text>
              </Pressable>
            )}
          </View>

          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Dinner
            </Text>

            {dinnerRecipe ? (
              <Pressable
                onPress={() => {
                  // You can add your edit/replace recipe navigation here
                }}
                className="my-3 flex-row items-center gap-3 bg-cream p-3 rounded-2xl"
              >
                <Image
                  source={{ uri: dinnerRecipe.image }}
                  className="w-24 h-24 rounded-2xl"
                  resizeMode="cover"
                />

                <View className="flex-1">
                  <Text className="text-foreground font-recipe-title text-lg">
                    {dinnerRecipe.name}
                  </Text>

                  <View className="flex-row items-center gap-1 mt-1">
                    {getMeal("Dinner")?.note ? (
                      <Text className="text-primary-dark text-xs font-body mt-1">
                        {getMeal("Dinner")?.note}
                      </Text>
                    ) : null}
                  </View>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  router.push({
                    pathname: "/planMeals/selectRecipe",
                    params: {
                      date: getDateKey(selectedDate),
                    },
                  });
                }}
                className="my-3 py-3 border border-dashed border-primary w-full rounded-2xl flex-row gap-2 items-center bg-sage-light justify-center"
              >
                <Ionicons name="add-circle" size={30} color="#53765B" />

                <Text className="text-primary-dark font-button text-lg">
                  Add Meal
                </Text>
              </Pressable>
            )}
          </View>

          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Snacks
            </Text>

            {snackRecipe ? (
              <Pressable
                onPress={() => {
                  // You can add your edit/replace recipe navigation here
                }}
                className="my-3 flex-row items-center gap-3 bg-cream p-3 rounded-2xl"
              >
                <Image
                  source={{ uri: snackRecipe.image }}
                  className="w-24 h-24 rounded-2xl"
                  resizeMode="cover"
                />

                <View className="flex-1">
                  <Text className="text-foreground font-recipe-title text-lg">
                    {snackRecipe.name}
                  </Text>

                  <View className="flex-row items-center gap-1 mt-1">
                    {getMeal("Snacks")?.note ? (
                      <Text className="text-primary-dark text-xs font-body mt-1">
                        {getMeal("Snacks")?.note}
                      </Text>
                    ) : null}
                  </View>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  router.push({
                    pathname: "/planMeals/selectRecipe",
                    params: {
                      date: getDateKey(selectedDate),
                    },
                  });
                }}
                className="my-3 py-3 border border-dashed border-primary w-full rounded-2xl flex-row gap-2 items-center bg-sage-light justify-center"
              >
                <Ionicons name="add-circle" size={30} color="#53765B" />

                <Text className="text-primary-dark font-button text-lg">
                  Add Meal
                </Text>
              </Pressable>
            )}
          </View>

          {customMeals.length > 0 && (
            <View className="mt-4">
              <Text className="text-foreground font-recipe-title text-xl mb-3">
                Custom Meals
              </Text>

              {customMeals.map((meal) => {
                const recipe =
                  meal.recipe && typeof meal.recipe === "object"
                    ? meal.recipe
                    : null;

                return (
                  <View key={meal._id} className="mb-4">
                    <Text className="text-foreground font-ingredient text-lg">
                      {meal.name}
                    </Text>

                    {recipe && (
                      <View className="my-2 flex-row items-center gap-3 bg-cream p-3 rounded-2xl">
                        <Image
                          source={{ uri: recipe.image }}
                          className="w-24 h-24 rounded-2xl"
                          resizeMode="cover"
                        />

                        <View className="flex-1">
                          <Text className="text-foreground font-recipe-title text-lg">
                            {recipe.name}
                          </Text>

                          {meal.note ? (
                            <Text className="text-foreground font-body mt-1">
                              {meal.note}
                            </Text>
                          ) : null}
                        </View>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          )}

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

export default PlanPage;
