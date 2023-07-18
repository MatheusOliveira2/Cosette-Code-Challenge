import { createTheme } from "@mui/material";

// Define the primary and secondary colors with main, dark, and light variants
const palette = {
  primary: {
    main: "#272727",
    contrastText: "#EEEEEE",
  },
  secondary: {
    main: "#f29bad",
    contrastText: "white",
  },
};

// Create a theme using the palette
export const defaultTheme = createTheme({
  palette,
});
