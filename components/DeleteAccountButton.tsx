"use client";

import { auth } from "@/lib/firebase/client";
import { deleteUser } from "firebase/auth";

export default function DeleteAccountButton() {
  return (
    <button
      onClick={async () => {
        const ok = confirm(
          "This will permanently delete your account. This cannot be undone."
        );
        if (!ok || !auth.currentUser) return;

        try {
          await deleteUser(auth.currentUser);
          alert("Account deleted");
          window.location.href = "/";
        } catch (err) {
          alert("Please re-login and try again.");
        }
      }}
      className="text-red-600 underline text-sm"
    >
      Delete account
    </button>
  );
}
