import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#EB373E", // Exact MiCha Red
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#FBEF43", // Exact MiCha Yellow
      contrastText: "#1E1E1E",
    },

    success: {
      main: "#6DB54E", // Exact MiCha Green
      contrastText: "#FFFFFF",
    },

    info: {
      main: "#7F4E9F", // Exact MiCha Purple
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#FBEF43", // Used heavily as section background
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1E1E1E",
      secondary: "#4A4A4A",
    },
  },

  typography: {
    fontFamily: `"Poppins", "Inter", "Roboto", "Arial", sans-serif`,
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    button: {
      textTransform: "uppercase",
      fontWeight: 700,
      letterSpacing: "0.04em",
    },
  },

  shape: {
    borderRadius: 16, // matches rounded playful UI
  },
});

export default theme;
