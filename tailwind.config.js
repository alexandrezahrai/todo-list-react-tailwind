/* eslint-disable no-undef */ /** @type {import('tailwindcss').Config} */ export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { lg: "992px", xl: "1440px" },
      colors: { dark: "#302F43" },
      container: { center: true, padding: { DEFAULT: "16px", md: "44px" } },
    },
  },
  plugins: [],
};
