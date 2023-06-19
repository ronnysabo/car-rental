import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavSection from "../components/NavSection";
import Testimonials from "../components/Testimonials";

function Testimonial() {
  return (
    <>
      <NavSection />
      <div
        className="container"
        style={{ marginBottom: "11rem", marginTop: "5rem" }}
      >
        <h2 className="text-secondary">/Testimonial</h2>
      </div>
      <Testimonials />
      <Banner />
      <Footer />
    </>
  );
}

export default Testimonial;
