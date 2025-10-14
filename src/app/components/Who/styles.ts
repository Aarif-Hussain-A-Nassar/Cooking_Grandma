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
  overflow-x: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 8vh 4vw 4vh 4vw;
    gap: 2.5rem; /* slightly bigger gap */
    align-items: center;
    min-height: auto;
    margin-top: 7rem;
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
    max-width: 95%; /* slightly bigger on mobile */
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
    font-size: clamp(2rem, 5vw, 5rem);
    font-weight: 700;
    margin-bottom: 2.5rem;
    color: var(--heading-color);
  }

  p {
    font-size: clamp(1.2rem, 2vw, 1.8rem);
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
      font-size: clamp(2.2rem, 5vw, 2.8rem); /* slightly bigger on mobile */
    }

    p {
      font-size: clamp(1.4rem, 2.5vw, 1.6rem); /* bigger and more readable */
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: clamp(2rem, 4.5vw, 2.5rem); /* very small screens */
    }

    p {
      font-size: clamp(1.3rem, 4vw, 1.5rem);
    }
  }
`;
