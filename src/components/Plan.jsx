import smallCar from "../images/small_car.png";
import smallOperator from "../images/small_operator.png";
import smallWheel from "../images/small_wheel.png";

function Plan() {
  return (
    <>
      <section>
        <div className="container-fluid h-auto py-5">
          <div className="box">
            <div className="mt-5">
              <h4 className="text-center">
                Discover the Freedom of Car Rental
              </h4>
              <h2 className="text-center mt-4">
                <strong>Drive your dreams</strong>
              </h2>
            </div>
            <div className="text-center">
              <div className="row">
                <div className="col-lg-4 p-5">
                  <img src={smallCar} alt="small_car"></img>
                  <h3>Choose your car</h3>
                  <p>
                    Discover our extensive range of luxury cars and choose the
                    perfect vehicle for a unique and memorable driving
                    experience. We offer outstanding comfort and style to exceed
                    your expectations.
                  </p>
                </div>
                <div className="col-lg-4 p-5">
                  <img src={smallOperator} alt="small_car"></img>
                  <h3>Booking experience</h3>
                  <p>
                    When booking a car, you have two options: with an operator
                    for personalized assistance, or online for convenience and
                    freedom to explore. Enjoy a seamless booking experience with
                    us.
                  </p>
                </div>
                <div className="col-lg-4 p-5">
                  <img src={smallWheel} alt="small_car"></img>
                  <h3>Memorable adventure</h3>
                  <p>
                    Embark on a world-class driving experience. From
                    breathtaking landscapes to iconic destinations, our cars
                    offer unparalleled comfort and performance, ensuring every
                    journey is a memorable adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Plan;
