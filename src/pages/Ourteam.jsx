import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavSection from "../components/NavSection";
import Team from "../components/Team";

function Ourteam() {
  return (
    <>
      <NavSection />
      <div
        className="container"
        style={{ marginBottom: "15rem", marginTop: "5rem" }}
      >
        <h2 className="text-secondary">/Our Team</h2>
      </div>
      <Team />
      <div style={{ marginTop: "8rem" }}>
        <Banner />
      </div>
      <Footer />
    </>
  );
}

export default Ourteam;
