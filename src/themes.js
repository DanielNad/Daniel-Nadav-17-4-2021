import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#d8e3e7",
  fontColor: "#022b3a",
  input: "#bfdbf7",
  transition: "all 0.2s ease-in",
  secondary: "#d8e3e7",
};

export const darkTheme = {
  body: "#0d1b2a",
  fontColor: "#e0e1dd",
  input: "#1b263b",
  transition: "all 0.2s ease-in",
  secondary: "#33415c",
};

export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    transition: ${(props) => props.theme.transition};
}
`;
