/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1310px",
      },
    },
  },
  plugins: [],
};
