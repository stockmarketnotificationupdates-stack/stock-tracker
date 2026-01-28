"use client";

import { updatePassword } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { useState } from "react";

export default function ChangePasswordModal() {
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  if (!auth.currentUser || auth.currentUser.providerData[0]?.providerId !== "password") {
    return null;
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className="underline text-sm">
        Change password
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg w-full max-w-sm space-y-4">
            <h2 className="text-lg font-semibold">Change Password</h2>

            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />

            <div className="flex justify-end gap-2">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button
                className="bg-primary text-primary-foreground px-4 py-2 rounded"
                onClick={async () => {
                  await updatePassword(auth.currentUser!, password);
                  alert("Password updated");
                  setOpen(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
