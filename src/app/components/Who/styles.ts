"use client";

import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5vh 8vw;

  /* Changed background to white */
  background-color: #ffffff; 
  position: relative;
  color: #000; /* change text color to dark for contrast */
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative; 
  z-index: 2;
  max-width: 90vw;
  text-align: left;
  color: #000; /* change text color to dark */

  h1 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 4vh;
    line-height: 1.2;
  }

  p {
    font-size: clamp(0.9rem, 2.5vw, 1.3rem);
    line-height: 1.7;
    margin-bottom: 3vh;

    span {
      font-weight: 600;
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
