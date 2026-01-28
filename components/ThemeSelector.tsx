"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export default function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const t = localStorage.getItem("theme") as Theme | null;
    if (t) setTheme(t);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    if (theme !== "system") root.classList.add(theme);
  }, [theme]);

  return (
    <section className="rounded-xl border p-6 space-y-4">
      <div className="font-medium">Appearance</div>
      <div className="flex gap-2">
        <Btn label="Light" icon={<Sun size={16} />} active={theme === "light"} onClick={() => setTheme("light")} />
        <Btn label="Dark" icon={<Moon size={16} />} active={theme === "dark"} onClick={() => setTheme("dark")} />
        <Btn label="System" icon={<Monitor size={16} />} active={theme === "system"} onClick={() => setTheme("system")} />
      </div>
    </section>
  );
}

function Btn({ label, icon, active, onClick }: any) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm ${
        active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
      }`}
    >
      {icon}
      {label}
    </motion.button>
  );
}
