import { useSignIn } from "@clerk/expo";
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

type VerificationMethod = "email_code" | "phone_code" | "totp" | "backup_code";

export default function SignInScreen() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [verificationMethod, setVerificationMethod] =
    useState<VerificationMethod>("email_code");
  const [formError, setFormError] = useState("");
  const busy = fetchStatus === "fetching";
  const needsTrust = signIn.status === "needs_client_trust";
  const needsSecondFactor = signIn.status === "needs_second_factor";
  const needsVerification = needsTrust || needsSecondFactor;

  const completeSignIn = async () => {
    await signIn.finalize();
    router.replace("/(tabs)" as Href);
  };

  const submit = async () => {
    setFormError("");
    const normalizedEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setFormError("Enter a valid email address.");
      return;
    }
    if (!password) {
      setFormError("Enter your password to continue.");
      return;
    }
    try {
      const { error } = await signIn.password({
        emailAddress: normalizedEmail,
        password,
      });
      if (error) {
        setFormError(error.message || "We couldn’t sign you in. Check your details and try again.");
        return;
      }
      if (signIn.status === "complete") {
        await completeSignIn();
      } else if (
        signIn.status === "needs_client_trust" ||
        signIn.status === "needs_second_factor"
      ) {
        const available = signIn.supportedSecondFactors.map((factor) => factor.strategy);
        const method: VerificationMethod | undefined = available.includes("email_code")
          ? "email_code"
          : available.includes("phone_code")
            ? "phone_code"
            : available.includes("totp")
              ? "totp"
              : available.includes("backup_code")
                ? "backup_code"
                : undefined;
        if (!method) {
          setFormError("This account needs a verification method that isn’t available on this device.");
          return;
        }
        setVerificationMethod(method);
        if (method === "email_code" || method === "phone_code") {
          const result = method === "email_code"
            ? await signIn.mfa.sendEmailCode()
            : await signIn.mfa.sendPhoneCode();
          if (result.error) {
            setFormError(result.error.message || "We couldn’t send your sign-in code.");
          }
        }
      } else {
        setFormError("We need a little more information to finish signing you in.");
      }
    } catch {
      setFormError("We couldn’t complete that just now. Check your connection and try again.");
    }
  };

  const verifyDevice = async () => {
    setFormError("");
    if (verificationMethod === "backup_code" ? !code.trim() : !/^\d{6}$/.test(code.trim())) {
      setFormError(verificationMethod === "backup_code" ? "Enter a backup code." : "Enter the 6-digit verification code.");
      return;
    }
    try {
      const result =
        verificationMethod === "email_code"
          ? await signIn.mfa.verifyEmailCode({ code: code.trim() })
          : verificationMethod === "phone_code"
            ? await signIn.mfa.verifyPhoneCode({ code: code.trim() })
            : verificationMethod === "totp"
              ? await signIn.mfa.verifyTOTP({ code: code.trim() })
              : await signIn.mfa.verifyBackupCode({ code: code.trim() });
      const { error } = result;
      if (error) {
        setFormError(error.message || "That code didn’t work. Check it and try again.");
        return;
      }
      if (signIn.status === "complete") await completeSignIn();
      else setFormError("We couldn’t verify this device. Try again or restart sign-in.");
    } catch {
      setFormError("We couldn’t verify that code just now. Please try again.");
    }
  };

  const resendCode = async () => {
    setFormError("");
    try {
      const { error } =
        verificationMethod === "phone_code"
          ? await signIn.mfa.sendPhoneCode()
          : await signIn.mfa.sendEmailCode();
      if (error) setFormError(error.message || "We couldn’t send a new code.");
    } catch {
      setFormError("We couldn’t send a new code. Please try again shortly.");
    }
  };

  return (
    <AuthLayout
      eyebrow={needsVerification ? "A quick security check" : "Welcome back"}
      title={needsVerification ? "Confirm it’s you." : "Let’s get cooking."}
      description={
        needsVerification
          ? verificationMethod === "totp"
            ? "Enter the current code from your authenticator app."
            : verificationMethod === "backup_code"
              ? "Enter one of the backup codes you saved when setting up your account."
              : `Enter the 6-digit code we sent to ${email.trim()}.`
          : "Sign in to continue to your Morsel kitchen."
      }
    >
      <View className="gap-1">
        <AuthError
          message={formError || errors.global?.[0]?.message || undefined}
        />
        {needsVerification ? (
          <>
            <AuthField
              label={verificationMethod === "backup_code" ? "Backup code" : "Verification code"}
              placeholder={verificationMethod === "backup_code" ? "Enter backup code" : "000000"}
              value={code}
              onChangeText={(value) => setCode(value.replace(/\D/g, "").slice(0, 6))}
              keyboardType={verificationMethod === "backup_code" ? "default" : "number-pad"}
              textContentType={verificationMethod === "email_code" || verificationMethod === "phone_code" ? "oneTimeCode" : "none"}
              autoComplete={verificationMethod === "email_code" || verificationMethod === "phone_code" ? "sms-otp" : "off"}
              maxLength={verificationMethod === "backup_code" ? 32 : 6}
              returnKeyType="done"
              onSubmitEditing={verifyDevice}
              error={errors.fields.code?.message ?? undefined}
            />
            {needsTrust ? (
              <Text className="mb-4 font-body text-sm leading-5 text-foreground">
                This helps keep your recipes and account safe on a new device.
              </Text>
            ) : null}
            <AuthButton title="Verify and continue" onPress={verifyDevice} loading={busy} />
            {verificationMethod === "email_code" || verificationMethod === "phone_code" ? (
              <View className="mt-5 flex-row justify-center gap-1">
                <Text className="font-body text-sm text-foreground">Didn’t get a code?</Text>
                <AuthLink label="Send a new one" action={resendCode} />
              </View>
            ) : null}
            <View className="mt-5 items-center">
              <AuthLink label="Back to sign in" action={() => signIn.reset()} />
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
              error={errors.fields.identifier?.message ?? undefined}
            />
            <AuthField
              label="Password"
              placeholder="Your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="current-password"
              textContentType="password"
              returnKeyType="done"
              onSubmitEditing={submit}
              error={errors.fields.password?.message ?? undefined}
            />
            <View className="mb-5 items-end">
              <AuthLink
                label="Forgot password?"
                action={() =>
                  router.push(
                    {
                      pathname: "/(auth)/forgot-password",
                      params: { email: email.trim() },
                    } as unknown as Href,
                  )
                }
              />
            </View>
            <AuthButton title="Sign in" onPress={submit} loading={busy} />
            <View className="mt-6 flex-row justify-center gap-1">
              <Text className="font-body text-sm text-foreground">New to Morsel?</Text>
              <AuthLink label="Create an account" action={() => router.push("/(auth)/sign-up" as Href)} />
            </View>
          </>
        )}
      </View>
    </AuthLayout>
  );
}
