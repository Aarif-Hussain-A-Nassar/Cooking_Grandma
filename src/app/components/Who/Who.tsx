"use client";

import { motion } from "framer-motion";
import { Content, Section } from "./styles";


export default function Who() {
  const paragraphVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section>
      <Content>
        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Cooking Grandma
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Behind Cooking Grandma are three friends — Akshay, Arjun, and Vishnu —
          united by one mission: to make cooking easier without losing the taste of home.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          Every packet we create is more than just an ingredient — it’s a piece of
          nostalgia, warmth, and love, bringing the comfort of grandma’s kitchen
          straight to yours.
        </motion.p>
      </Content>
    </Section>
  );
}
