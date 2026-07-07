"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/layout";
import { Button, Field, Input } from "@/components/ui";
import { useLoginMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setCredentials } from "@/redux/features/auth/authSlice";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials(res));
      router.push("/");
    } catch (err) {
      const apiError = err as { status?: number; data?: { message?: string } };
      setError(
        apiError.data?.message ?? "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <AuthLayout
      title="Sign in to DeepScout"
      subtitle="Plan, search & write cited research"
      footer={
        <>
          No account?{" "}
          <Link href="/signup" className="font-medium text-link hover:underline">
            Sign up
          </Link>
        </>
      }
    >
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-4"
        noValidate
      >
        <Input
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Field
          label="Password"
          htmlFor="password"
          action={
            <Link
              href="/forgot-password"
              className="text-xs font-medium text-link hover:underline"
            >
              Forgot?
            </Link>
          }
        >
          <Input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>

        {error && (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}

        <Button type="submit" loading={isLoading} className="mt-1 w-full">
          {isLoading ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    </AuthLayout>
  );
}
