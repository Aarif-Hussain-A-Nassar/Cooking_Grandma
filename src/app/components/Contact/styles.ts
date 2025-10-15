"use client";

import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg);
  color: var(--heading-color);
  padding: 8vh 8vw;
  transition: background-color 0.5s, color 0.5s;

  h2 {
    font-size: 2.5rem;
    color: #ff4d42;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 600px;
  background: var(--card-bg);
  color: var(--heading-color);
  padding: 2rem 3rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 77, 66, 0.4);
  transition: background-color 0.5s, color 0.5s, box-shadow 0.5s;

  /* ✅ Always glowing in both themes */
  box-shadow:
    0 0 15px rgba(255, 77, 66, 0.4),
    0 0 30px rgba(255, 77, 66, 0.25),
    0 0 45px rgba(255, 77, 66, 0.15);

  input,
  textarea {
    width: 100%;
    padding: 1rem 1.4rem;
    border-radius: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: var(--card-bg);
    color: var(--heading-color);
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease, background-color 0.5s, color 0.5s,
      box-shadow 0.3s;

    &:focus {
      border-color: #ff4d42;
      box-shadow: 0 0 8px rgba(255, 77, 66, 0.5);
    }

    &::placeholder {
      color: var(--text-secondary);
    }
  }

  textarea {
    resize: none;
    height: 150px;
  }

  button {
    padding: 1rem 2rem;
    background-color: #ff4d42;
    color: white;
    border: none;
    border-radius: 0.8rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background-color: #e63933;
      box-shadow:
        0 0 10px rgba(255, 77, 66, 0.6),
        0 0 20px rgba(255, 77, 66, 0.3);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    input,
    textarea {
      font-size: 0.95rem;
    }
  }
`;
