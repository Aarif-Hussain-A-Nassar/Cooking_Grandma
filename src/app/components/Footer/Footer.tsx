import React from "react";

export const Footer = () => {
  return (
    <footer>
      <p className="text-sm">
        © {new Date().getFullYear()} Cooking Grandma. All rights reserved.
      </p>
      <p >
        Crafted with ❤️ by Akshay, Arjun & Vishnu
      </p>
    </footer>
  );
};
