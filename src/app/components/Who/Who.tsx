"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section, Content, ImageWrapper } from "./styles";
import HeroImage from "../../../../public/HeroImage.png"; // 👈 replace with your image

export default function Who() {
  const paragraphVariants = {
    hidden: { opacity: 0, x: 100 }, // slide from right
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section id="who">
      {/* Left Image Side */}
      <motion.div style={{ width: "50%", overflow: "hidden" }}>
        <ImageWrapper>
          <motion.div
            initial={{ opacity: 0, x: -100 }} // slide from left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            <Image
              src={HeroImage}
              alt="Cooking Grandma"
              width={500}
              height={500}
              className="grandma-image"
              priority
            />
          </motion.div>
        </ImageWrapper>
      </motion.div>
      {/* Right Content Side */}
      <Content>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          Who Are We?
        </motion.h1>

        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ amount: 0.3 }}
        >
          Behind Cooking Grandma are three friends — Akshay, Arjun, and Vishnu —
          united by one mission: to make cooking easier without losing the taste
          of home.
        </motion.p>

        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          viewport={{ amount: 0.3 }}
        >
          Every packet we create is more than just an ingredient — it’s a piece
          of nostalgia, warmth, and love, bringing the comfort of grandma’s
          kitchen straight to yours.
        </motion.p>
      </Content>
    </Section>
  );
}
