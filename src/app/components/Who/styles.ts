"use client";

import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8vh 8vw;
  min-height: 100vh;
  background-color: var(--card-bg);
  color: var(--heading-color);
  gap: 5vw;
  overflow-x: hidden; /* ✅ prevent motion overflow scroll */

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 6vh 4vw;
    gap: 4vh;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .grandma-image {
    width: 100%;
    height: auto;
    max-width: 450px;
    border-radius: 20px;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    max-width: 90%;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--heading-color);
  text-align: left;

  h1 {
    /* Larger text on big screens, standard on small screens */
    font-size: clamp(2rem, 5vw, 5rem); /* min 2rem, scales with viewport, max 5rem */
    font-weight: 700;
    margin-bottom: 2.5rem;
    color: var(--heading-color);
  }

  p {
    font-size: clamp(1.2rem, 2vw, 1.6rem); /* min 1.2rem, scales, max 1.6rem */
    line-height: 1.8;
    margin-bottom: 1.8rem;
    color: var(--heading-color);

    span {
      font-weight: 600;
    }
  }

  @media (max-width: 900px) {
    text-align: center;

    h1 {
      font-size: 2rem; /* standard size on mobile */
    }

    p {
      font-size: 1.2rem; /* standard size on mobile */
    }
  }
`;
