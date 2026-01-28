"use client";

import { sendEmailVerification } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { useEffect, useState } from "react";

export default function EmailVerificationBanner() {
  const [visible, setVisible] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    if (user && !user.emailVerified) {
      setVisible(true);
    }
  }, [user]);

  if (!visible || !user) return null;

  return (
    <div className="bg-yellow-100 text-yellow-900 px-4 py-3 text-sm flex items-center justify-between">
      <span>
        Your email is not verified. Please verify to secure your account.
      </span>
      <button
        onClick={async () => {
          await sendEmailVerification(user);
          alert("Verification email sent!");
        }}
        className="underline font-medium"
      >
        Resend email
      </button>
    </div>
  );
}
