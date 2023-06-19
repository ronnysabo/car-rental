import { Button } from "react-bootstrap";
import multiCars from "../images/multiple_cars.png";
import globeIcon from "../images/globe.png";
import moneyIcon from "../images/moneyIcon.png";
import securityIcon from "../images/securityIcon.png";
import tireTrail from "../images/trails 2.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-us">
        <div className="container d-flex flex-column">
          <img
            className="img-fluid mb-4"
            src={multiCars}
            alt="multiple-cars"
          ></img>

          <div className="row mt-3 my-4 col-12 justify-content-around">
            <div className="col-lg-4 col-md-12">
              <div className="text-container-left mb-5 text-lg-start text-center">
                <h4 className="mb-3">Why us?</h4>
                <img
                  className="bg-pic position-absolute end-50 top-200 img-fluid"
                  style={{ zIndex: "-2" }}
                  src={tireTrail}
                  alt="hej"
                ></img>
                <h1 className="mb-3">
                  Unmatched value awaits! Discover extraordinary deals that
                  exceed expectations
                </h1>
                <p>
                  Unlock a world of unbeatable offers, ensuring you get the most
                  bang for your buck. Experience unparalleled quality and
                  savings with our carefully curated selection. Don't settle for
                  less; indulge in the finest deals you'll ever find!
                </p>
                <Button className="px-5 mt-3" style={{ fontSize: "1.2rem" }}>
                  More
                </Button>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex p-0">
              <div className="text-container-right d-flex flex-column justify-content-center align-items-center text-lg-start text-center">
                <div className="d-flex flex-column flex-lg-row mb-4">
                  <div className="d-flex justify-content-center mb-3 align-items-center">
                    <img
                      className=""
                      src={globeIcon}
                      alt=""
                      style={{ height: "5rem", width: "5rem" }}
                    ></img>
                  </div>
                  <div className="align-items-center">
                    <h4 className="px-4">Explore Europe</h4>
                    <p className="px-4">
                      Embark on an unforgettable European adventure, exploring
                      breathtaking landscapes and diverse cultures behind the
                      wheel.
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column flex-lg-row mb-4">
                  <div className="d-flex justify-content-center mb-3 align-items-center">
                    <img
                      className=""
                      src={moneyIcon}
                      alt=""
                      style={{ height: "5rem", width: "5rem" }}
                    ></img>
                  </div>
                  <div className="align-items-center">
                    <h4 className="px-4">Cheap prices</h4>
                    <p className="px-4">
                      Unbeatable bargains that fit your budget. Get the best
                      deals with our incredibly low prices. Don't miss out!
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column flex-lg-row">
                  <div className="d-flex justify-content-center mb-3 align-items-center">
                    <img
                      className=""
                      src={securityIcon}
                      alt=""
                      style={{ height: "5rem", width: "5rem" }}
                    ></img>
                  </div>
                  <div className="align-items-center">
                    <h4 className="px-4">Secure travels</h4>
                    <p className="px-4">
                      Travel with peace of mind. Our top priority is your
                      safety. Enjoy secure journeys with our trusted services
                      and dedicated support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 1200px) {
          .bg-pic {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default ChooseUs;
