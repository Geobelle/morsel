import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants/icons";

const shoppingList = () => {
  return (
    <SafeAreaView className="flex-1 p-6 bg-background">
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <View className="flex justify-center items-center text-center bg-sage-light p-4 rounded-3xl ">
          <Text className="font-ingredient text-lg text-primary-dark">
            Ready to make a list?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default shoppingList;
