/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        myTheme: {
          base: "#EBEBEB",
          primary: "#B0F41F",
          secondary: "#969696",
          neutral: "#DCDCDD",
          gold: "#EFD700",
          silver: "#7E7E7E",
          coper: "#C6811B",
          black: "#000000",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
