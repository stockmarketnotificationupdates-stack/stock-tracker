'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-100 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-between text-sm text-slate-700">
        <p>
          We use cookies on this site to enhance site navigation and analyze site
          usage.{" "}
          <Link href="/privacy" className="underline">
            Read policy
          </Link>
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setVisible(false)}
            className="text-slate-600 hover:text-slate-900"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            Allow cookies
          </button>
        </div>
      </div>
    </div>
  );
}
