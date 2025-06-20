import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  // cssVariables: true,
  palette: {
    yellow: "#F4D04E",
    grey: "#6B6B6B",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
