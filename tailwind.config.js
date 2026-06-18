/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 🔥 IMPORTANT for next-themes

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // optional: you can use these in your UI
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        border: "var(--border)",
      },
    },
  },

  plugins: [],
};