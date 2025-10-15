"use client";

import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff5f0;
  padding: 8vh 8vw;

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
  background: white;
  padding: 2rem 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  input,
  textarea {
    width: 100%;
    padding: 1rem 1.4rem;
    border-radius: 0.8rem;
    border: 1px solid #ddd;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: #ff4d42;
    }

    &::placeholder {
      color: #999;
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
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e63933;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    input,
    textarea {
      font-size: 0.95rem;
    }
  }
`;
