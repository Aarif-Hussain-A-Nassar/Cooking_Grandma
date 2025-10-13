"use client";

import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8vh 8vw;
  min-height: 100vh;
  background-color: #fff;
  color: #000;
  gap: 5vw;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 6vh 4vw;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .grandma-image {
    width: 100%;
    height: auto;
    max-width: 450px;
    border-radius: 20px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: #000;

  h1 {
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: 700;
    margin-bottom: 2rem;
  }

  p {
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    line-height: 1.7;
    margin-bottom: 1.5rem;

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
