import React from "react";
import Count from "./Count";
import Features from "./Features";
import NoCodeFeature from "./NoCodeFeature";
import IdeaMindFeature from "./IdeaMindFeature";
import Connection from "./ConnectionFeature";
import Solutions from "./Solutions";
import Hero from "./Hero";
import Pricing from "./Pricing";

const Main = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-3 text-light main-hero">
      <Hero />
      {/* Countup  */}
      <Count />
      {/* Features */}
      <section id="features">
        <h2 className="display-4 fw-bold text-color text-center mt-5">
          Everything a Retail trader needs in <br />
          one platform
        </h2>

        <Features />
        <NoCodeFeature />
        <Connection />
        <IdeaMindFeature />
        <Solutions />
      </section>

      <section id="pricing">
        <Pricing />
      </section>
    </div>
  );
};

export default Main;
