"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

type User = {
  uid: string;
  email: string | null;
  displayName?: string | null;
};

export default function UserDropdown({
  user,
}: {
  user: User | null;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/sign-in");
    router.refresh();
  };

  if (!user) return null;

  return (
    <div className="flex items-center gap-4 text-sm">
      <Link
        href="/settings"
        className="text-slate-500 hover:text-slate-700"
      >
        Settings
      </Link>

      <button
        onClick={handleLogout}
        className="text-red-400 hover:text-red-500 transition"
      >
        Logout
      </button>
    </div>
  );
}
