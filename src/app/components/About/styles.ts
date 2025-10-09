"use client";

import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5vh 8vw;

  /* Solid pitch black background */
  background-color: #ff4d42; 
  position: relative;
  color: #fff;
  overflow: hidden;

  /* Remove the overlay since we don't need it with solid black */
  &::before {
    content: none;
  }
`;

export const Content = styled.div`
  position: relative; /* ensures content stays above background */
  z-index: 2;
  max-width: 90vw;
  text-align: left;
  color: #ffffff;

  h1 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 4vh;
    line-height: 1.2;
  }

  p {
    font-size: clamp(0.9rem, 2.5vw, 1.3rem);
    line-height: 1.7;
    color: #ffffff;
    margin-bottom: 3vh;

    span {
      font-weight: 600;
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    p {
      line-height: 1.6;
      margin-bottom: 2.5vh;
    }
  }

  @media (min-width: 1440px) {
    max-width: 1000px;

    h1 {
      font-size: 2.2vw;
    }

    p {
      font-size: 1.1vw;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 6vw;
    }

    p {
      font-size: 4vw;
    }
  }
`;
