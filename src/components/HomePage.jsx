import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;