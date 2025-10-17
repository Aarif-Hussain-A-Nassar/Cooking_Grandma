"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/Logo.png";
import { motion } from "framer-motion";
import { Container } from "./styles";

export function Header() {
  const [isActive, setActive] = useState(false);
  const [isLight, setIsLight] = useState(true);

  function toggleTheme() {
    const html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
    html.classList.toggle("dark");
    setIsLight(!isLight);
  }

  function closeMenu() {
    setActive(false);
  }

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    // Check screen width to set default theme
    if (window.innerWidth <= 768) {
      // Mobile - Light theme
      html.classList.add("light");
      html.classList.remove("dark");
      setIsLight(true);
    } else {
      // Desktop - Dark theme
      html.classList.add("dark");
      html.classList.remove("light");
      setIsLight(false);
    }
  }, []);
  return (
    <Container className="header-fixed">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.95, rotate: -3 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Link href="#home" className="logo">
          <Image
            src={Logo}
            alt="Coconut Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "50px" }}
          />
        </Link>
      </motion.div>

      {/* Nav + Theme Toggle + Hamburger */}
      <div className="right-section">
        <nav className={isActive ? "active" : ""}>
          {[
            { name: "Home", id: "home" },
            { name: "Products", id: "products" },
            { name: "About", id: "who" },
            { name: "Contact", id: "contact" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, color: "#E31F71" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`#${item.id}`} onClick={closeMenu}>
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Toggle Button (inside nav for desktop, outside for mobile) */}
        <motion.div
          className="theme-toggle"
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9, rotate: 2 }}
        >
          <input
            type="checkbox"
            id="switch"
            checked={isLight}
            onChange={toggleTheme}
          />
          <label htmlFor="switch" />
        </motion.div>

        {/* Hamburger Menu */}
        <div
          className={isActive ? "menu active" : "menu"}
          onClick={() => setActive(!isActive)}
        />
      </div>
    </Container>
  );
}
