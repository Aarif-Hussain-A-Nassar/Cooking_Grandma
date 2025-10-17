import About from "../About/About";
import Contact from "../Contact/Contact";
import { Hero } from "../Hero/Hero";
import Products from "../Products/Products";
import SmoothScroll from "../SmoothScroll";
import Who from "../Who/Who";
import { MainContainer } from "./styles";

export const Main = () => {
  return (
    <MainContainer>
      <SmoothScroll />
      <Hero />
      <About />
      <Products />
      <Who />
      <Contact />
    </MainContainer>
  );
};
