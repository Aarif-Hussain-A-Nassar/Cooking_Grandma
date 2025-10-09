"use client";

import { motion } from "framer-motion";
import { Section, Content } from "./styles";

export default function About() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Content>
          <h1>About Cooking Grandma</h1>

          <p>
            Cooking Grandma was born from one beautiful inspiration — our grandmother.
            Her warm smile in our logo reminds us every day of the love, wisdom, and
            traditional taste that filled our childhood.
          </p>

          <p>
            Founded by three friends — <span>Akshay</span>, <span>Arjun</span>, and{" "}
            <span>Vishnu</span> — Cooking Grandma carries a simple mission: to make
            cooking easier while keeping the soulful taste of home alive.
          </p>

          <p>
            Every packet we create is more than just an ingredient — it’s a sprinkle of
            nostalgia, a dash of love, and the comforting aroma of grandma’s kitchen,
            now delivered straight to yours.
          </p>
        </Content>
      </motion.div>
    </Section>
  );
}
