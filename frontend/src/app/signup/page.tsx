"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/layout";
import { Button, Input } from "@/components/ui";
import { useRegisterMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setCredentials } from "@/redux/features/auth/authSlice";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!name || !email || !password) {
      setError("Please fill in every field.");
      return;
    }

    try {
      const res = await register({ name, email, password }).unwrap();
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
      title="Create your account"
      subtitle="Start researching in minutes"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/signin" className="font-medium text-link hover:underline">
            Sign in
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
          label="Name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <Input
          label="Password"
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}

        <Button type="submit" loading={isLoading} className="mt-1 w-full">
          {isLoading ? "Creating account…" : "Create account"}
        </Button>
      </form>
    </AuthLayout>
  );
}
