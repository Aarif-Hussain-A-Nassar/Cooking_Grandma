"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage6 from "../../../../public/HeroImage6.svg"; // replace with your image path
import { Container } from "./styles";

export function Hero() {
  return (
    <Container id="home">
      <motion.div
        className="hero-content"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="text">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Feel the Freshness
          </motion.h1>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Taste the authentic flavors of Kerala with our premium range of
            naturally crafted ingredients — made with love by{" "}
            <b style={{ color: "#ff4d42" }}>Cooking Grandma</b>.
          </motion.p>
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: "#ff4d42", color: "#fff" }}
          >
            Explore Products
          </motion.button>
        </div>

        {/* Animated Image */}
        <motion.div
          className="image"
          animate={{
            y: [0, -20, 0], // move up and down
          }}
          transition={{
            duration: 4, // smooth movement duration
            repeat: Infinity, // infinite loop
            ease: "easeInOut", // smooth easing
          }}
        >
          <Image
            src={HeroImage6}
            alt="Hero Image"
            width={400}
            height={400}
            priority
          />
        </motion.div>
      </motion.div>
    </Container>
  );
}
