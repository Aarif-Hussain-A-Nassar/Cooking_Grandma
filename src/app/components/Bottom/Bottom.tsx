"use client";

import { motion, MotionProps } from "framer-motion";
import Image from "next/image";
import { Section, Left, Right, Mail, IconLink } from "./styles";

export default function Bottom() {
  const hoverMotion: MotionProps = {
    whileHover: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 250 },
    },
  };

  return (
    <Section>
      {/* Left Side: Mail + Social Icons */}
      <Left>
        <Mail>
          <Image src="/gmail.png" alt="Mail" width={22} height={22} />
          <span>support@cookinggrandma.com</span>
        </Mail>

        <div className="icons">
          <motion.div {...hoverMotion}>
            <IconLink href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={22} height={22} />
            </IconLink>
          </motion.div>

          <motion.div {...hoverMotion}>
            <IconLink href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Image src="/instagram.png" alt="Instagram" width={22} height={22} />
            </IconLink>
          </motion.div>

          <motion.div {...hoverMotion}>
            <IconLink href="https://youtube.com" target="_blank" aria-label="YouTube">
              <Image src="/youtube.png" alt="YouTube" width={22} height={22} />
            </IconLink>
          </motion.div>

          <motion.div {...hoverMotion}>
            <IconLink href="https://wa.me/1234567890" target="_blank" aria-label="WhatsApp">
              <Image src="/whatsapp.png" alt="WhatsApp" width={22} height={22} />
            </IconLink>
          </motion.div>
        </div>
      </Left>

      {/* Right Side: Navigation Links */}
      <Right>
        <motion.a {...hoverMotion} href="#home">
          Home
        </motion.a>
        <motion.a {...hoverMotion} href="#about">
          About
        </motion.a>
        <motion.a {...hoverMotion} href="#products">
          Products
        </motion.a>
        <motion.a {...hoverMotion} href="#contact">
          Contact
        </motion.a>
      </Right>
    </Section>
  );
}
