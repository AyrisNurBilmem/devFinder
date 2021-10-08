import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body{
        background-color:${({ theme }) => theme.body};
        color: ${({ theme }) => theme.color};
        transition: all .5s linear;
        font-family: 'Roboto Mono', monospace;
        
    }
    input:focus, input::placeholder, input:active {
        color: ${({ theme }) => theme.color};
    }


`;

export const lightTheme = {
  body: "#f5f8ff",
  color: "#121212",
};

export const darkTheme = {
  body: "#141c2f",
  color: "#f1f3f6",
};
