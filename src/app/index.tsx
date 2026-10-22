import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView className="flex-1 p-5 ">
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="font-heading text-[28px] text-primary-dark">
          Welcome to Morsel 🍓
        </Text>
        <Text className="font-body text-base text-foreground">
          Your cozy little kitchen companion.
        </Text>
      </View>
    </SafeAreaView>
  );
}
