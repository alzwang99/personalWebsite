/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    ".src/main.tsx",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

