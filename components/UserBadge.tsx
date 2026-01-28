"use client";

import { useEffect, useRef, useState } from "react";
import { auth } from "@/lib/firebase/client";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function UserBadge() {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  // close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!user) return null;

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-muted transition"
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt=""
            className="h-8 w-8 rounded-full"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
            {user.displayName?.[0] ?? "U"}
          </div>
        )}

        <span className="text-sm font-medium whitespace-nowrap">
          {user.displayName ?? "Account"}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl border bg-background shadow-lg">
          <button
            onClick={() => signOut(auth)}
            className="w-full text-left px-4 py-2 text-sm hover:bg-muted rounded-xl"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
