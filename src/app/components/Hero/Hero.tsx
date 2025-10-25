"use client";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import HeroImage6 from "../../../../public/HeroImage6.svg";
import { Container } from "./styles";

export function Hero() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0, y: 40 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <Container id="home">
      <motion.div
        className="hero-content"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ amount: 0.2 }}
      >
        <div className="text">
          <motion.h1 variants={textVariants}>Feel the Freshness</motion.h1>

          <motion.p variants={textVariants}>
            Taste the authentic flavors of Kerala with our premium range of
            naturally crafted ingredients — made with love by{" "}
            <a
              href="https://www.instagram.com/twodotsofficial_/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ff4d42",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Cooking Grandma
            </a>
            .
          </motion.p>

          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            style={{
              backgroundColor: "#ff4d42",
              color: "#fff",
              border: "none",
              padding: "1rem 2.5rem",
              fontSize: "1.25rem",
              borderRadius: "12px",
              cursor: "pointer",
            }}
            onClick={() => {
              const productsSection = document.getElementById("products");
              productsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Products
          </motion.button>
        </div>

        {/* Animated Floating Image */}
        <motion.div variants={imageVariants} className="image">
          <motion.div
            animate={{ y: [0, -30, 0] }}
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
      </motion.div>
    </Container>
  );
}
