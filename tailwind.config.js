import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "4px", 
          medium: "6px", 
          large: "8px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#FFFFFF"
            },
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#0A2540"
            },
            content2: {
              DEFAULT: "#f4f7fa",
              foreground: "#0A2540"
            },
            content3: {
              DEFAULT: "#e4e9ef",
              foreground: "#0A2540"
            },
            content4: {
              DEFAULT: "#d4d9df",
              foreground: "#0A2540"
            },
            divider: {
              DEFAULT: "rgba(10, 37, 64, 0.15)"
            },
            focus: {
              DEFAULT: "#0055a4"
            },
            foreground: {
              50: "#f5f7fa",
              100: "#e4e9ef",
              200: "#c9d3df",
              300: "#adbdcf",
              400: "#91a7bf",
              500: "#7691af",
              600: "#5a7a9f",
              700: "#3e648f",
              800: "#224e7f",
              900: "#0A2540",
              DEFAULT: "#0A2540"
            },
            overlay: {
              DEFAULT: "#000000"
            },
            danger: {
              50: "#fee7ef",
              100: "#fdd0df",
              200: "#faa0bf",
              300: "#f871a0",
              400: "#f54180",
              500: "#f31260",
              600: "#c20e4d",
              700: "#920b3a",
              800: "#610726",
              900: "#310413",
              DEFAULT: "#f31260",
              foreground: "#ffffff"
            },
            default: {
              50: "#f5f7fa",
              100: "#e4e9ef",
              200: "#c9d3df",
              300: "#adbdcf",
              400: "#91a7bf",
              500: "#7691af",
              600: "#5a7a9f",
              700: "#3e648f",
              800: "#224e7f",
              900: "#0A2540",
              DEFAULT: "#c9d3df",
              foreground: "#0A2540"
            },
            primary: {
              50: "#e8f5ef",
              100: "#cfeadd",
              200: "#9fd5bb",
              300: "#70c099",
              400: "#40ab77",
              500: "#29875e",
              600: "#237350",
              700: "#1d5e42",
              800: "#174a34",
              900: "#113626",
              DEFAULT: "#29875e",
              foreground: "#fff"
            },
            secondary: {
              50: "#f2eafa",
              100: "#e4d4f4",
              200: "#c9a9e9",
              300: "#ae7ede",
              400: "#9353d3",
              500: "#7828c8",
              600: "#6020a0",
              700: "#481878",
              800: "#301050",
              900: "#180828",
              DEFAULT: "#7828c8",
              foreground: "#fff"
            },
            success: {
              50: "#e8faf0",
              100: "#d1f4e0",
              200: "#a2e9c1",
              300: "#74dfa2",
              400: "#45d483",
              500: "#17c964",
              600: "#12a150",
              700: "#0e793c",
              800: "#095028",
              900: "#052814",
              DEFAULT: "#17c964",
              foreground: "#000"
            },
            warning: {
              50: "#fefce8",
              100: "#fdedd3",
              200: "#fbdba7",
              300: "#f9c97c",
              400: "#f7b750",
              500: "#f5a524",
              600: "#c4841d",
              700: "#936316",
              800: "#62420e",
              900: "#312107",
              DEFAULT: "#f5a524",
              foreground: "#000"
            },
            accent: {
              50: "#fff5f5",
              100: "#ffe0e0",
              200: "#ffc1c1",
              300: "#ffa3a3",
              400: "#ff8484",
              500: "#ff6565",
              600: "#cc5151",
              700: "#993d3d",
              800: "#662828",
              900: "#331414",
              DEFAULT: "#ff6565",
              foreground: "#ffffff"
            }
          },
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#0A1929"
            },
            content1: {
              DEFAULT: "#0A1929",
              foreground: "#f5f7fa"
            },
            content2: {
              DEFAULT: "#0e223a",
              foreground: "#f5f7fa"
            },
            content3: {
              DEFAULT: "#132c4c",
              foreground: "#f5f7fa"
            },
            content4: {
              DEFAULT: "#17355d",
              foreground: "#f5f7fa"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.15)"
            },
            focus: {
              DEFAULT: "#3387d7"
            },
            foreground: {
              50: "#0A1929",
              100: "#0e223a",
              200: "#132c4c",
              300: "#17355d",
              400: "#1c3f6e",
              500: "#204980",
              600: "#255391",
              700: "#295da2",
              800: "#2e67b3",
              900: "#3271c4",
              DEFAULT: "#f5f7fa"
            },
            overlay: {
              DEFAULT: "#000000"
            },
            danger: {
              50: "#310413",
              100: "#610726",
              200: "#920b3a",
              300: "#c20e4d",
              400: "#f31260",
              500: "#f54180",
              600: "#f871a0",
              700: "#faa0bf",
              800: "#fdd0df",
              900: "#fee7ef",
              DEFAULT: "#f31260",
              foreground: "#ffffff"
            },
            default: {
              50: "#0A1929",
              100: "#0e223a",
              200: "#132c4c",
              300: "#17355d",
              400: "#1c3f6e",
              500: "#204980",
              600: "#255391",
              700: "#295da2",
              800: "#2e67b3",
              900: "#3271c4",
              DEFAULT: "#132c4c",
              foreground: "#f5f7fa"
            },
            primary: {
              50: "#0a1b15",
              100: "#0f2a20",
              200: "#144a36",
              300: "#1a6448",
              400: "#228055",
              500: "#29875e",
              600: "#4aa57d",
              700: "#7bc5a5",
              800: "#b0dfcb",
              900: "#dff3ea",
              DEFAULT: "#29875e",
              foreground: "#fff"
            },
            secondary: {
              50: "#180828",
              100: "#301050",
              200: "#481878",
              300: "#6020a0",
              400: "#7828c8",
              500: "#9353d3",
              600: "#ae7ede",
              700: "#c9a9e9",
              800: "#e4d4f4",
              900: "#f2eafa",
              DEFAULT: "#9353d3",
              foreground: "#fff"
            },
            success: {
              50: "#052814",
              100: "#095028",
              200: "#0e793c",
              300: "#12a150",
              400: "#17c964",
              500: "#45d483",
              600: "#74dfa2",
              700: "#a2e9c1",
              800: "#d1f4e0",
              900: "#e8faf0",
              DEFAULT: "#17c964",
              foreground: "#000"
            },
            warning: {
              50: "#312107",
              100: "#62420e",
              200: "#936316",
              300: "#c4841d",
              400: "#f5a524",
              500: "#f7b750",
              600: "#f9c97c",
              700: "#fbdba7",
              800: "#fdedd3",
              900: "#fefce8",
              DEFAULT: "#f5a524",
              foreground: "#000"
            },
            accent: {
              50: "#331414",
              100: "#662828",
              200: "#993d3d",
              300: "#cc5151",
              400: "#ff6565",
              500: "#ff8484",
              600: "#ffa3a3",
              700: "#ffc1c1",
              800: "#ffe0e0",
              900: "#fff5f5",
              DEFAULT: "#ff6565",
              foreground: "#ffffff"
            }
          }
        }
      }
    })
  ]
}
