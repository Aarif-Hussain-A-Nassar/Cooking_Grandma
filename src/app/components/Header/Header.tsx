"use client"; // Important for hooks and DOM

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./styles";

export function Header() {
  const [isActive, setActive] = useState(false);
  const [isLight, setIsLight] = useState(true);

  function toggleTheme() {
    const html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
    setIsLight(!isLight);
  }

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.classList.add("light"); // set light mode by default
    setIsLight(true);
  }, []);

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      {/* Logo */}
      <Link href="#home" className="logo">
        <span>{"<Cooking "}</span>
        <span>{" Grandma/>"}</span>
      </Link>

      {/* Theme toggle */}
      <input
        onChange={toggleTheme}
        type="checkbox"
        id="switch"
        checked={isLight}
      />
      <label htmlFor="switch">Toggle</label>

      {/* Navigation */}
      <nav className={isActive ? "active" : ""}>
        <Link href="#home" onClick={closeMenu}>
          Home
        </Link>
        <Link href="#products" onClick={closeMenu}>
          Products
        </Link>
        <Link href="#about" onClick={closeMenu}>
          About
        </Link>
        <Link href="#contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>

      {/* Hamburger menu */}
      <div
        className={isActive ? "menu active" : "menu"}
        onClick={() => setActive(!isActive)}
      ></div>
    </Container>
  );
}
