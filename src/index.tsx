import { CssVarsProvider } from "@mui/joy";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* ThemeProvider is required for Styled Components theme */}
    <ThemeProvider theme={theme}>
      {/*
      CssVarsProvider is required for the Joy components to work.
      The "theme" prop is used to extend Joy's theme with your own.
      */}
      <CssVarsProvider>
        <App />
      </CssVarsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
