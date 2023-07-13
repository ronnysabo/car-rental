import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useState } from "react";

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <div className="d-flex justify-content-center">
      <Navbar
        variant="dark"
        expand="md"
        expanded={expanded}
        className="p-4 w-75"
      >
        <Navbar.Brand
          className="text-primary"
          as={NavLink}
          to="/"
          onClick={closeNavbar}
        >
          Logo
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          className="bg-primary"
        />

        <Navbar.Collapse className="text-primary">
          <Nav className="ms-auto align-items-center" onClick={closeNavbar}>
            <Nav.Link
              className="text-primary"
              as={NavLink}
              to="/"
              activeClassName="active"
            >
              Home
            </Nav.Link>
            <Nav.Link className="text-primary" as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-primary" as={NavLink} to="/Testimonial">
              Testimonials
            </Nav.Link>
            <Nav.Link className="text-primary" as={NavLink} to="/Ourteam">
              Our Teamsss
            </Nav.Link>
            <Nav.Link className="text-primary">
              <Button>Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
