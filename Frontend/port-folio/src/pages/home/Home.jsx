import React from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Hero from "../../components/hero/Hero";
import Skills from "../../components/skills/Skills";
import { Projects } from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
