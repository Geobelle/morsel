import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WhatToCook = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <Text className="text-primary-dark font-heading text-3xl">
          What to Cook
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WhatToCook;
