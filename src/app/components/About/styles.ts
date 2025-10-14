"use client";

import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ff4d42;
  color: #fff;
  padding: 5vh 8vw;
  gap: 4vw;
  overflow-x: hidden;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 6vh 5vw;
    text-align: center;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 2rem;
    justify-content: center;
  }
`;

export const Content = styled.div`
  max-width: 600px;
  color: #ffffff;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.7;
    margin-bottom: 1.5rem;

    span {
      font-weight: 600;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1; /* ✅ ensures responsive square container */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    max-width: 350px;
    aspect-ratio: 1 / 1;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;