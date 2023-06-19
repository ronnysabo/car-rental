import React from "react";
import AboutInfo from "../components/AboutInfo";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavSection from "../components/NavSection";
import Plan from "../components/Plan";

function About() {
  return (
    <>
      <NavSection />
      <AboutInfo />
      <Plan />
      <Banner />
      <Footer />
    </>
  );
}

export default About;
