import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: calc(var(--header-height, 6rem) + 1rem) 1rem 4rem 1rem; /* reduced left & right padding */
  color: var(--heading-color);
  transition: all 0.3s ease;

  .hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    max-width: 1200px;
    width: 100%;

    .text {
      flex: 1;

      h1 {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 1.2rem;

        span {
          color: var(--heading-color);
        }
      }

      p {
        font-size: 1.2rem;
        line-height: 1.7;
        margin-bottom: 2rem;
        color: var(--text-secondary);
        max-width: 500px;
        word-wrap: break-word;
      }

      button {
        background-color: var(--heading-color);
        color: var(--card-bg);
        border: none;
        border-radius: 40px;
        padding: 0.9rem 2.4rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          filter: brightness(0.85);
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

      img {
        max-width: 100%;
        height: auto;
        border-radius: 12px;
      }
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero-content {
      flex-direction: column-reverse;
      gap: 2rem;

      .text {
        text-align: center;

        h1 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1rem;
          max-width: 100%;
        }
      }

      .image img {
        width: 80%;
        height: auto;
      }
    }
  }

  @media (max-width: 480px) {
    padding-left: 0.8rem;
    padding-right: 0.8rem;

    .hero-content .text h1 {
      font-size: 2rem;
    }

    .hero-content .text p {
      font-size: 0.95rem;
    }

    .hero-content .text button {
      padding: 0.7rem 2rem;
      font-size: 0.9rem;
    }

    .hero-content .image img {
      width: 100%;
    }
  }
`;
