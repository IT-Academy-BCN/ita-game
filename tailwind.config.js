
/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [require("daisyui")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        ITAgame: {
          base: "#EBEBEB",
          primary: "#B0F41F",
          secondary: "#757575", // button secondary
          neutral: "#DCDCDD",
          accent: "#B0F41F",
          info: "black", // background bagdes
          "info-content": "white", // foreground bagdes
          // 'accent-content': '#000000',
          // 'base-content': '#1E1E1E', // used for blank backgrounds
          // 'base-100': '#969696', // icons
          warning: "#EFD700",
          "warning-content": "#C6811B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
