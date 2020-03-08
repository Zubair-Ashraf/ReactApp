import React from "react";
import "./about.css";
import global from "../images/person1.jpg";
import digital from "../images/person2.jpg";
import marketing from "../images/person3.jpg";

function about() {
  return (
    <>
      <section className="about">
        <div className="about-group">
          <div className="image">
            <img src={global} alt="" width="250px" height="150px" />
          </div>
          <div className="content">
            <h4>GLOBAL STRATEGY</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
        </div>

        <div className="about-group">
          <div className="image">
            <img src={digital} alt="" width="250px" height="150px" />
          </div>
          <div className="content">
            <h4>CREATIVE AND DIGITAL</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
        </div>

        <div className="about-group">
          <div className="image">
            <img src={marketing} alt="" width="250px" height="150px" />
          </div>
          <div className="content">
            <h4>MARKETING AGENCY</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
