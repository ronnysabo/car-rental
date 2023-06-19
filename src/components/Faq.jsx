import Accordion from "react-bootstrap/Accordion";
import bmgBg from "../images/bmw-bg1.png";

function Faq() {
  return (
    <>
      <section
        className="py-5 mb-5"
        style={{
          backgroundImage: `url(${bmgBg})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container bg-none">
          <div className="faq-content mb-5">
            <div className="faq-content-title d-flex flex-column text-center">
              <h4 className="mt-5">FAQ</h4>
              <h1>
                <span className="text-primary">Frequently</span> Asked Questions
              </h1>
            </div>
            <div className="container d-flex justify-content-around mt-5">
              <div className="faq-questions w-50 justify-content-center d-flex flex-column">
                <Accordion defaultActiveKey="none">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <p style={{ fontWeight: "bold" }}>
                        What forms of payment are accepted for renting a car?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="text-secondary">
                        We accept various forms of payment for renting a car.
                        You can choose to pay with major credit cards, such as
                        Visa, Mastercard, American Express, and Discover. We
                        also accept debit cards with the Visa or Mastercard
                        logo.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <p style={{ fontWeight: "bold" }}>
                        How do I change or cancel my reservation?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="text-secondary">
                        Retrieve your reservation: Locate the confirmation email
                        or reservation details that were provided to you when
                        you made the reservation. This email typically includes
                        a reservation number or a link to manage your booking.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <p style={{ fontWeight: "bold" }}>
                        Can I rent a car at 18?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="text-secondary">
                        Unfortunately, the minimum age requirement to rent a car
                        is typically 21 years old. However, there may be some
                        exceptions and variations depending on the specific
                        rental company and location.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <p style={{ fontWeight: "bold" }}>
                        Can I return my rental vehicle if the Enterprise
                        location is closed?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="text-secondary">
                        If the Enterprise location is closed, you may still be
                        able to return your rental vehicle by following the
                        after-hours return procedure. Enterprise provides
                        options for returning your rental outside of their
                        regular business hours to ensure convenience for their
                        customers.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
