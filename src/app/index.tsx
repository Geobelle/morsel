import { useAuth } from "@clerk/expo";
import { LinearGradient } from "expo-linear-gradient";
import { router, type Href } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMinimumTimeElapsed(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!minimumTimeElapsed || !isLoaded) return;

    router.replace((isSignedIn ? "/(tabs)" : "/(auth)/sign-in") as Href);
  }, [isLoaded, isSignedIn, minimumTimeElapsed]);

  return (
    <LinearGradient
      colors={["#8FB89A", "#EBEFE3", "#FCF4F1", "#FBFCFB"]}
      locations={[0, 0.34, 0.68, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.logo}
        resizeMode="contain"
        accessibilityLabel="Morsel"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 240,
    height: 160,
    shadowColor: "#493F38",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 3,
  },
});
