import "../styles/booking.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CarAudi from "../images/audia1.jpg";
import carBMW from "../images/bmw3seriesRed.png";
import vwTiguan from "../images/vwTiguan.png";
import mazdaRX8 from "../images/mazdarx8.png";
import mercedesE from "../images/mercaEseries.png";

function CarBook() {
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [resultText, setResultText] = useState("");
  const [alert, setAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [carImg, setCarImg] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //value of select options (booking)
  const handleCarType = (event) => {
    setCarType(event.target.value);
    setCarImg(event.target.value);
  };
  const handlePickUp = (event) => {
    setPickUp(event.target.value);
  };
  const handleDropOff = (event) => {
    setDropOff(event.target.value);
  };
  const handlePickUpDate = (event) => {
    setPickUpDate(event.target.value);
  };
  const handleDropOffDate = (event) => {
    setDropOffDate(event.target.value);
  };

  //based on value show car img

  let imgUrl;
  switch (carImg) {
    case "Audi A1":
      imgUrl = CarAudi;
      break;
    case "BMW 3 series":
      imgUrl = carBMW;
      break;
    case "Volkswagen Tiguan":
      imgUrl = vwTiguan;
      break;
    case "Mazda RX-8":
      imgUrl = mazdaRX8;
      break;
    case "Mercedes E series":
      imgUrl = mercedesE;
      break;
    default:
      imgUrl = "";
  }

  //modal

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // modal popup validation (booking)
  const handleValidation = () => {
    let text;
    if (
      carType === "" ||
      pickUp === "" ||
      dropOff === "" ||
      pickUpDate === "" ||
      dropOffDate === ""
    ) {
      text = "Input not valid";
      setAlert(true);
    } else {
      handleOpenModal();
      setAlert(false);
    }
    setResultText(text);
  };

  //Function to handle confirm button

  const handleConfirmClick = () => {
    setConfirm("Book confirmed - check your email!");
    handleCloseModal();
  };

  const closeConfirm = () => {
    setConfirm("");
  };

  const closeAlert = () => {
    setAlert(false);
  };

  return (
    <>
      <section
        id="booking-section"
        className="booking-section my-5 pb-5"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="book-content-box p-4">
                <h2 className="mb-3">Book Car</h2>
                <div
                  className={`alert alert-danger ${alert ? "" : "d-none"}`}
                  role="alert"
                  onClick={closeAlert}
                >
                  <strong>{resultText}</strong>
                </div>

                <div
                  className={`alert alert-success ${confirm ? "" : "d-none"}`}
                  role="alert"
                  onClick={closeConfirm}
                >
                  <strong>{confirm}</strong>
                </div>

                <form onSubmit={handleSubmit} className="row">
                  <div className="col-md-6 col-sm-12 col-lg-4 mb-3">
                    <div>
                      <label>
                        <i className="fa-solid fa-car"></i> &nbsp; Select Your
                        Car Type <b>*</b>
                      </label>
                      <select
                        className="form-control"
                        name="carType"
                        value={carType}
                        onChange={handleCarType}
                      >
                        <option>Select car type</option>
                        <option value="Audi A1">Audi A1</option>
                        <option value="BMW 3 series">BMW 3 series</option>
                        <option value="Volkswagen Tiguan">
                          Volkswagen Tiguan
                        </option>
                        <option value="Mazda RX-8">Mazda RX-8</option>
                        <option value="Mercedes E series">
                          Mercedes E series
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12 col-lg-4 mb-3">
                    <div>
                      {" "}
                      <label>
                        <i className="fa-solid fa-car"></i> &nbsp; Pick Up{" "}
                        <b>*</b>
                      </label>
                      <select
                        className="form-control"
                        name="pickUp"
                        value={pickUp}
                        onChange={handlePickUp}
                      >
                        <option>Pick up</option>
                        <option>Halmstad</option>
                        <option>Helsingborg</option>
                        <option>Stockholm</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12 col-lg-4 mb-3">
                    <div>
                      {" "}
                      <label>
                        <i className="fa-solid fa-car"></i> &nbsp; Drop of{" "}
                        <b>*</b>
                      </label>
                      <select
                        className="form-control"
                        value={dropOff}
                        onChange={handleDropOff}
                      >
                        <option>Drop of</option>
                        <option>Laholm</option>
                        <option>Helsingborg</option>
                        <option>Halmstad</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12 col-lg-4 mb-3">
                    <div>
                      {" "}
                      <label>
                        <i className="fa-solid fa-car"></i> &nbsp; Select Pick
                        Up Date <b>*</b>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        value={pickUpDate}
                        onChange={handlePickUpDate}
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12 col-lg-4">
                    <div>
                      {" "}
                      <label>
                        <i className="fa-solid fa-car"></i> &nbsp; Select Drop
                        Off Date <b>*</b>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        value={dropOffDate}
                        onChange={handleDropOffDate}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-lg-4 align-self-center d-flex justify-content-center p-4">
                    <button
                      onClick={handleValidation}
                      className="btn btn-primary w-100"
                    >
                      Book now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        className="d-flex justify-content-center align-items-center"
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{carType}</Modal.Title>
        </Modal.Header>
        <Modal.Header>
          Please check the information carefully before you confirm your
          booking.
        </Modal.Header>
        <Modal.Body>
          {imgUrl && (
            <img
              src={imgUrl}
              alt="car_img"
              style={{ width: "450px", height: "300px" }}
            />
          )}
        </Modal.Body>
        <Modal.Body>
          <div className="d-flex gap-4">
            <div>
              <span>Pick up city:</span> <strong>{pickUp}</strong>
            </div>
            <div>
              <span>Drop off city:</span> <strong>{dropOff}</strong>
            </div>
          </div>
          <div className="d-flex gap-4">
            <div>
              <span>Pick up date:</span> <strong>{pickUpDate}</strong>
            </div>
            <div>
              <span>Drop off date:</span> <strong>{dropOffDate}</strong>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel booking
          </Button>
          <Button variant="success" onClick={handleConfirmClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CarBook;
