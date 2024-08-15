import React from "react";
import { features } from "../utils/PageData";

const Features = () => {
  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-2 g-4 py-5">
      {features.map((feature, index) => {
        return (
          <div className="col d-flex align-items-start" key={index}>
            <feature.logo
              width={150}
              height={150}
              className="text-color text-body-secondary flex-shrink-0 me-3"
            />
            <div>
              <h3 className="fw-bold mb-3 fs-2  text-color">{feature.title}</h3>
              <p className="text-color fs-5">{feature.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
