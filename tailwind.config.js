/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark/Background Colors
        dark: {
          1: "#2C2D3C",
          2: "#3A3C4F",
          3: "#434656",
          4: "#4A5565",
          5: "#101828",
          6:"#D1D5DC",
        },
        // Light/Neutral Colors
        neutral: {
          1: "#B0B9C3",
          2: "#D6DEE5",
          3: "#E9F0FC",
          4: "#F9FAFB",
        },
        // Blue/Cyan Accents
        "blue-accent": {
          1: "#1E4EB5",
          2: "#4566B2",
          3: "#5FF6F2",
          4: "#EFF6FD",
          5:"#EFF6FF",
        },
        // Purple/Pink Accents
        "purple-accent": {
          1: "#8A3FFC",
          2: "#BB6DE9",
          3: "#D26BFF",
          4: "#720197",
        },
        "yellow-accent": {
          1: "#FEFFCF",
          2: "#FEE08B",
        },
      },
      backgroundImage: {
        // custom linear gradient
        "town-gradient": "linear-gradient(to right,#40BBEF, #485FCC )",
        "bluish-gradient": "linear-gradient(to right, #485FCC ,#40BBEF)",
        "blue-gradient": "linear-gradient(to right, #FEDBD5, #FC62B0)",
        "red-gradient": "linear-gradient(to right, #FFB5BD, #E35C7E)",
        "sky-gradient": "linear-gradient(to right, #26EEFF, #3272E1)",
        "org-gradient": "linear-gradient(to right, #FFDFB9, #FB2E2E)",
        "lightRed-gradient": "linear-gradient(to right, #F8C68E, #F286A0)",
        "yellow-gradient": "linear-gradient(to right, #FEF0A9, #EBA900)",
        "green-gradient": "linear-gradient(to right, #8EFF9A, #40E132)",
        "purple-gradient": "linear-gradient(to right, #A157EA, #58149D)",
        "dark-gradient": "linear-gradient(to bottom, #A83ADC, #FF6C1A)",
        "perli-gradient": "linear-gradient(to bottom, #936BE9, #4A62CE)",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
