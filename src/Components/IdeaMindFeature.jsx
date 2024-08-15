import React from "react";
import IdeaMindLogo from "../assets/algofox/IdeainMind.png";

const IdeaMindFeature = () => {
  return (
    <div className="container my-5">
      <div className="row pb-0 pe-lg-0 pt-lg-5 align-items-center">
        <div className="col-lg-6 px-0 ">
          <p className="fs-6 fw-bold my-4 text-color-light text-uppercase">
            We help you build your strategies.
          </p>
          <h1 className="display-5 fw-bold text-color lh-sm">
            Have any Idea in Mind ?
          </h1>
          <p className="text-color-light my-4 fs-5">
            Get it built on no code platforms like Chartink, Tradingview or
            Excel sheet or get assistance from our expert developer to build
            your logic in Python, AFL or Pine script.
          </p>
          <div className="">
            <h4 className="text-color fs-3 fw-bold mb-4">Why us ?</h4>
            <p className="text-color-light fs-6">
              <span className="text-primary">&#10003;</span>
              Your strategy will be on third party platforms ensuring full
              privacy.
            </p>
            <p className="text-color-light fs-6">
              <span className="text-primary">&#10003;</span> Orders from the
              platforms are executed in less than 100ms*
            </p>
            <p className="text-color-light fs-6">
              <span className="text-primary">&#10003;</span>
              Dedicated Support team available during market hours for
              assistance.
            </p>
          </div>
        </div>
        <div className="col-lg-5  p-0">
          <img className="rounded-lg-3" src={IdeaMindLogo} alt="" width="620" />
        </div>
      </div>
    </div>
  );
};

export default IdeaMindFeature;
