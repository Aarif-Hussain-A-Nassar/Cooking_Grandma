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
  /* match body’s timing for smoother sync */
  transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;

  a {
    color: #ff4d42;
    text-decoration: none;
    font-weight: 700;
    text-shadow: 0 0 8px rgba(255, 77, 66, 0.6); /* subtle glow */
    transition: text-shadow 0.3s ease, filter 0.3s ease;

    &:hover {
      filter: brightness(1.2);
      text-shadow:
        0 0 10px rgba(255, 77, 66, 0.9),
        0 0 20px rgba(255, 77, 66, 0.5);
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
      <span>
        © {new Date().getFullYear()} Cooking Grandma. All rights reserved.
      </span>
      <span>
        Website built by{" "}
        <a
          href="https://buildmybrand.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          BuildMyBrand
        </a>
      </span>
    </FooterContainer>
  );
}
