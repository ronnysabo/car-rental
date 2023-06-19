import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between py-3 my-4 border-top">
        <div className="col-md-3 py-4">
          <h4 className="pb-2">Car Rent</h4>
          <ul className="flex-column p-0">
            <li className="text-secondary">
              We provide an extensive selection of vehicles to fulfill all your
              driving requirements. Our inventory includes the ideal car that
              perfectly matches your needs
            </li>
            <li>
              <Link to="/">
                <i className="fa-solid fa-phone"></i> 123 123 123
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa-solid fa-envelope"></i> rentacar@carrent.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 py-4 text-center">
          <h4 className="pb-2">Company</h4>
          <ul className="flex-column p-0 gap-3">
            <li>
              <Link to="/">Halmstad</Link>
            </li>
            <li>
              <Link to="/">New York</Link>
            </li>
            <li>
              <Link to="/">Copenhagen</Link>
            </li>
            <li>
              <Link to="/">Ao Nang</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 py-4 text-end">
          <h4 className="pb-2">Working hours</h4>
          <ul className="flex-column p-0 gap-3">
            <li>Mon-Fri: 09:00-16:00</li>
            <li>Sat: 10:00-15:00</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
