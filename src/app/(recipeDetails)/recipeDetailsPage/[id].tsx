import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { reciepeDetails } from "../../../../constants/data";
import { icons } from "../../../../constants/icons";
import image from "../../../../constants/image";

const RecipeDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const recipe = reciepeDetails.find((item) => item.id === id);
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
            source={recipe?.image}
            style={{
              width: "100%",
              height: "100%",
            }}
            resizeMode="cover"
          />
        </View>
        <View className="flex-row  mt-4 items-center justify-between">
          <Text className="text-primary-dark font-heading text-3xl">
            {recipe?.name}
          </Text>

          <View className="flex-row  gap-3">
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/(recipeDetails)/editrecipe/[id]",
                  params: { id },
                });
              }}
              className="bg-sage-light rounded-full px-3 py-2 flex items-center justify-center"
            >
              <Text className="font-body text-primary-dark">✎ Edit</Text>
            </Pressable>

            <Pressable className="bg-red-300 rounded-full flex items-center  px-3 py-3">
              <Image
                source={image.deleteOption}
                style={{
                  width: 20,
                  height: 20,
                }}
                resizeMode="contain"
              />
            </Pressable>
          </View>
        </View>

        <View className="flex flex-row mt-4 gap-4">
          <View className="flex flex-row gap-3 py-2 px-4 rounded-full bg-sage-light ">
            <Image
              source={image.catergotyIcon}
              style={{
                width: 24,
                height: 24,
              }}
              resizeMode="contain"
            />

            <Text className="font-body text-primary-dark  text-center">
              {recipe?.category}
            </Text>
          </View>

          <View className="flex flex-row gap-3 py-2 px-4 rounded-full bg-sage-light ">
            <Image
              source={image.time}
              style={{
                width: 24,
                height: 24,
              }}
              resizeMode="contain"
            />

            <Text className="font-body text-primary-dark  text-center">
              {recipe?.time}
            </Text>
          </View>
        </View>
        <View className="p-4 mt-4 border border-sage-light rounded-3xl">
          <Text className="text-primary mb-4 font-heading text-xl">
            Ingredients
          </Text>

          {recipe?.ingredients.map((item) => (
            <View
              key={item.id}
              className="flex flex-row justify-between items-center mb-3  border-b border-sage-light"
            >
              <Text className="text-foreground text-lg font-body capitalize">
                {item.name}
              </Text>
              <Text className="text-foreground font-body capitalize">
                {item.quantity}
              </Text>
            </View>
          ))}
        </View>

        <View className="p-4 mt-4 mb-10 border border-sage-light rounded-3xl ">
          <Text className="text-primary mb-4 font-heading text-xl">
            Instructions
          </Text>

          {recipe?.Preparation.map((item) => (
            <View
              key={item.id}
              className="flex flex-row gap-4 items-center mb-3 border-b border-sage-light"
            >
              <View className="bg-primary h-10 w-10 rounded-full items-center justify-center">
                <Text className="text-background font-button text-lg">
                  {item.id}
                </Text>
              </View>

              <Text className="text-foreground text-lg font-body w-[90%] ">
                {item.name}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetails;
