import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

export default function DarkThemeProvider({ children }) {
  const theme = useSelector((state) => state.style.theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
