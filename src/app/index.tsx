import { useAuth } from "@clerk/expo";
import { Redirect, type Href } from "expo-router";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) return null;
  return (
    <Redirect href={(isSignedIn ? "/(tabs)" : "/(auth)/sign-in") as Href} />
  );
}
