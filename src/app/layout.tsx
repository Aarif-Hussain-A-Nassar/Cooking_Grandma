import type { Metadata } from "next";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { GlobalStyle } from "./globals";

export const metadata: Metadata = {
  title: "Cooking Grandma",
  description:
    "Cooking Grandma — bringing authentic traditional flavors like roasted coconut and Malabar tamarind to your kitchen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
