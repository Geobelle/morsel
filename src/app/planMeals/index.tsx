import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MealCalendar from "../../../components/MealCalender";
import { icons } from "../../../constants/icons";

const planPage = () => {
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
                console.log("Selected date:", date);
              }}
            />
          </View>
          <View className="justify-between flex flex-row items-center bg-sage-light p-3 my-4 rounded-2xl mb-5">
            <Text className="font-ingredient text-lg text-foreground">
              Planned meals
            </Text>
            <Pressable className="p-2 border border-primary shadow-md rounded-full">
              <Text className="font-ingredient text-lg text-primary-dark">
                View day
              </Text>
            </Pressable>
          </View>

          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Breakfast
            </Text>
          </View>

          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Lunch
            </Text>
          </View>
          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Dinner
            </Text>
          </View>
          <View>
            <Text className="text-foreground font-recipe-title text-xl">
              Snacks
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default planPage;
