import person1 from "../images/persona1.png";
import person2 from "../images/persona2.png";
import "../styles/testimonials.css";

function Testimonials() {
  return (
    <>
      <section className="testimonials my-3 bg-light">
        <div>
          <div className="d-flex flex-column text-center container align-items-center justify-content-center">
            <h4 className="mt-5 pt-5">Our reviews</h4>
            <h1 className="mb-3">
              The <span className="text-primary">testimonials</span> by clients
            </h1>
            <p className="w-50 mb-5">
              Real people, real experiences. Hear what our valued customers have
              to say about their journey with us. From unforgettable adventures
              to exceptional service, their words speak volumes. Discover the
              stories that inspire and trust the testimonials that showcase our
              commitment to excellence.
            </p>
          </div>

          <div className="container d-flex justify-content-around pb-5 my-5 flex-wrap">
            <div className="card left-card col-lg-4 col-md-12 text-center flex-column mb-5">
              <div>
                <p
                  className="p-4"
                  style={{ fontSize: "1rem", fontStyle: "italic" }}
                >
                  "I couldn't be happier with the car service provided by this
                  company. From the moment I made the reservation to the
                  drop-off, everything was seamless. The vehicle was clean and
                  comfortable, and the driver was professional and courteous.
                  The service exceeded my expectations, and I highly recommend
                  them for anyone looking for a reliable and hassle-free car
                  service."
                </p>
                <p>
                  <strong>Pedro, 41</strong>
                </p>
              </div>
              <div>
                <div className="pb-4">
                  <img src={person1} alt=""></img>
                </div>
              </div>
            </div>

            <div className="card right-card col-lg-4 col-md-12 text-center flex-column mb-5">
              <div>
                <p
                  className="p-4"
                  style={{ fontSize: "1rem", fontStyle: "italic" }}
                >
                  "I recently used this car service for a business trip, and I
                  was impressed by their exceptional service. The driver arrived
                  promptly, and the vehicle was luxurious and well-maintained.
                  Throughout the journey, the driver displayed excellent
                  knowledge of the area and ensured a smooth and comfortable
                  ride. They have attention to detail and commitment to customer
                  during their journey. "
                </p>
                <p>
                  <strong>Katy, 36</strong>
                </p>
              </div>
              <div>
                <div className="pb-4">
                  <img src={person2} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
