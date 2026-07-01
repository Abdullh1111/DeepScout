"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { AuthLayout } from "@/components/layout";
import { Button, Divider, Input } from "@/components/ui";
import { GoogleIcon } from "@/components/icons";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!name || !email || !password) {
      setError("Please fill in every field.");
      return;
    }

    setSubmitting(true);
    try {
      // TODO: wire up to the auth endpoint
      await new Promise((resolve) => setTimeout(resolve, 800));
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
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
      <Button
        variant="secondary"
        className="mt-8 w-full"
        leftIcon={<GoogleIcon />}
      >
        Continue with Google
      </Button>

      <Divider className="my-5">or</Divider>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
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

        <Button type="submit" loading={submitting} className="mt-1 w-full">
          {submitting ? "Creating account…" : "Create account"}
        </Button>
      </form>
    </AuthLayout>
  );
}
