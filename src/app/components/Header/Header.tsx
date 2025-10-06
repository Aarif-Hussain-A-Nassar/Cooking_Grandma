"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./styles";
import Image from "next/image";
import Logo from "../../../../public/Logo.png";
import { motion } from "framer-motion";

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
      <motion.div
        whileHover={{ scale: 1.1, rotate: 3 }} // grows & tilts slightly
        whileTap={{ scale: 0.95, rotate: -3 }} // shrink & tilt back
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Link href="#home" className="logo">
          <Image
            src={Logo}
            alt="Coconut Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "50px" }} // only control height
          />
        </Link>
      </motion.div>

      {/* Navigation with framer-motion */}
      <nav className={isActive ? "active" : ""}>
        {["Home", "Products", "About", "Contact"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, color: "#E31F71" }} // enlarge + color change
            whileTap={{ scale: 0.95 }} // small shrink when clicked
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </Link>
          </motion.div>
        ))}

        <motion.div
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9, rotate: 2 }}
          transition={{ type: "spring", stiffness: 250 }}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <input
            onChange={toggleTheme}
            type="checkbox"
            id="switch"
            checked={isLight}
            style={{ cursor: "pointer" }}
          />
          <label
            htmlFor="switch"
            style={{
              cursor: "pointer",
              fontWeight: "600",
              color: isLight ? "#222" : "#f5f5f5",
            }}
          >
            Toggle
          </label>
        </motion.div>
      </nav>

      {/* Hamburger menu */}
      <div
        className={isActive ? "menu active" : "menu"}
        onClick={() => setActive(!isActive)}
      ></div>
    </Container>
  );
}
