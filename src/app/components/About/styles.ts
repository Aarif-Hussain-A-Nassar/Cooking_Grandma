"use client";

import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff4d42;
  padding: 5vh 5vw;
`;

export const Content = styled.div`
  max-width: 900px;
  text-align: center;
  color: #ffffff;

  @media (min-width: 768px) {
    text-align: left;
  }

  h1 {
    font-size: 6vw;
    font-weight: 700;
    margin-bottom: 4vh;

    @media (min-width: 768px) {
      font-size: 3vw;
    }

    @media (min-width: 1200px) {
      font-size: 2.2vw;
    }
  }

  p {
    font-size: 3.8vw;
    line-height: 1.7;
    color: #ffffff;
    margin-bottom: 3vh;

    @media (min-width: 768px) {
      font-size: 1.5vw;
    }

    @media (min-width: 1200px) {
      font-size: 1.1vw;
    }

    span {
      font-weight: 600;
      color: #ffffff;
    }
  }
`;
