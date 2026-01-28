import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center">

      {/* Orbital particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orbital orbital-1" />
        <div className="orbital orbital-2" />
        <div className="orbital orbital-3" />
      </div>

      {/* Floating auth card */}
      <section className="auth-card group relative z-10">
        <Link
          href="/"
          className="absolute -top-12 left-1/2 -translate-x-1/2 text-blue-600 font-semibold tracking-wide"
        >
          BlueBase
        </Link>

        {children}

        <footer className="mt-8 text-center text-xs text-slate-400">
          <div className="flex justify-center gap-4 mb-2">
            <Link href="#">Help</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
          </div>
          © 2026 BlueBase
        </footer>
      </section>
    </main>
  );
}
