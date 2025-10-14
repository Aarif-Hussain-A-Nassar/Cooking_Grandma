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
  background-color: #fff5f0;

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
    background-color: #fff;

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
  }

  .front {
    background: #fff;
  }

  .back {
    background: #ffebe9;
    transform: rotateY(180deg);
  }

  h3 {
    font-size: 1.6rem;
    color: #222;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1rem;
    color: #555;
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
    background-color: #ff6347;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e6523d;
    }
  }

  /* Responsive font scaling */
  @media (max-width: 1024px) {
    width: 300px;
    height: 420px;
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 380px;
    h3 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
    }
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

/* Smooth slide-in from left animation */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};
