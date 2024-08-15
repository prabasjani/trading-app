import React from "react";
import Dashboard from "../assets/algofox/dashboard.png";

const Hero = () => {
  return (
    <div className="text-center mt-0">
      <h2 className="display-2 fw-bold text-center">
        Automate your way to <br />
        success with Algofox.
      </h2>
      <p className="fs-4 fw-semibold mt-4">
        India's fastest web based Algotrading platform
      </p>
      <button
        className="btn btn-lg btn-outline-primary text-light border border-light my-4"
        type="button"
      >
        Sign up
      </button>
      <p className="fs-6 fw-semibold">
        &#10003; 7-day free trial. No credit card needed.
      </p>

      <img src={Dashboard} alt="" className="w-100 mt-5" />
    </div>
  );
};

export default Hero;
