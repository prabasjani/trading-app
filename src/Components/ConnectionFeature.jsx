import React from "react";
import ConnectionLogo from "../assets/algofox/ConnectyourBroker.gif";

const Connection = () => {
  return (
    <div className="container my-5 py-4">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
        <div className="col-lg-6  p-0">
          <img
            className="rounded-lg-3"
            src={ConnectionLogo}
            alt=""
            width="620"
          />
        </div>
        <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
          <h4 className="fs-3 fw-bold text-color">Solution for Every trader</h4>
          <p className="text-color-light my-4 fs-5">
            We provide automation solutions via{" "}
            <span className="fw-bold">
              Chartink, Amibroker, MT4, MT5, Tradingview, Excel, Python, REST
              APIs
            </span>{" "}
            and more to ensure any trader can automate trades with Algofox.
          </p>
          <h4 className="fs-3 fw-bold text-color">Connect your Broker</h4>
          <p className="text-color-light my-4 fs-5">
            <span className="fw-bold">
              Algofox is connected to 50+ Indian brokers
            </span>{" "}
            and provide API based automation without any coding.
          </p>
          <li className="my-3 fs-5 text-color-light">
            Just choose your broker and generate token, its that simple.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Connection;
