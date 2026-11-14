import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../../../constants/icons";

const ViewDay = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <ScrollView>
        <View>
          <View className="flex mb-2 flex-row relative items-center">
            <Pressable
              onPress={() => {
                router.push("/planMeals");
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
              {id}
            </Text>
          </View>
          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Breakfast
            </Text>
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
                  pathname: "/planMeals/selectRecipe",
                  params: {
                    date: id,
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
                  pathname: "/planMeals/selectRecipe",
                  params: {
                    date: id,
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
                  pathname: "/planMeals/selectRecipe",
                  params: {
                    date: id,
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
              Add another meal
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewDay;
