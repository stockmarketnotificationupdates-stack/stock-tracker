"use server";

import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebase-admin";

export async function createSession(idToken: string) {
  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  const sessionCookie = await adminAuth.createSessionCookie(idToken, {
    expiresIn,
  });

  cookies().set("__session", sessionCookie, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: expiresIn / 1000,
    path: "/",
  });
}

export async function logout() {
  cookies().delete("__session");
}
