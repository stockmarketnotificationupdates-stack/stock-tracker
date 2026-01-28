"use client";

const ACCENTS = {
  blue: "oklch(0.58 0.18 255)",
  green: "oklch(0.65 0.15 145)",
  purple: "oklch(0.6 0.2 295)",
  red: "oklch(0.6 0.22 25)",
};

export default function AccentColorPicker() {
  const setAccent = (value: string) => {
    document.documentElement.style.setProperty("--primary", value);
    document.documentElement.style.setProperty("--ring", value);
    localStorage.setItem("accent", value);
  };

  return (
    <div className="flex gap-2">
      {Object.entries(ACCENTS).map(([name, value]) => (
        <button
          key={name}
          onClick={() => setAccent(value)}
          className="w-8 h-8 rounded-full border"
          style={{ background: value }}
        />
      ))}
    </div>
  );
}
