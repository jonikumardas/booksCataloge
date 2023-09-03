/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#292524",

          secondary: "#db2777",

          accent: "#ffce1a",

          neutral: "#111827",

          "base-100": "#f3f4f6",

          info: "#312e81",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#be123c",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
