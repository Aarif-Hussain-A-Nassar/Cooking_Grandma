"use client";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 10%;
  background-color: var(--card-bg);
  color: var(--text-secondary);
  font-family: "Red Hat Display", sans-serif;
  border-top: 1px solid rgba(128, 128, 128, 0.2);
  transition: background-color 0.3s, color 0.3s;

  a {
    color: #ff4d42;
    text-decoration: none;
    font-weight: 700;
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(1.2);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 2rem 5%;
    font-size: 1.4rem;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <span>© {new Date().getFullYear()} Cooking Grandma. All rights reserved.</span>
      <span>
        Website built by{" "}
        <a
          href="https://buildmybrand.in" // change link if needed
          target="_blank"
          rel="noopener noreferrer"
        >
          BuildMyBrand
        </a>
      </span>
    </FooterContainer>
  );
}
