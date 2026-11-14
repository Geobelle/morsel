import { useAuth, useSignUp } from "@clerk/expo";
import { router, type Href } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import {
  AuthButton,
  AuthError,
  AuthField,
  AuthLayout,
  AuthLink,
} from "../../components/auth/AuthLayout";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignUpScreen() {
  const { signUp, errors, fetchStatus } = useSignUp();
  const { isSignedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [formError, setFormError] = useState("");
  const [sent, setSent] = useState(false);
  const busy = fetchStatus === "fetching";

  const beginSignUp = async () => {
    setFormError("");
    const normalizedEmail = email.trim().toLowerCase();
    if (!emailPattern.test(normalizedEmail)) {
      setFormError("Enter a valid email address to continue.");
      return;
    }
    if (password.length < 8) {
      setFormError("Use at least 8 characters for your password.");
      return;
    }
    if (password !== confirmPassword) {
      setFormError("Your passwords don’t match yet.");
      return;
    }

    try {
      const { error } = await signUp.password({
        emailAddress: normalizedEmail,
        password,
      });
      if (error) {
        setFormError(error.message || "We couldn’t create your account. Try again.");
        return;
      }
      const { error: verificationError } =
        await signUp.verifications.sendEmailCode();
      if (verificationError) {
        setFormError(
          verificationError.message || "We couldn’t send your code. Try again.",
        );
        return;
      }
      setIsVerifying(true);
      setSent(true);
    } catch {
      setFormError("We couldn’t complete that just now. Check your connection and try again.");
    }
  };

  const verifyEmail = async () => {
    setFormError("");
    if (!/^\d{6}$/.test(code.trim())) {
      setFormError("Enter the 6-digit code from your email.");
      return;
    }
    try {
      const { error } = await signUp.verifications.verifyEmailCode({
        code: code.trim(),
      });
      if (error) {
        setFormError(error.message || "That code didn’t work. Check it and try again.");
        return;
      }
      if (signUp.status === "complete") {
        await signUp.finalize();
        router.replace("/(tabs)" as Href);
      } else {
        setFormError("There are a few more details needed to finish your account.");
      }
    } catch {
      setFormError("We couldn’t verify that code just now. Please try again.");
    }
  };

  const resendCode = async () => {
    setFormError("");
    try {
      const { error } = await signUp.verifications.sendEmailCode();
      if (error) setFormError(error.message || "We couldn’t send a new code.");
      else setSent(true);
    } catch {
      setFormError("We couldn’t send a new code. Please try again shortly.");
    }
  };

  if (isSignedIn) return null;

  return (
    <AuthLayout
      eyebrow={isVerifying ? "One last step" : "A little more joy, every day"}
      title={isVerifying ? "Check your inbox" : "Make room for good food."}
      description={
        isVerifying
          ? `We sent a 6-digit code to ${email.trim()}. Enter it below to confirm your email.`
          : "Create your Morsel account and get started with recipes, meal planning, and a happier kitchen."
      }
    >
      <View className="gap-1">
        <AuthError message={formError} />
        {isVerifying ? (
          <>
            <AuthField
              label="Email verification code"
              placeholder="000000"
              value={code}
              onChangeText={(value) => setCode(value.replace(/\D/g, "").slice(0, 6))}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoComplete="sms-otp"
              maxLength={6}
              returnKeyType="done"
              onSubmitEditing={verifyEmail}
              error={errors.fields.code?.message ?? undefined}
            />
            {sent ? (
              <Text className="mb-4 font-body text-sm leading-5 text-foreground">
                It can take a minute to arrive. Check your spam folder if you don’t see it.
              </Text>
            ) : null}
            <AuthButton title="Verify email" onPress={verifyEmail} loading={busy} />
            <View className="mt-5 flex-row justify-center gap-1">
              <Text className="font-body text-sm text-foreground">No code yet?</Text>
              <AuthLink label="Send a new one" action={resendCode} />
            </View>
          </>
        ) : (
          <>
            <AuthField
              label="Email address"
              placeholder="you@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              textContentType="emailAddress"
              returnKeyType="next"
              error={errors.fields.emailAddress?.message ?? undefined}
            />
            <AuthField
              label="Password"
              placeholder="At least 8 characters"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="new-password"
              textContentType="newPassword"
              returnKeyType="next"
              error={errors.fields.password?.message ?? undefined}
            />
            <AuthField
              label="Confirm password"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="new-password"
              textContentType="newPassword"
              returnKeyType="done"
              onSubmitEditing={beginSignUp}
            />
            <Text className="mb-5 font-body text-xs leading-5 text-foreground opacity-75">
              We’ll use your email to confirm your account and help keep it secure.
            </Text>
            <AuthButton title="Create my account" onPress={beginSignUp} loading={busy} />
            <View className="mt-6 flex-row justify-center gap-1">
              <Text className="font-body text-sm text-foreground">Already have an account?</Text>
              <AuthLink label="Sign in" action={() => router.push("/(auth)/sign-in" as Href)} />
            </View>
          </>
        )}
      </View>
      <View nativeID="clerk-captcha" />
    </AuthLayout>
  );
}
