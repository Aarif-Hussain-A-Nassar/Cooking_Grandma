"use client";

import styled, { css } from "styled-components";
import { motion, Variants } from "framer-motion";

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 4rem;
  padding: 10vh 8vw;
  flex-wrap: wrap;
  background-color: var(--card-bg);
  transition: background-color 0.4s ease, color 0.4s ease;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 6vh 5vw;
  }

  @media (max-width: 480px) {
    padding: 5vh 4vw;
  }
`;

export const CardContainer = styled(motion.div)<{ $flipped: boolean }>`
  width: 340px;
  height: 460px;
  perspective: 1000px;
  cursor: pointer;

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transform-style: preserve-3d;
    transition: transform 0.8s ease-in-out;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

    ${({ $flipped }) =>
      $flipped &&
      css`
        transform: rotateY(180deg);
      `}
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.8rem;
    text-align: center;
    transition: color 0.4s ease;
  }

  /* ✅ Always pink/red (doesn't change with theme) */
  .front {
    background-color: #ff4d42;
  }

  .back {
    background-color: #ff4d42;
    transform: rotateY(180deg);
  }

  h3 {
    font-size: 1.6rem;
    color: #fff; /* ✅ keep white text for readability */
    margin-bottom: 0.8rem;
    transition: color 0.4s ease;
  }

  p {
    font-size: 1rem;
    color: #fff;
    opacity: 0.9;
    line-height: 1.5;
    max-width: 260px;
  }

  .product-img {
    margin-bottom: 1.2rem;
    border-radius: 12px;
    object-fit: contain;
  }

  button {
    margin-top: 10px;
    padding: 10px 16px;
    background-color: #fff;
    color: #ff4d42;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 1024px) {
    width: 300px;
    height: 420px;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 380px;
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 340px;
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.95rem;
    }
    button {
      font-size: 0.95rem;
      padding: 8px 14px;
    }
  }
`;

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

export const ProductsHeading = styled.h1`
  font-size: clamp(3rem, 6vw, 5rem); /* bigger text */
  font-weight: 700;
  color: var(--heading-color);
  text-align: center;
  margin-top: 10rem; /* margin-top instead of bottom */
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    font-size: clamp(2.5rem, 7vw, 3.5rem);
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: clamp(2rem, 6vw, 3rem);
  }
`;
