import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const shoppingList = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <Text>shoppingList</Text>
      </View>
    </SafeAreaView>
  );
};

export default shoppingList;
