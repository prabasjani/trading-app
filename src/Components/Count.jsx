import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Count = () => {
  const [countup, setCountUp] = useState(false);
  return (
    <ScrollTrigger
      className="w-100"
      onEnter={() => setCountUp(true)}
      // triggerOnLoad={() => setCountUp(true)}
      onExit={() => setCountUp(false)}
    >
      {countup && (
        <div className="container p-5 my-5 text-color d-flex align-items-center justify-content-between border-bottom">
          <div className="text-center">
            <h2 className="display-4 mb-0 fw-bold">
              <CountUp start={0} end={100} duration={2} delay={0} />
              k+
            </h2>
            <p className="fs-5">order placed everyday</p>
          </div>
          <div className="text-center mb-0r">
            <h2 className="display-4 fw-bold">
              <CountUp start={0} end={50} duration={2} delay={0} />+
            </h2>
            <p className="fs-5">Brokers connected</p>
          </div>
          <div className="text-center">
            <h2 className="display-4 mb-0 fw-bold">
              <CountUp start={0} end={100} duration={2} delay={0} />
              ms
            </h2>
            <p className="fs-5">Ultra low latency</p>
          </div>
        </div>
      )}
    </ScrollTrigger>
  );
};

export default Count;
