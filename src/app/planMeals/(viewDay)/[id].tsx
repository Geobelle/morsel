import { useApi } from "@/lib/api";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../../../constants/icons";

export interface Meal {
  _id: string;
  name: string;
  type: "default" | "custom";
  recipe: string | ReciepeDetails | null;
}

export interface MealPlan {
  _id: string;
  userId: string;
  date: string;
  meals: Meal[];
  createdAt: string;
  updatedAt: string;
}

const ViewDay = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { request } = useApi();

  const [daysMeal, setDaysMeal] = useState<MealPlan | null>(null);

  useEffect(() => {
    const fetchTodaysMeal = async () => {
      try {
        const data = await request(`/api/planMeals/getMealByDate/${id}`, {
          method: "GET",
        });

        setDaysMeal(data.data);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchTodaysMeal();
  });

  const getMeal = (mealName: string) => {
    return daysMeal?.meals.find(
      (meal) => meal.name.toLowerCase() === mealName.toLowerCase(),
    );
  };

  const getDisplayDate = (date: string) => {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <ScrollView>
        <View>
          <View className="flex mb-8 flex-row relative items-center">
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
              {getDisplayDate(id)}
            </Text>
          </View>

          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Breakfast
            </Text>

            {getMeal("Breakfast")?.recipe &&
            typeof getMeal("Breakfast")?.recipe === "object" ? (
              <Pressable
                onPress={() => {
                  // You can add your edit/replace recipe navigation here
                }}
                className="my-3 flex-row items-center gap-3 bg-cream p-3 rounded-2xl"
              >
                <Image
                  source={{
                    uri: (getMeal("Breakfast")?.recipe as ReciepeDetails).image,
                  }}
                  className="w-24 h-24 rounded-2xl"
                  resizeMode="cover"
                />

                <View className="flex-1">
                  <Text className="text-foreground font-recipe-title text-lg">
                    {(getMeal("Breakfast")?.recipe as ReciepeDetails).name}
                  </Text>

                  <View className="flex-row items-center gap-1 mt-1">
                    <Ionicons name="time-outline" size={16} color="#53765B" />

                    <Text className="text-primary-dark font-body">
                      {
                        (getMeal("Breakfast")?.recipe as ReciepeDetails)
                          .prepTime
                      }
                    </Text>
                  </View>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  router.push({
                    pathname: "/planMeals/selectRecipe",
                    params: {
                      date: id,
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

            {getMeal("Lunch")?.recipe &&
            typeof getMeal("Lunch")?.recipe === "object" ? (
              <Pressable
                onPress={() => {
                  // You can add your edit/replace recipe navigation here
                }}
                className="my-3 flex-row items-center gap-3 bg-cream p-3 rounded-2xl"
              >
                <Image
                  source={{
                    uri: (getMeal("Lunch")?.recipe as ReciepeDetails).image,
                  }}
                  className="w-24 h-24 rounded-2xl"
                  resizeMode="cover"
                />

                <View className="flex-1">
                  <Text className="text-foreground font-recipe-title text-lg">
                    {(getMeal("Lunch")?.recipe as ReciepeDetails).name}
                  </Text>

                  <View className="flex-row items-center gap-1 mt-1">
                    <Ionicons name="time-outline" size={16} color="#53765B" />

                    <Text className="text-primary-dark font-body">
                      {(getMeal("Lunch")?.recipe as ReciepeDetails).prepTime}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  router.push({
                    pathname: "/planMeals/selectRecipe",
                    params: {
                      date: id,
                      mealName: "Lunch",
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

            {getMeal("Dinner")?.recipe &&
            typeof getMeal("Dinner")?.recipe === "object" ? (
              <Pressable
                onPress={() => {
                  // You can add your edit/replace recipe navigation here
                }}
                className="my-3 flex-row items-center gap-3 bg-cream p-3 rounded-2xl"
              >
                <Image
                  source={{
                    uri: (getMeal("Dinner")?.recipe as ReciepeDetails).image,
                  }}
                  className="w-24 h-24 rounded-2xl"
                  resizeMode="cover"
                />

                <View className="flex-1">
                  <Text className="text-foreground font-recipe-title text-lg">
                    {(getMeal("Dinner")?.recipe as ReciepeDetails).name}
                  </Text>

                  <View className="flex-row items-center gap-1 mt-1">
                    <Ionicons name="time-outline" size={16} color="#53765B" />

                    <Text className="text-primary-dark font-body">
                      {(getMeal("Dinner")?.recipe as ReciepeDetails).prepTime}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  router.push({
                    pathname: "/planMeals/selectRecipe",
                    params: {
                      date: id,
                      mealName: "Dinner",
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

            {getMeal("Snacks")?.recipe &&
            typeof getMeal("Snacks")?.recipe === "object" ? (
              <Pressable
                onPress={() => {
                  // You can add your edit/replace recipe navigation here
                }}
                className="my-3 flex-row items-center gap-3 bg-cream p-3 rounded-2xl"
              >
                <Image
                  source={{
                    uri: (getMeal("Snacks")?.recipe as ReciepeDetails).image,
                  }}
                  className="w-24 h-24 rounded-2xl"
                  resizeMode="cover"
                />

                <View className="flex-1">
                  <Text className="text-foreground font-recipe-title text-lg">
                    {(getMeal("Snacks")?.recipe as ReciepeDetails).name}
                  </Text>

                  <View className="flex-row items-center gap-1 mt-1">
                    <Ionicons name="time-outline" size={16} color="#53765B" />

                    <Text className="text-primary-dark font-body">
                      {(getMeal("Snacks")?.recipe as ReciepeDetails).prepTime}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  router.push({
                    pathname: "/planMeals/selectRecipe",
                    params: {
                      date: id,
                      mealName: "Snacks",
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

          <Pressable
            onPress={() => {
              router.push({
                pathname: "/planMeals/selectRecipe",
                params: {
                  date: id,
                  type: "custom",
                },
              });
            }}
            className="bg-primary-dark py-4  items-center rounded-full mt-6"
          >
            <Text className="text-xl font-button text-background">
              Add another meal
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewDay;
