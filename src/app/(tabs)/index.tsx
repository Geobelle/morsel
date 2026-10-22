import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tabindex = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <Text className="text-primary-dark font-heading text-3xl">HOME</Text>
      </View>
    </SafeAreaView>
  );
};

export default Tabindex;
