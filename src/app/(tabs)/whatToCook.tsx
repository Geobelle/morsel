import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExactMatches from "../../../components/ExactMatches";
import PartialMatches from "../../../components/PartialMatches";
import WhatToCookCategories from "../../../components/WhatToCookCategories";
import {
  exactRecipe,
  pantryItems,
  partialRecipe,
} from "../../../constants/data";
import { icons } from "../../../constants/icons";
import { tabicons } from "../../../constants/tabIcons";

const WhatToCook = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <Text className="text-primary-dark font-heading text-3xl">
          What to Cook
        </Text>

        <View className="flex justify-center bg-sage-light p-5 rounded-2xl mt-6 flex-row gap-3">
          <Image
            source={tabicons.pantryUnfilled}
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode="contain"
          />
          <View>
            <Text className="font-ingredient text-lg text-primary-dark mb-4">
              Based on your pantry
            </Text>

            <Text className="font-ingredients text-lg text-primary-dark mb-1">
              You have {pantryItems.length} ingredients
            </Text>
            <Text className="text-sm font-body text-primary-dark">
              checkout your recipes that you can make with what you have.
            </Text>
          </View>
        </View>

        <WhatToCookCategories />

        <View className="mt-4 mb-2 flex flex-row justify-between">
          <Text className="text-primary-dark font-heading text-xl">
            Exact Matches({exactRecipe.length})
          </Text>
          <Pressable className="flex flex-row gap-1 items-center">
            <Text className="text-primary-dark font-ingredient text-lg">
              See all
            </Text>
            <Image
              source={icons.forward}
              style={{
                width: 16,
                height: 16,
              }}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        <FlatList
          data={exactRecipe.slice(0, 2)}
          renderItem={({ item }) => <ExactMatches {...item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator
          ListEmptyComponent={
            <Text className="home-empty-state">No recipes yet</Text>
          }
        />

        <View className="mt-4 mb-2 flex flex-row justify-between">
          <Text className="text-primary-dark font-heading text-xl">
            Partial Matches({partialRecipe.length})
          </Text>
          <Pressable className="flex flex-row gap-1 items-center">
            <Text className="text-primary-dark font-ingredient text-lg">
              See all
            </Text>
            <Image
              source={icons.forward}
              style={{
                width: 16,
                height: 16,
              }}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        <FlatList
          data={partialRecipe.slice(0, 2)}
          renderItem={({ item }) => <PartialMatches {...item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator
          ListEmptyComponent={
            <Text className="home-empty-state">No recipes yet</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default WhatToCook;
