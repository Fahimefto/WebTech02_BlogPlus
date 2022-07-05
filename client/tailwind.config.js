module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7f31b7",

          secondary: "#b247e0",

          accent: "#f4b5cd",

          neutral: "#2A2235",

          "base-100": "#F4EEF7",

          info: "#6BBFDB",

          success: "#20BC61",

          warning: "#BA8D08",

          error: "#EA6C78",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
