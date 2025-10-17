import About from "../About/About";
import Bottom from "../Bottom/Bottom";
import Contact from "../Contact/Contact";
import { Hero } from "../Hero/Hero";
import Products from "../Products/Products";
import Who from "../Who/Who";
import { MainContainer } from "./styles";

export const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <About />
      <Products />
      <Who />
      <Contact/>
      <Bottom />
    </MainContainer>
  );
};
