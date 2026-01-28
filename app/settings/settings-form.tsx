"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase/client";
import {
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import AccentColorPicker from "@/components/AccentColorPicker";
import DeleteAccountButton from "@/components/DeleteAccountButton";
import CountrySelectField from "@/components/forms/CountrySelectField";
import { CheckCircle, Mail } from "lucide-react";

export default function SettingsForm({
  user,
  profile,
  onSave,
}: {
  user: any;
  profile: any;
  onSave: (data: any) => Promise<void>;
}) {
  const [username, setUsername] = useState(profile?.username ?? "");
  const [country, setCountry] = useState(profile?.country ?? "");
  const [phone, setPhone] = useState(profile?.phone ?? "");

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [sendingReset, setSendingReset] = useState(false);
  const [sendingVerify, setSendingVerify] = useState(false);

  async function handleSave() {
    setSaving(true);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);

    await onSave({ username, country, phone });
    setSaving(false);
  }

  async function handlePasswordReset() {
    setSendingReset(true);
    await sendPasswordResetEmail(auth, user.email);
    setSendingReset(false);
    setShowPasswordModal(false);
  }

  async function handleVerifyEmail() {
    setSendingVerify(true);
    await sendEmailVerification(user);
    setSendingVerify(false);
  }

  return (
    <div className="space-y-10">
      {!user.emailVerified && (
        <div className="flex items-center justify-between rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4">
          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} />
            Email not verified
          </div>
          <button
            onClick={handleVerifyEmail}
            disabled={sendingVerify}
            className="text-sm underline"
          >
            {sendingVerify ? "Sending…" : "Resend"}
          </button>
        </div>
      )}

      <section className="bg-card border rounded-xl p-6 space-y-4">
        <h2 className="font-medium">Profile</h2>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          disabled
          value={user.email}
          className="w-full border rounded-lg px-4 py-2 bg-muted"
        />
      </section>

      <section className="bg-card border rounded-xl p-6 space-y-4">
        <h2 className="font-medium">Location</h2>

        <CountrySelectField
          value={country}
          onChange={setCountry}
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone (optional)"
          className="w-full border rounded-lg px-4 py-2"
        />
      </section>

      <section className="bg-card border rounded-xl p-6 space-y-4">
        <h2 className="font-medium">Account</h2>
        <button
          onClick={() => setShowPasswordModal(true)}
          className="text-sm text-blue-600 hover:underline"
        >
          Change password
        </button>
      </section>

      <section className="bg-card border rounded-xl p-6 space-y-4">
        <h2 className="font-medium">Appearance</h2>
        <AccentColorPicker />
      </section>

      <div className="flex justify-between items-center">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground"
        >
          {saving ? "Saving…" : "Save changes"}
        </button>

        {saved && (
          <div className="flex items-center gap-1 text-green-500 text-sm">
            <CheckCircle size={16} />
            Saved
          </div>
        )}
      </div>

      <section className="border border-destructive/40 rounded-xl p-6 space-y-2">
        <h2 className="font-medium text-destructive">
          Danger Zone
        </h2>
        <DeleteAccountButton />
      </section>

      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-sm rounded-xl bg-background p-6 space-y-4">
            <h3 className="text-lg font-semibold">
              Reset password
            </h3>

            <p className="text-sm text-muted-foreground">
              We’ll send a password reset link to:
            </p>

            <p className="text-sm font-medium">
              {user.email}
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="text-sm text-muted-foreground"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordReset}
                disabled={sendingReset}
                className="rounded bg-primary px-4 py-2 text-primary-foreground text-sm"
              >
                {sendingReset ? "Sending…" : "Send reset"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
