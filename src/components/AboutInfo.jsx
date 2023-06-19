import React from "react";
import carLand from "../images/carDeal.png";

function AboutInfo() {
  return (
    <>
      <div
        className="container"
        style={{ marginBottom: "12rem", marginTop: "5rem" }}
      >
        <h2 className="text-secondary">/About</h2>
      </div>
      <section className="my-5 py-5">
        <div className="container">
          <div className="row justify-content-around">
            <div className="d-flex justify-content-center col-lg-6 col-md-12 my-5">
              <img
                className="img-fluid"
                src={carLand}
                alt="carland"
                style={{ height: "auto", width: "auto" }}
              ></img>
            </div>
            <div className="justify-content-center col-lg-6 col-md-12 py-5">
              <h3>
                About <span className="text-primary">our company</span>
              </h3>
              <p className="text-secondary">
                Welcome to XYZ Car Rentals, your premier destination for
                reliable and affordable car rental services. With a passion for
                providing exceptional experiences on the road, we take pride in
                offering a wide range of vehicles to suit your transportation
                needs. <br></br>
                <br></br> Whether you're traveling for business or pleasure, we
                are dedicated to ensuring your journey is comfortable,
                convenient, and enjoyable. <br></br>
                <br></br>At XYZ Car Rentals, we understand the importance of
                flexibility and convenience. Our extensive fleet of
                well-maintained vehicles includes sedans, SUVs, luxury cars, and
                more, allowing you to choose the perfect vehicle for any
                occasion. We strive to meet your specific requirements, whether
                it's a family vacation, a business trip, or simply exploring the
                beauty of our surroundings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutInfo;
