'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";
import { motion } from "framer-motion";

export default function SignIn() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/stocks");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {/* FLOATING CARD */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl p-8 shadow-xl shadow-blue-500/10"
      >
        {/* Header */}
        <h1 className="text-2xl font-semibold text-slate-900">
          Welcome back
        </h1>
        <p className="text-sm text-slate-500 mb-6">
          Sign in to your BlueBase account
        </p>

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-5">
          <InputField
            name="email"
            label="Email"
            placeholder="you@bluebase.io"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <InputField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputClassName="pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[42px] text-xs text-blue-600 hover:underline"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="accent-blue-500"
            />
            Remember me
          </label>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-500"
            >
              {error}
            </motion.p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          <FooterLink
            text="Don't have an account?"
            linkText="Create one"
            href="/sign-up"
          />
        </form>
      </motion.div>
    </motion.div>
  );
}
