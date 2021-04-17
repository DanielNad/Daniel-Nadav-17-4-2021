import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  input: "#1e202b",
  transition: "all 0.2s ease-in",
};

export const darkTheme = {
  body: "#1e202b",
  fontColor: "#bfc1c8",
  input: "#fff",
  transition: "all 0.2s ease-in",
};

export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    transition: ${(props) => props.theme.transition};
}
`;
