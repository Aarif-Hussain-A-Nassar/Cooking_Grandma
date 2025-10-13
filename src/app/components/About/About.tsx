"use client";

import { motion } from "framer-motion";
import { Section, Content } from "./styles";

export default function About() {
  const paragraphVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // paragraphs appear one after another
      },
    },
  };

  return (
    <Section id="about">
      <Content>
        {/* Container to handle staggered scroll animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // 👇 remove `once: true` so it re-triggers every time
          viewport={{ amount: 0.2 }}
        >
          {/* Heading Animation */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }} // also replays when visible again
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Cooking Grandma
          </motion.h1>

          {/* Paragraph 1 */}
          <motion.p
            variants={paragraphVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Cooking Grandma was born from one beautiful inspiration — our
            grandmother. Her warm smile in our <br /> logo reminds us every day
            of the love, wisdom, and traditional taste that filled our
            childhood.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={paragraphVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Founded by three friends — <span>Akshay</span>, <span>Arjun</span>,
            and <span>Vishnu</span> — Cooking Grandma carries a simple mission:{" "}
            <br /> To make cooking easier while keeping the soulful taste of
            home alive.
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            variants={paragraphVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Every packet we create is more than just an ingredient — it’s a
            sprinkle of nostalgia, a dash of love, <br /> and the comforting
            aroma of grandma’s kitchen, now delivered straight to yours.
          </motion.p>
        </motion.div>
      </Content>
    </Section>
  );
}
