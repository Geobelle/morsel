import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Recipe = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <Text className="text-primary-dark font-heading text-3xl">Recipe</Text>
      </View>
    </SafeAreaView>
  );
};

export default Recipe;
