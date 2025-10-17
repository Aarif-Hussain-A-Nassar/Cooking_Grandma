"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // check if it's an anchor link with #
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement;
      if (!anchor) return;

      e.preventDefault();
      const id = anchor.getAttribute("href")?.substring(1);
      const section = id ? document.getElementById(id) : null;
      section?.scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
