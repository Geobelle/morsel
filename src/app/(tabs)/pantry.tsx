import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Pantry = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <Text className="text-primary-dark font-heading text-3xl">Pantry</Text>
      </View>
    </SafeAreaView>
  );
};

export default Pantry;
