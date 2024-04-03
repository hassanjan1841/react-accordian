/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      // Define your colors here
      transparent: "transparent",
      current: "currentColor",
      textColor: {
        light: "#181616",
        DEFAULT: "#1fb6ff",
        dark: "#f5f5f5",
      },
      elementBgColor: {
        light: "#ffffff",
        DEFAULT: "#ff49db",
        dark: "#2e2e2e",
      },
      btnBgColor: {
        dark: "#191b20",
        DEFAULT: "#c0ccda",
        light: "#d6d6d6",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      const buttons = {
        ".btn-primary": {
          "@apply rounded bg-btnBgColor-light px-3 py-2 text-lg font-bold hover:cursor-pointer dark:bg-btnBgColor-dark dark:hover:bg-[#dad6d6] dark:hover:text-[#000]":
            {},
        },
        ".btn-active": {
          "@apply rounded bg-btnBgColor-light text-[#000] px-3 py-2 text-lg font-bold hover:cursor-pointer dark:bg-[#fff] dark:hover:bg-[#dad6d6] dark:hover:text-[#000]":
            {},
        },
        // Add more button styles here
      };
      const elementStyle = {
        ".element-primary": {
          "@apply rounded bg-elementBgColor-light dark:bg-elementBgColor-dark":
            {},
        },
        // Add more button styles here
      };
      addComponents(buttons);
      addComponents(elementStyle);
    },
    "prettier-plugin-tailwindcss",
  ],
};
