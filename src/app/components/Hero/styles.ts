import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  z-index: 2; /* ✅ keep hero above background but below overlayed UI */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: calc(var(--header-height, 6rem) + 2rem) 2rem 4rem 2rem;
  color: var(--heading-color);
  transition: all 0.3s ease;

  .hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    max-width: 1300px;
    width: 100%;

    .text {
      flex: 1;
      z-index: 3; /* ensures text is always above the image */
      position: relative;

      h1 {
        font-size: clamp(3rem, 5vw, 5rem);
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        letter-spacing: -0.02em;
      }

      p {
        font-size: clamp(1.1rem, 2vw, 1.5rem);
        line-height: 1.8;
        margin-bottom: 2.2rem;
        color: var(--text-secondary, #555);
        max-width: 550px;
        word-wrap: break-word;
      }

      button {
        background-color: #ff4d42;
        color: #fff;
        border: none;
        border-radius: 40px;
        padding: 1rem 2.8rem;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          filter: brightness(0.9);
        }

        &:active {
          transform: scale(0.96);
        }
      }
    }

    .image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 3000; /* ✅ ensures image is ABOVE navbar when animating */

      img {
        width: 90%;
        height: auto;
        border-radius: 12px;
        position: relative;
      }
    }
  }

  @media (max-width: 992px) {
    .hero-content {
      flex-direction: column-reverse;
      text-align: center;
      gap: 3rem;

      .text {
        h1 {
          font-size: 3rem;
        }

        p {
          font-size: 1.2rem;
          max-width: 90%;
          margin: 0 auto 2rem;
        }

        button {
          padding: 0.9rem 2.4rem;
          font-size: 1rem;
        }
      }

      .image {
        z-index: 2000; /* ✅ also above navbar in mobile */
      }

      .image img {
        width: 70%;
        max-width: 400px;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;

    .hero-content {
      gap: 2rem;

      .text {
        h1 {
          font-size: 2.2rem;
          line-height: 1.3;
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
          max-width: 70%;
        }

        button {
          padding: 0.8rem 2rem;
          font-size: 0.95rem;
        }
      }

      .image img {
        width: 85%;
      }
    }
  }
  @media (max-width: 992px) {
    .image {
      z-index: 3000;
      pointer-events: none;
    }
    .image img {
      pointer-events: auto;
    }
  }
`;
