"use client";

import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ff4d42;
  color: #fff;
  padding: 5vh 8vw;
  overflow: hidden;
  gap: 4vw;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4vh 5vw;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* On small screens, make sure it expands fully */
  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 600px;
  color: #ffffff;
  text-align: left;

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
  height: 70vh;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  /* Make sure the image stays visible on mobile */
  @media (max-width: 768px) {
    height: 55vh;
    width: 100%;
  }

  @media (max-width: 480px) {
    height: 50vh;
  }
`;