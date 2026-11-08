import "../../global.css";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Fredoka-Medium": require("../../assets/fonts/Fredoka-Medium.ttf"),
    "Fredoka-SemiBold": require("../../assets/fonts/Fredoka-SemiBold.ttf"),
    "Nunito-Regular": require("../../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("../../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Bold": require("../../assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
