import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  background-color: var(--card-bg);
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  transition: background-color 0.5s;

  nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    a {
      color: var(--heading-color);
      padding: 0.6rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: color 0.5s, filter 0.25s;

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  .menu, .menu:before, .menu:after {
    background-color: var(--heading-color);
    transition: background-color 0.5s;
  }

  /* Toggle switch */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: "";
    background: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: transform 0.32s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    transform: translateX(100%);
  }

  /* Hamburger menu */
  .menu {
    width: 2rem;
    height: 0.2rem;
    position: relative;
    cursor: pointer;
    display: none;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: var(--heading-color);
      transition: all 0.6s;
    }

    &:before {
      bottom: 0.5rem;
    }

    &:after {
      top: 0.5rem;
    }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after {
      top: 0;
      transform: rotate(-45deg);
    }

    &.active {
      background-color: transparent;
    }
  }

  /* Responsive */
  @media (max-width: 960px) {
    padding: 1.8rem 3rem;

    .menu {
      display: block;
    }

    nav {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: var(--card-bg);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s;

      &.active {
        opacity: 1;
        visibility: visible;
      }

      a {
        font-size: 1.5rem;
        padding: 1rem 0;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1.5rem;

    nav a {
      font-size: 1.2rem;
    }

    label {
      width: 50px;
      height: 28px;
    }

    label:after {
      width: 18px;
      height: 18px;
      top: 5px;
      left: 4px;
    }
  }
`;
