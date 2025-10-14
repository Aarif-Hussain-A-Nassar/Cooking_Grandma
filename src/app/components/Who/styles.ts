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
  color: var(--heading-color);  /* ✅ use theme variable */
  text-align: left;

  h1 {
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--heading-color); /* ✅ use theme variable */
  }

  p {
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    line-height: 1.7;
    margin-bottom: 1.5rem;
    color: var(--heading-color); /* ✅ use theme variable */

    span {
      font-weight: 600;
    }
  }

  @media (max-width: 900px) {
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

