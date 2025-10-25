"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import instagram from "../../../../public/instagram.svg";
import facebook from "../../../../public/facebook-round-color-icon.svg";
import youtube from "../../../../public/youtube-color-icon.svg";
import whatsapp from "../../../../public/whatsapp.svg";
import gmail from "../../../../public/gmail.svg";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 3rem 10%;
  background-color: var(--card-bg);
  color: var(--text-secondary);
  font-family: "Red Hat Display", sans-serif;
  border-top: 1px solid rgba(128, 128, 128, 0.2);
  transition: all 0.5s ease;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2.5rem;
    padding: 2.5rem 8%;
  }
`;

/* ---------- LEFT SECTION ---------- */
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  p {
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
    font-size: 1.3rem;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    a {
      display: flex;
      align-items: center;
    }

    span {
      display: flex;
      align-items: center;
      transition: transform 0.3s ease, filter 0.3s ease;
      filter: drop-shadow(0 0 5px rgba(255, 77, 66, 0.5));

      &:hover {
        filter: brightness(1.2) drop-shadow(0 0 10px rgba(255, 77, 66, 0.8));
        transform: scale(1.1);
      }
    }
  }

  .email {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-top: 0.4rem;
    font-size: 1.4rem;
    color: var(--text-primary);
    flex-wrap: wrap;

    a {
      color: var(--text-primary);
      text-decoration: none;
      transition: color 0.3s ease, text-shadow 0.3s ease;

      &:hover {
        color: #ff4d42;
        text-shadow: 0 0 6px rgba(255, 77, 66, 0.7);
      }
    }
  }

  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1.5rem;

    .email {
      justify-content: center;
    }
  }
`;

/* ---------- MIDDLE SECTION ---------- */
const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h4 {
    font-weight: 800;
    font-size: 1.3rem;
    color: var(--text-primary);
    margin: 0;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;

    a {
      color: var(--text-primary);
      text-decoration: none;
      font-size: 1.2rem;
      transition: color 0.3s ease;

      &:hover {
        color: #ff4d42;
      }
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1.5rem;

    .links {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    h4 {
      font-size: 1.2rem;
    }
  }
`;

/* ---------- RIGHT SECTION ---------- */
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  gap: 2rem;
  margin-top: 0.5rem;

  span {
    font-size: 1.4rem;
  }

  a {
    color: #ff4d42;
    text-decoration: none;
    font-weight: 700;
    text-shadow: 0 0 8px rgba(255, 77, 66, 0.6);
    transition: text-shadow 0.3s ease, filter 0.3s ease;

    &:hover {
      filter: brightness(1.2);
      text-shadow: 0 0 10px rgba(255, 77, 66, 0.9),
        0 0 20px rgba(255, 77, 66, 0.5);
    }
  }

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-top: 0;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      {/* LEFT SECTION */}
      <LeftSection>
        <p>Follow us on</p>
        <div className="icons">
          <a
            href="https://www.instagram.com/cookinggrandma_?igsh=MXFnaTdqM3Q2Y2c5dg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <Image src={instagram} alt="Instagram" width={26} height={26} />
            </span>
          </a>

          <a
            href="https://www.facebook.com/share/1ZrzPrLTii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <Image src={facebook} alt="Facebook" width={20} height={20} />
            </span>
          </a>

          <a
            href="https://youtube.com/@cookinggrandma2025?si=lWQl0i3na7qa7HoP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <Image src={youtube} alt="YouTube" width={26} height={26} />
            </span>
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B916238908002&text=Hello,+I+would+like+to+order."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <Image src={whatsapp} alt="WhatsApp" width={26} height={26} />
            </span>
          </a>
        </div>

        <div className="email">
          <Image src={gmail} alt="Gmail" width={22} height={22} />
          <a href="mailto:cookinggrandma2025@gmail.com">
            cookinggrandma2025@gmail.com
          </a>
        </div>
      </LeftSection>

      {/* MIDDLE SECTION */}
      <MiddleSection>
        <h4>Quick Links</h4>
        <div className="links">
          <Link href="#home">Home</Link>
          <Link href="#products">Products</Link>
          <Link href="#who">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </MiddleSection>

      {/* RIGHT SECTION */}
      <RightSection>
        <span>
          © {new Date().getFullYear()} Cooking Grandma. All rights reserved.
        </span>
        <span>
          Website built by{" "}
          <a
            href="https://www.instagram.com/buil_dmybrand?igsh=eHVtNWFnZW5uOTBq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Two Dots Official
          </a>
        </span>
      </RightSection>
    </FooterContainer>
  );
}
