import type { ReactNode } from "react";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function AuthLayout({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="flex-1"
          contentContainerClassName="flex-grow justify-center px-6 py-8"
          keyboardShouldPersistTaps="handled"
        >
          <View className="mb-8">
            <View className=" flex-row items-center">
              <Image
                source={require("../../../assets/images/icon.png")}
                accessibilityLabel="Illustration of fresh groceries in a tote bag"
                resizeMode="contain"
                className="h-40 w-40"
              />
            </View>
            <Text className="mb-2 font-body text-sm text-primary-dark">
              {eyebrow}
            </Text>
            <Text className="font-heading text-4xl leading-[44px] text-foreground">
              {title}
            </Text>
            <Text className="mt-3 font-body text-base leading-6 text-foreground">
              {description}
            </Text>
          </View>
          {children}
          <Text className="mt-10 text-center font-body text-xs leading-5 text-foreground opacity-70">
            Your email is used to secure your account and help you sign in.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export function AuthField({
  label,
  error,
  secureTextEntry,
  ...inputProps
}: React.ComponentProps<typeof TextInput> & {
  label: string;
  error?: string;
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View className="mb-4">
      <Text className="mb-2 font-button text-sm text-primary-dark">
        {label}
      </Text>
      <View
        className={`min-h-14 flex-row items-center rounded-2xl border bg-white ${error ? "border-red-400" : "border-sage-light"}`}
      >
        <TextInput
          {...inputProps}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          className="min-h-14 flex-1 px-4 font-body text-base text-foreground"
          placeholderTextColor="#9A928D"
          accessibilityLabel={label}
          autoCorrect={false}
        />
        {secureTextEntry ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={
              isPasswordVisible ? "Hide password" : "Show password"
            }
            onPress={() => setIsPasswordVisible((visible) => !visible)}
            hitSlop={10}
            className="px-4 py-3"
          >
            <Text className="font-button text-sm text-primary-dark">
              {isPasswordVisible ? "Hide" : "Show"}
            </Text>
          </Pressable>
        ) : null}
      </View>
      {error ? (
        <Text
          accessibilityRole="alert"
          className="mt-1 font-body text-sm text-red-700"
        >
          {error}
        </Text>
      ) : null}
    </View>
  );
}

export function AuthButton({
  title,
  onPress,
  loading,
  disabled,
  secondary = false,
}: {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  secondary?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{
        disabled: Boolean(disabled || loading),
        busy: loading,
      }}
      disabled={disabled || loading}
      onPress={onPress}
      className={`min-h-14 items-center justify-center rounded-full px-5 ${secondary ? "border border-primary bg-background" : "bg-primary-dark"} ${disabled || loading ? "opacity-60" : ""}`}
    >
      <Text
        className={`font-button text-base ${secondary ? "text-primary-dark" : "text-background"}`}
      >
        {loading ? "Please wait…" : title}
      </Text>
    </Pressable>
  );
}

export function AuthLink({
  label,
  action,
}: {
  label: string;
  action: () => void;
}) {
  return (
    <Pressable accessibilityRole="button" onPress={action} hitSlop={8}>
      <Text className="font-button text-sm text-primary-dark">{label}</Text>
    </Pressable>
  );
}

export function AuthError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <Text
      accessibilityRole="alert"
      className="mb-4 rounded-2xl bg-cream px-4 py-3 font-body text-sm leading-5 text-foreground"
    >
      {message}
    </Text>
  );
}
