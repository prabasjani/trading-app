import React, { useEffect, useState } from "react";
import { Switch } from "antd";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <h2 className="display-3 fw-bold text-color">Simple, Flexible Pricing</h2>
      <div className="d-flex align-items-center gap-2 justify-content-center my-4">
        <p className="fs-5 text-color mb-0">Billed monthly </p>
        <Switch defaultChecked={false} onClick={toggler} />
        <p className="fs-5 text-color mb-0">Billed yearly</p>
      </div>
      <p className="fs-6 text-primary">Save up to 37% with yearly billing</p>

      {/* card */}
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-5 py-5">
        <div className="col">
          <div
            class="card text-center mb-3 p-4 shadow-lg rounded priceCard"
            style={{ width: "18rem;" }}
          >
            <div class="card-body">
              <h3 class="card-title fs-2 fw-bold">Free</h3>
              <p class="card-text text-color-light my-4">
                7 DAYS UNLIMITED USAGE (Once per user)
              </p>
              <h3 class="card-title fs-1 fw-bold">Rs. 0</h3>
              <p class="card-text text-color-light fs-4">forever</p>
              <a href="#" class="btn btn-lg btn-primary w-100">
                Get started -it's free
              </a>
              <p className="fs-6 text-color-light my-3">
                No credit card required
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            class="card text-center mb-3 p-4 shadow-lg rounded priceCard"
            style={{ width: "18rem;" }}
          >
            <div class="card-body">
              <h3 class="card-title fs-2 fw-bold">Gold</h3>
              <p class="card-text text-color-light my-4">
                Connect and automate any broker and unlimited strategy.
              </p>
              <h3 class="card-title fs-1 fw-bold">
                Rs. {toggle ? 15000 : 2000}
              </h3>
              <p class="card-text text-color-light fs-4">
                {toggle ? "per year" : "per month"}
              </p>
              <a href="#" class="btn btn-lg btn-primary w-100">
                Start 7-day trial
              </a>
              <p className="fs-6 text-color-light my-3">
                No credit card required
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            class="card text-center mb-3 p-4 shadow-lg rounded priceCard"
            style={{ width: "18rem;" }}
          >
            <div class="card-body">
              <h3 class="card-title fs-2 fw-bold">PRO</h3>
              <p class="card-text text-color-light my-4">
                Pay a flat fees per executed order.
              </p>
              <h3 class="card-title fs-1 fw-bold mt-5">Rs. 10</h3>
              <p class="card-text text-color-light fs-4">per order</p>
              <a href="#" class="btn btn-lg btn-primary w-100">
                Start 7-day trial
              </a>
              <p className="fs-6 text-color-light my-3">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="fs-6 text-color-light my-3 text-center">
        The above prices do not include applicable taxes based on your billing
        address. The final price will be displayed on the checkout page, before
        the payment is completed.
      </p>
    </div>
  );
};

export default Pricing;
