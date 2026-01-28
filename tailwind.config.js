/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563eb",
          soft: "#eff6ff",
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(37,99,235,0.08)",
      },
    },
  },
  plugins: [],
};
