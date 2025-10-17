"use client";

import styled from "styled-components";

export const Section = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff4d4d;
  padding: 1.5rem 3rem;
  color: #fff;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .icons {
    display: flex;
    gap: 1rem;
  }

  /* Removed the filter so icons keep their original colors */
  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }
`;

export const Mail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
`;

export const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #222;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
