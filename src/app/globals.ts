"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #ff4d42;
    --green: #ff4d42;
    --blue: #016fb9;
    --black: #000000;
    --white: #ffffff;
    --heading-color: #fff; /* default dark mode text */
    --card-bg: #000000;    /* default dark background (pitch black) */
    --text-secondary: #ccc;
    scroll-padding-top: 10rem;
  }

  html.light {
    --heading-color: #000;
    --card-bg: #fff;
    --text-secondary: #555;
  }

  html.dark {
    --heading-color: #fff;
    --card-bg: #000000;  /* pitch black */
    --text-secondary: #ccc;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Red Hat Display', sans-serif;
    background-color: var(--card-bg);
    color: var(--heading-color);
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.5s, color 0.5s;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s, background-color 0.5s, color 0.5s;
  }

  .logo {
    font-size: 3rem;
    color: var(--heading-color);
  }
`;
