import { router, useIsFocused } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddItem from "../../components/AddItem";
import BottomDrawer from "../../components/BottomDrawer";
import OptionalList from "../../components/OptionalList";
import ToBuyList from "../../components/ToBuyList";
import { optionalItems, toBuyList } from "../../constants/data";
import { icons } from "../../constants/icons";
import image from "../../constants/image";

const ShoppingList = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const isFocused = useIsFocused();
  return (
    <SafeAreaView className="flex-1 p-6   bg-background">
      <View className="flex mb-6 flex-row relative items-center">
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
          Shopping List
        </Text>
      </View>

      <ScrollView className="flex-1   " showsVerticalScrollIndicator={false}>
        {/* Ready to make a list */}
        <View className="justify-center items-center bg-sage-light p-3 rounded-3xl mb-5">
          <Text className="font-ingredient text-lg text-primary-dark">
            Ready to make a list?
          </Text>
        </View>

        {/* To Buy Section */}
        <View className="">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-primary-dark font-recipe-title text-xl">
              To Buy
            </Text>

            <Pressable>
              <Text className="text-primary-dark font-ingredient text-lg">
                Clear all
              </Text>
            </Pressable>
          </View>

          {toBuyList.length > 0 ? (
            toBuyList.map((item) => <ToBuyList key={item.id} {...item} />)
          ) : (
            <Text className="text-foreground font-body">No items yet</Text>
          )}
        </View>

        {/* Optional Section */}
        <View className="mt-10 ">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-primary-dark font-recipe-title text-xl">
              Optional
            </Text>

            <Pressable>
              <Text className="text-primary-dark font-ingredient text-lg">
                Clear all
              </Text>
            </Pressable>
          </View>

          {optionalItems.length > 0 ? (
            optionalItems.map((item) => (
              <OptionalList key={item.id} {...item} />
            ))
          ) : (
            <Text className="text-foreground font-body">No items yet</Text>
          )}
        </View>
        <View className="flex justify-center relative items-center">
          <Image
            source={image.shoppingSticker}
            style={{
              width: "100%",
              height: 160,
              alignSelf: "center",
            }}
            resizeMode="contain"
          />
          <Text className="font-heading text-2xl text-primary absolute bottom-2 left-6 right-0 text-center">
            Happy shopping
          </Text>
        </View>

        <Pressable
          onPress={() => setShowDrawer(true)}
          className="bg-primary-dark py-4  items-center rounded-full mt-6"
        >
          <Text className="text-xl font-button text-background">
            Add to list
          </Text>
        </Pressable>
        <Pressable className=" border-2 border-primary-dark py-4  items-center rounded-full mt-4">
          <Text className="text-xl font-button text-primary-dark">
            Clear all
          </Text>
        </Pressable>

        {isFocused && showDrawer && (
          <BottomDrawer
            visible={showDrawer}
            onClose={() => setShowDrawer(false)}
          >
            <AddItem />
          </BottomDrawer>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingList;
