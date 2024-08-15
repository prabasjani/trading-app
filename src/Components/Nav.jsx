import React, { useState } from "react";
import logo from "../assets/algofox/algofox-logo-w.png";

const Nav = () => {
  const [blurNav, setBlurNav] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setBlurNav(true);
    } else {
      setBlurNav(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        blurNav ? "active" : null
      }`}
      aria-label="Light Offcanvas navbar large"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width={350} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 gap-5 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faqs">
                  FAQ's
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Algofox Bridges
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Our courses
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ready made codes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option Genie
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign in
                </a>
              </li>
              <li className="btn btn-outline-primary">
                <a className="nav-link" href="#">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
