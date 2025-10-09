"use client";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage6 from "../../../../public/HeroImage6.svg";
import { Container } from "./styles";

export function Hero() {
  // Variants for parent container (staggered children)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // space out child animations
      },
    },
  };

  // Variants for text elements
  const textVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Variant for button
  const buttonVariants: Variants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }, // use cubic bezier array
    },
  };

  return (
    <Container id="home">
      <motion.div
        className="hero-content"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }} // animate only once
      >
        <div className="text">
          <motion.h1 variants={textVariants}>Feel the Freshness</motion.h1>
          <motion.p variants={textVariants}>
            Taste the authentic flavors of Kerala with our premium range of
            naturally crafted ingredients — made with love by{" "}
            <b style={{ color: "#ff4d42" }}>Cooking Grandma</b>.
          </motion.p>
          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            style={{ backgroundColor: "#ff4d42", color: "#fff" }}
          >
            Explore Products
          </motion.button>
        </div>

        {/* Animated Image */}
        <motion.div
          className="image"
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
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
