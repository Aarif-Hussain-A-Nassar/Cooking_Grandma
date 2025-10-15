"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section, CardContainer, slideInLeft } from "./style";
import Tamarind12 from "../../../../public/Tamarind.png";
import CoconutImg from "../../../../public/coconut.png";

export default function Products() {
  const [flipped, setFlipped] = useState<{ [key: string]: boolean }>({
    tamarind: false,
    coconut: false,
  });

  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size on mount
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Run once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Floating animation config (adjusts based on screen)
  const floatingAnimation = useMemo(
    () => ({
      animate: { y: [0, isMobile ? -12 : -20, 0] },
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut" as const,
      },
    }),
    [isMobile]
  );

  const handleFlip = (id: string) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Section>
      {/* 🌿 Tamarind Card */}
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <CardContainer
          $flipped={flipped.tamarind}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleFlip("tamarind")}
        >
          <div className="card">
            <div className="front">
              {/* 🍃 Floating Image */}
              <motion.div
                {...floatingAnimation}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={Tamarind12}
                  alt="Tamarind"
                  width={175}
                  height={175}
                  className="product-img"
                />
              </motion.div>

              <h3>Tamarind</h3>
              <p>
                Tangy & aromatic tamarind for authentic recipes. Naturally
                sun-dried and hand-picked for rich flavor.
              </p>
              {!flipped.tamarind && <button>Know More</button>}
            </div>

            <div className="back">
              <h3>Tamarind – Detailed</h3>
              <p>
                Our premium tamarind is sourced from organic farms and naturally
                dried to preserve flavor. Perfect for curries, chutneys, and
                sauces, adding that essential tang and depth to your dishes.
              </p>
            </div>
          </div>
        </CardContainer>
      </motion.div>

      {/* 🥥 Coconut Card */}
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ delay: 0.3 }}
      >
        <CardContainer
          $flipped={flipped.coconut}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleFlip("coconut")}
        >
          <div className="card">
            <div className="front">
              {/* 🌴 Floating Image */}
              <motion.div
                {...floatingAnimation}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={CoconutImg}
                  alt="Roasted Coconut"
                  width={200}
                  height={200}
                  className="product-img"
                />
              </motion.div>

              <h3>Roasted Coconut</h3>
              <p>
                Crunchy roasted coconut for sweet and savory dishes. Adds a
                tropical, nutty richness to every recipe.
              </p>
              {!flipped.coconut && <button>Know More</button>}
            </div>

            <div className="back">
              <h3>Roasted Coconut – Detailed</h3>
              <p>
                Our roasted coconut is made from freshly grated coconuts,
                carefully slow-roasted for maximum flavor. Perfect for desserts,
                curries, and snacks where texture and aroma matter most.
              </p>
            </div>
          </div>
        </CardContainer>
      </motion.div>
    </Section>
  );
}
