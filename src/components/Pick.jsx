import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import bgCity from "../images/bg_building.png";
import { carData } from "../CarOptions";

function Pick() {
  const [selectedButton, setSelectedButton] = useState("Audi A1");
  const [selectedCar, setSelectedCar] = useState(carData[0].img);

  const handleButtonClick = (buttonName, img) => {
    setSelectedButton(buttonName);
    setSelectedCar(img);
  };

  const getSelectedCarData = () => {
    return carData.find((car) => car.name === selectedButton);
  };

  return (
    <>
      <div className="bg-city container text-center my-5 py-5">
        <img
          className="bg-pic position-absolute end-0 top-200"
          style={{ zIndex: "-2" }}
          src={bgCity}
          alt="hej"
        ></img>
        <div className="pick-container">
          <h4 className="mt-1">Car models</h4>
          <h2>
            <strong>Class, safety, comfort</strong>
          </h2>
        </div>
        <div className="box d-lg-flex justify-content-between py-5 my-5">
          <div className="pick-car-buttons d-grid gap-2">
            {carData.map((car) => (
              <Button
                style={{ fontSize: "1.2rem" }}
                key={car.name}
                variant={selectedButton === car.name ? "primary" : "light"}
                onClick={() => handleButtonClick(car.name, car.img)}
              >
                {car.name}
              </Button>
            ))}
          </div>
          <div className="car-pics mb-4 mb-md-0">
            {(selectedCar || selectedCar === carData[0].img) && (
              <img src={selectedCar} alt="Car" className="img-fluid" />
            )}
          </div>
          <div className="car-info">
            {selectedCar && getSelectedCarData() && (
              <>
                <div className="container">
                  <Row>
                    <Col className="border border-secondary">
                      <h4>{getSelectedCarData().price}€ / per day</h4>
                    </Col>
                  </Row>

                  <Row className="d-flex align-items-center">
                    <Col className="border border-secondary">
                      <p className="py-2 m-0" style={{ fontSize: "1.2rem" }}>
                        Model:
                      </p>
                    </Col>

                    <Col className="border border-secondary">
                      <p className="py-2 m-0" style={{ fontSize: "1.2rem" }}>
                        {getSelectedCarData().model}
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="border border-secondary">
                      <p className="py-2 m-0" style={{ fontSize: "1.2rem" }}>
                        Year:
                      </p>
                    </Col>

                    <Col className="border border-secondary">
                      <p className="py-2 m-0" style={{ fontSize: "1.2rem" }}>
                        {getSelectedCarData().year}
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="border border-secondary">
                      <p className="p-2 m-0" style={{ fontSize: "1.2rem" }}>
                        Fuel:
                      </p>
                    </Col>

                    <Col className="border border-secondary">
                      <p className="py-2 m-0" style={{ fontSize: "1.2rem" }}>
                        {getSelectedCarData().fuel}
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="border border-secondary">
                      <p className="p-2 m-0" style={{ fontSize: "1.2rem" }}>
                        ID:
                      </p>
                    </Col>

                    <Col className="border border-secondary">
                      <p className="py-2 m-0" style={{ fontSize: "1.2rem" }}>
                        {getSelectedCarData().id}
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="p-0 my-2">
                      <Button
                        style={{ fontSize: "1.2rem" }}
                        onClick={() =>
                          document
                            .getElementById("booking-section")
                            .scrollIntoView()
                        }
                        className="w-100"
                      >
                        Rent now
                      </Button>
                    </Col>
                  </Row>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pick;
