import React from "react";
import "./banner.css";

export default function banner() {
  return (
    <>
      <section className="banner">
        <h1>
          We Believe{" "}
          <span>
            Great Design
            <br />
            Make
          </span>{" "}
          Great Business
        </h1>
        <p>
          Prefessional creativity clean featured website template for your
          business Let's start an awesome project now.
        </p>
        <div className="banner-btn">
          <button className="btn-cyan btn-lg">GET MORE</button>
          <button className="btn-cyan btn-lg">PURCHASE NOW</button>
        </div>
      </section>
    </>
  );
}
