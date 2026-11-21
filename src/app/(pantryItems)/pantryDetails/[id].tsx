import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../../../constants/icons";
import { useApi } from "../../../lib/api";

interface PantryItem {
  _id: string;
  name: string;
  image: string;
  category: string;
  quantity: number;
  unit: string;
  createdAt: string;
}

const PantryDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { request } = useApi();

  const [PantryItem, setPantryItem] = useState<PantryItem | null>(null);

  useEffect(() => {
    const fetchPantryItems = async () => {
      try {
        const data = await request(`/api/pantry/pantryItem/${id}`, {
          method: "GET",
        });
        setPantryItem(data.data);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchPantryItems();
  }, []);

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
        </View>

        <View className=" w-full h-[220px] rounded-xl overflow-hidden items-center justify-center">
          <Image
            source={{ uri: PantryItem?.image }}
            style={{
              width: "100%",
              height: "100%",
            }}
            resizeMode="cover"
          />
        </View>

        <View className="flex-row  mt-4 items-center ">
          <Text className="text-primary-dark font-heading text-3xl capitalize">
            {PantryItem?.name}
          </Text>
        </View>

        <View className="bg-sage-light my-4 p-4 rounded-3xl flex gap-3">
          <Text className="text-primary font-recipe-title tracking-widest text-xl ">
            In Your Pantry
          </Text>
          <View className="flex flex-row gap-2 items-center">
            <Text className="text-4xl text-primary-dark font-heading">
              {PantryItem?.quantity}
            </Text>
            <Text className="text-xl font-ingredient text-primary-dark">
              {PantryItem?.unit}
            </Text>
          </View>
        </View>

        <View className="pb-4 mb-4 border-b border-sage-light">
          <Text className="text-primary font-recipe-title  text-xl ">
            Added
          </Text>
          <Text className="text-foreground font-body text-lg">
            {PantryItem?.createdAt
              ? new Date(PantryItem.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : ""}
          </Text>
        </View>

        <View className="my-4">
          <Text>Recipes with {PantryItem?.name}</Text>
        </View>

        <Pressable
          className=" border-2 border-primary-dark py-4   items-center rounded-full mt-4"
          onPress={() => {
            router.push({
              pathname: "/(pantryItems)/editPantryItem/[id]",
              params: { id },
            });
          }}
        >
          <Text className="text-xl font-button text-primary-dark">
            Edit item
          </Text>
        </Pressable>

        <Pressable
          onPress={async () => {
            try {
              // 2. Create pantry item
              await request(`/api/pantry/pantryItem/delete/${id}`, {
                method: "DELETE",
              });

              // 3. Navigate after successful creation
              router.push("/(tabs)/pantry");
            } catch (error) {
              console.error("Error deleting pantry item:", error);
            }
          }}

          className="  items-center flex-row justify-center gap-2  mt-4"
        >
          <Ionicons name="trash-outline" size={24} color={"#EF4444"} />
          <Text className="text-xl font-button text-red-500">
            Delete from pantry
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PantryDetails;
