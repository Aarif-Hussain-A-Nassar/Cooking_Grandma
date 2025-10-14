"use client";

import { motion } from "framer-motion";
import { Section, Left, Right, Content, ImageWrapper } from "./styles";
import Image from "next/image";
import Ammuma from "../../../../public/Ammuma.png"; // 👈 update this path to your actual image

export default function About() {
  const paragraphVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <Section id="about">
      {/* Left: Text Content */}
      <Left>
        <Content
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Cooking Grandma
          </motion.h1>

          <motion.p
            variants={paragraphVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Cooking Grandma was born from one beautiful inspiration — our
            grandmother. Her warm smile in our logo reminds us every day of the
            love, wisdom, and traditional taste that filled our childhood.
          </motion.p>

          <motion.p
            variants={paragraphVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Founded by three friends — <span>Akshay</span>, <span>Arjun</span>,
            and <span>Vishnu</span> — Cooking Grandma carries a simple mission:
            to make cooking easier while keeping the soulful taste of home alive.
          </motion.p>

          <motion.p
            variants={paragraphVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Every packet we create is more than just an ingredient — it’s a
            sprinkle of nostalgia, a dash of love, and the comforting aroma of
            grandma’s kitchen, now delivered straight to yours.
          </motion.p>
        </Content>
      </Left>

      {/* Right: Image */}
      <Right>
        <ImageWrapper>
          <Image
            src={Ammuma}
            alt="Cooking Grandma"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </ImageWrapper>
      </Right>
    </Section>
  );
}
