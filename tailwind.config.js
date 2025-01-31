/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF934F",
        secondary: {
          DEFAULT: "#f5ed31",
          100: "#FF9001",
          200: "#FF8E01",
        },
        dark: {
          DEFAULT: "#373637",
          100: "#353435",
          200: "#151415",
        },
      },
      fontFamily:{
        Funnel:["Funnel_Display","sans-serif"],
        QuickSand:["Quicksand","sans-serif"], 
        Reddit:["Reddit","sans-serif"],
        Roboto:["Roboto","sans-serif"], 
        Handlee:["Handlee","sans-serif"],
        Annie:["Annie","sans-serif"], 
        EduAU:["EduAU","sans-serif"], 
        logam:["logam","sans-serif"], 


        

      }
    },
  },
  plugins: [],
};

