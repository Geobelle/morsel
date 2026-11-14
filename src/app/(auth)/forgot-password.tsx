import { useSignIn } from "@clerk/expo";
import { router, useLocalSearchParams, type Href } from "expo-router";
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

export default function ForgotPasswordScreen() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const params = useLocalSearchParams<{ email?: string }>();
  const [email, setEmail] = useState(params.email ?? "");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [formError, setFormError] = useState("");
  const busy = fetchStatus === "fetching";
  const needsNewPassword = signIn.status === "needs_new_password";

  const sendCode = async () => {
    setFormError("");
    const normalizedEmail = email.trim().toLowerCase();
    if (!emailPattern.test(normalizedEmail)) {
      setFormError("Enter the email address linked to your account.");
      return;
    }
    try {
      const { error: createError } = await signIn.create({
        identifier: normalizedEmail,
      });
      if (createError) {
        setFormError(createError.message || "We couldn’t start the reset. Check your email and try again.");
        return;
      }
      const { error } = await signIn.resetPasswordEmailCode.sendCode();
      if (error) {
        setFormError(error.message || "We couldn’t send a reset code. Try again shortly.");
        return;
      }
      setCodeSent(true);
    } catch {
      setFormError("We couldn’t send a reset code just now. Check your connection and try again.");
    }
  };

  const verifyCode = async () => {
    setFormError("");
    if (!/^\d{6}$/.test(code.trim())) {
      setFormError("Enter the 6-digit code from your email.");
      return;
    }
    try {
      const { error } = await signIn.resetPasswordEmailCode.verifyCode({
        code: code.trim(),
      });
      if (error) {
        setFormError(error.message || "That code didn’t work. Check it and try again.");
      } else if (signIn.status !== "needs_new_password") {
        setFormError("We couldn’t verify that code. Please request a new one.");
      }
    } catch {
      setFormError("We couldn’t verify that code just now. Please try again.");
    }
  };

  const updatePassword = async () => {
    setFormError("");
    if (password.length < 8) {
      setFormError("Use at least 8 characters for your new password.");
      return;
    }
    if (password !== confirmPassword) {
      setFormError("Your passwords don’t match yet.");
      return;
    }
    try {
      const { error } = await signIn.resetPasswordEmailCode.submitPassword({
        password,
        signOutOfOtherSessions: true,
      });
      if (error) {
        setFormError(error.message || "We couldn’t update your password. Try another one.");
        return;
      }
      if (signIn.status === "complete") {
        await signIn.finalize();
        router.replace("/(tabs)" as Href);
      } else if (signIn.status === "needs_second_factor") {
        setFormError("This account needs an additional sign-in method. Return to sign-in for help.");
      }
    } catch {
      setFormError("We couldn’t update your password just now. Please try again.");
    }
  };

  const resendCode = async () => {
    setFormError("");
    try {
      const { error } = await signIn.resetPasswordEmailCode.sendCode();
      if (error) setFormError(error.message || "We couldn’t send another code.");
    } catch {
      setFormError("We couldn’t send another code. Please try again shortly.");
    }
  };

  return (
    <AuthLayout
      eyebrow="Account recovery"
      title={needsNewPassword ? "Choose a new password." : codeSent ? "Check your inbox." : "Forgot your password?"}
      description={
        needsNewPassword
          ? "Choose a new password you haven’t used here before."
          : codeSent
            ? `We sent a 6-digit reset code to ${email.trim()}.`
            : "We’ll email you a secure code so you can get back to your kitchen."
      }
    >
      <View className="gap-1">
        <AuthError message={formError || errors.global?.[0]?.message || undefined} />
        {!codeSent ? (
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
              returnKeyType="done"
              onSubmitEditing={sendCode}
              error={errors.fields.identifier?.message ?? undefined}
            />
            <AuthButton title="Send reset code" onPress={sendCode} loading={busy} />
          </>
        ) : needsNewPassword ? (
          <>
            <AuthField
              label="New password"
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
              label="Confirm new password"
              placeholder="Enter your new password again"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="new-password"
              textContentType="newPassword"
              returnKeyType="done"
              onSubmitEditing={updatePassword}
            />
            <AuthButton title="Save new password" onPress={updatePassword} loading={busy} />
          </>
        ) : (
          <>
            <AuthField
              label="6-digit reset code"
              placeholder="000000"
              value={code}
              onChangeText={(value) => setCode(value.replace(/\D/g, "").slice(0, 6))}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoComplete="sms-otp"
              maxLength={6}
              returnKeyType="done"
              onSubmitEditing={verifyCode}
              error={errors.fields.code?.message ?? undefined}
            />
            <Text className="mb-4 font-body text-sm leading-5 text-foreground">
              If it’s not there in a minute, check your spam folder.
            </Text>
            <AuthButton title="Continue" onPress={verifyCode} loading={busy} />
            <View className="mt-5 items-center">
              <AuthLink label="Send a new code" action={resendCode} />
            </View>
          </>
        )}
        <View className="mt-6 items-center">
          <AuthLink label="Back to sign in" action={() => router.replace("/(auth)/sign-in" as Href)} />
        </View>
      </View>
    </AuthLayout>
  );
}
