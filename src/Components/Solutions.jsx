import React from "react";
import { solutionCards } from "../utils/PageData";

const Solutions = () => {
  return (
    <div class="container px-4 py-5 my-5" id="custom-cards">
      <div className="text-center">
        <h2 className="display-3 fw-bold text-color">The Complete Solutions</h2>
        <p className="text-color-light my-3 fs-4">
          Plug and Play solution to automate your trading ideas.
        </p>
      </div>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-5 py-5">
        {solutionCards.map((card, index) => {
          return (
            <div className="col" key={index}>
              <div className="card px-3 solCard" style={{ width: "18rem;" }}>
                <img
                  src={card.img}
                  className="card-img-top p-5 pb-3"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-color fs-4 mb-4">
                    {card.title}
                  </h5>
                  <p className="card-text text-color-light">{card.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Solutions;
