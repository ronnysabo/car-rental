import React from "react";
import hej from "../images/bgx6.png";

function NavSection() {
  return (
    <>
      <section
        className="about-section mb-5"
        style={{
          backgroundImage: `url(${hej})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "25rem",

          width: "100%",
          backgroundPosition: "50%",
          backgroundPositionY: "-100px",

          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      ></section>
    </>
  );
}

export default NavSection;
