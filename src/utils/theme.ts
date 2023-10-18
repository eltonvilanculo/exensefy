import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    // Add new color

    primary: {
      100: "#fff",
      200: "#227259",
      400: "#044540",
      500: "#051B1D",
      600: "#1F222A",
      900: "#29ABE2",
    },

    gray: {
      500: "#616161",
    },

    secondary: {
      500: "#DB8C15",
    },
    tertiary: {
      500: "#1564DB",
    },
    muted: {
      500: "#C4C4CC",
    },
    social: {
      fb: "#0988EF",
      google: "#DB4437",
      color: "#FFFBFB",
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: "#d97706",
    },
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56,
    22: 64,
    26: 104,
    28: 112,
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },

  fontConfig: {
    Nunito: {
      100: {
        normal: "NunitoThin",
      },
      200: {
        normal: "NunitoLight",
      },
      300: {
        normal: "NunitoRegular",
        italic: "Roboto-LightItalic",
      },

      500: {
        normal: "NunitoMedium",
      },

      700: {
        normal: "NunitoBold",
      },

      900: {
        normal: "NunitoExtra",
      },
      black: "NunitoBlack",
    },

    Rubik: {
      500: {
        normal: "RubikMedium",
      },

      700: {
        normal: "RubikSemiBold",
      },

      900: {
        normal: "RubikBold",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Nunito",
    body: "Nunito",
    mono: "Rubik",
  },
});
