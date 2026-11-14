import { router, type Href } from "expo-router";
import { useClerk, useUser } from "@clerk/expo";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { pantryItems, reciepeDetails } from "../../../constants/data";
import { icons } from "../../../constants/icons";
import image from "../../../constants/image";

const Profile = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [signOutError, setSignOutError] = useState("");

  const handleSignOut = async () => {
    setSignOutError("");
    try {
      await signOut();
      router.replace("/(auth)/sign-in" as Href);
    } catch {
      setSignOutError("We couldn’t sign you out just now. Please try again.");
    }
  };

  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <Text className="text-primary-dark font-heading text-3xl">Profile</Text>
        <View className="flex flex-row mt-6 gap-8 items-center">
          <Image
            source={image.profileImage}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
          <View>
            <Text className="text-primary-dark font-recipe-title text-xl">
              {user?.fullName || user?.firstName || "Morsel cook"}
            </Text>
            <Text className="text-foreground font-ingredient">
              {user?.primaryEmailAddress?.emailAddress || "Your account"}
            </Text>
          </View>
        </View>

        <View className="flex flex-row justify-between mt-8">
          <View className="gap-2 w-1/3">
            <Text className="text-center text-primary-dark font-recipe-title text-xl">
              {reciepeDetails.length}
            </Text>
            <Text className="text-center text-foreground font-body">
              Recipes Saved
            </Text>
          </View>
          <View className="border-primary border-x px-6 gap-2 w-1/3">
            <Text className="text-center text-primary-dark font-recipe-title text-xl">
              12
            </Text>
            <Text className="text-center text-foreground font-body">
              Meal Plans
            </Text>
          </View>
          <View className="gap-2 w-1/3">
            <Text className="text-center text-primary-dark font-recipe-title text-xl">
              {pantryItems.length}
            </Text>
            <Text className="text-center text-foreground font-body">
              Ingredients
            </Text>
          </View>
        </View>

        <View
          style={styles.shadow}
          className=" mt-6 rounded-2xl bg-background "
        >
          <Pressable
            accessibilityRole="button"
            onPress={() => {
              router.push("/shoppingList");
            }}
            className={`my-2  flex-row justify-between items-center p-4 gap-3 border-b-2 border-sage-light  `}
          >
            <View className="flex-row items-center gap-3">
              <Image
                source={icons.list}
                style={{
                  width: 16,
                  height: 16,
                }}
                resizeMode="contain"
              />

              <Text className="font-recipe-title text-primary-dark">
                Shopping List
              </Text>
            </View>
            <Image
              source={icons.forward}
              style={{
                width: 15,
                height: 15,
              }}
              resizeMode="contain"
            />
          </Pressable>

          <Pressable
            accessibilityRole="button"
            className={`my-2  flex-row justify-between items-center p-4 gap-3 border-b-2 border-sage-light  `}
            onPress={() => {
              router.push("/planMeals");
            }}
          >
            <View className="flex-row items-center gap-3">
              <Image
                source={icons.plan}
                style={{
                  width: 16,
                  height: 16,
                }}
                resizeMode="contain"
              />

              <Text className="font-recipe-title text-primary-dark">
                Plan Meals
              </Text>
            </View>
            <Image
              source={icons.forward}
              style={{
                width: 15,
                height: 15,
              }}
              resizeMode="contain"
            />
          </Pressable>

          <Pressable
            accessibilityRole="button"
            className={`my-2  flex-row justify-between items-center p-4 gap-3 border-b-2 border-sage-light `}
            onPress={() => {
              router.push("/(pantryItems)/addPantryItem");
            }}
          >
            <View className="flex-row items-center gap-3">
              <Image
                source={icons.ingredients}
                style={{
                  width: 16,
                  height: 16,
                }}
                resizeMode="contain"
              />

              <Text className="font-recipe-title text-primary-dark">
                Add Pantry Item
              </Text>
            </View>
            <Image
              source={icons.forward}
              style={{
                width: 15,
                height: 15,
              }}
              resizeMode="contain"
            />
          </Pressable>

          <Pressable
            accessibilityRole="button"
            className={`my-2  flex-row justify-between items-center p-4 gap-3 border-b-2 border-sage-light  `}
          >
            <View className="flex-row items-center gap-3">
              <Image
                source={icons.settings}
                style={{
                  width: 16,
                  height: 16,
                }}
                resizeMode="contain"
              />

              <Text className="font-recipe-title text-primary-dark">
                Settings
              </Text>
            </View>
            <Image
              source={icons.forward}
              style={{
                width: 15,
                height: 15,
              }}
              resizeMode="contain"
            />
          </Pressable>

          <Pressable
            accessibilityRole="button"
            className={`my-2  flex-row justify-between items-center p-4 gap-3 border-b-2 border-sage-light   `}
          >
            <View className="flex-row items-center gap-3">
              <Image
                source={icons.help}
                style={{
                  width: 16,
                  height: 16,
                }}
                resizeMode="contain"
              />

              <Text className="font-recipe-title text-primary-dark">
                Help & Support
              </Text>
            </View>
            <Image
              source={icons.forward}
              style={{
                width: 15,
                height: 15,
              }}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        <View className="mt-8">
          {signOutError ? (
            <Text accessibilityRole="alert" className="mb-3 font-body text-sm text-red-700">
              {signOutError}
            </Text>
          ) : null}
          <Pressable
            accessibilityRole="button"
            onPress={handleSignOut}
            className="min-h-14 items-center justify-center rounded-full border border-primary"
          >
            <Text className="font-button text-base text-primary-dark">Sign out</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 5,
  },
});
