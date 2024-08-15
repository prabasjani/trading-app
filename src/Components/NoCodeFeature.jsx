import React from "react";
import NoCodeLogo from "../assets/algofox/No-Code-Look.gif";

const NoCodeFeature = () => {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
          <p className="fs-6 fw-bold my-4 text-color-light text-uppercase">
            One-Stop Solution
          </p>
          <h1 className="display-5 fw-bold text-color lh-sm">
            No code automation and real-time execution.
          </h1>
          <p className="text-color-light my-4 fs-5">
            Connect Algofox with any platform like{" "}
            <span className="fw-bold">
              Tradingview, Amibroker, MT4,MT5, Chartink
            </span>{" "}
            and more to fully automate your ideas.
          </p>
          <ul className="text-color-light fs-5">
            <li>
              Use Tradingview and chartink no code structures to build your
              setup and automate it.
            </li>
            <li className="my-3">
              Get complex strategies coded from our developers and deploy on
              platform of your choice.
            </li>
          </ul>
        </div>
        <div className="col-lg-4  p-0">
          <img className="rounded-lg-3" src={NoCodeLogo} alt="" width="520" />
        </div>
      </div>
    </div>
  );
};

export default NoCodeFeature;
