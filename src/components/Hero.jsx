import bgBlue from "../images/bg-blue-town.png";

function Hero() {
  return (
    <>
      <div
        className="container-fluid p-0 mx-auto"
        style={{ width: "90%", fontSize: "1.5rem" }}
      >
        <section
          className="hero p-5 mx-auto mt-5 d-flex justify-content-center"
          style={{ maxWidth: "100%", height: "70vh" }}
        >
          <img
            className="bg-pic position-absolute end-0 top-0"
            style={{ zIndex: "-2" }}
            src={bgBlue}
            alt="hej"
          ></img>
          <div className="hero-content d-flex position-relative gap-5">
            <div className="hero-text w-auto" style={{ zIndex: "3" }}>
              <h4 className="d-flex flex-column">Ready to hit the road?</h4>
              <h1 className="fw-bold">
                Explore with <span style={{ color: "#0d6efd" }}>ease</span> and{" "}
                <span style={{ color: "#0d6efd" }}>comfort</span> with our car
                rental services.
              </h1>
              <p className="">
                From luxury cars to affordable options, we offer unbeatable
                prices with unlimited miles and flexible pick-up options.
              </p>
              <div className="hero-buttons d-flex gap-4">
                <button className="btn btn-primary w-50">Book</button>
                <button className="btn btn-secondary w-50 p-3">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-image position-relative d-none d-lg-block d-md-block">
              <img
                className=" h-auto end-3 img-fluid"
                src="https://www.freepnglogos.com/uploads/bmw-png/bmw-reviews-and-rating-motor-trend-1.png"
                alt="car"
              ></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
