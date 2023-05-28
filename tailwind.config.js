module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange_A200: "#ea7432",
        deep_orange_700_01: "#e04b18",
        red_300: "#f77171",
        deep_orange_700_02: "#e14f1b",
        deep_orange_600_33: "#e45e2433",
        orange_A200_33: "#f2954733",
        orange_300_01: "#f8a954",
        green_500: "#47b968",
        deep_orange_800_33_03: "#df471533",
        deep_orange_800_33_02: "#de451433",
        deep_orange_800_02: "#de4514",
        deep_orange_700_33_02: "#e14f1b33",
        deep_orange_800_01: "#de4413",
        deep_orange_700_33_01: "#e04b1833",
        black_900: "#000000",
        deep_orange_700: "#e2561f",
        deep_orange_600: "#e45e24",
        deep_orange_800_33_01: "#de441333",
        deep_orange_800: "#de4313",
        light_blue_A700: "#0096ff",
        blue_gray_800: "#3c4852",
        blue_gray_900: "#172746",
        deep_orange_400: "#ee833b",
        red_A700: "#ff0000",
        deep_orange_800_03: "#df4715",
        deep_orange_600_33_01: "#e7682a33",
        gray_400: "#bebebe",
        orange_A200: "#f29547",
        deep_orange_600_01: "#e7682a",
        deep_orange_A200_33: "#ea743233",
        deep_orange_700_33: "#e2561f33",
        orange_300_33_01: "#f8a95433",
        deep_orange_400_33: "#ee833b33",
        gray_300: "#e6e6e6",
        orange_300: "#fec163",
        gray_300_01: "#d7ecdd",
        orange_300_33: "#fec16333",
        deep_orange_800_33: "#de431333",
        indigo_A700: "#0048ff",
        white_A700: "#ffffff",
      },
      backgroundImage: {
        gradient: "linear-gradient(223deg ,#0048ff,#0096ff)",
        gradient1: "linear-gradient(121deg ,#0096ff,#0048ff)",
        gradient2:
          "linear-gradient(135deg ,#de431333,#de431333,#de431333,#de441333,#de451433,#df471533,#e04b1833,#e14f1b33,#e2561f33,#e45e2433,#e7682a33,#ea743233,#ee833b33,#f2954733,#f8a95433,#fec16333)",
        gradient3:
          "linear-gradient(135deg ,#de4313,#de4313,#de4313,#de4413,#de4514,#df4715,#e04b18,#e14f1b,#e2561f,#e45e24,#e7682a,#ea7432,#ee833b,#f29547,#f8a954,#fec163)",
      },
      fontFamily: { raleway: "Raleway", roboto: "Roboto", nunito: "Nunito" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
