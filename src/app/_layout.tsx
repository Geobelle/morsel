import "../../global.css";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";

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

  return <Stack />;
}
