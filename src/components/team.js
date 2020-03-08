import React from "react";
import "./team.css";
import Member1 from "../images/teamMember-01.jpg";
import Member2 from "../images/teamMember-02.jpg";
import Member3 from "../images/teamMember-03.jpg";
import Member4 from "../images/teamMember-04.jpg";

export default function team() {
  return (
    <>
      <section className="team">
        <div className="header">
          <h1>Meet Our Team</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form
          </p>
        </div>
        <div className="body">
          <div className="data">
            <img src={Member1} alt="" />
            <h5>Ayaan</h5>
            <p>Web Developer</p>
          </div>

          <div className="data">
            <img src={Member2} alt="" />
            <h5>Alex Martin</h5>
            <p>Android Developer</p>
          </div>

          <div className="data">
            <img src={Member3} alt="" />
            <h5>Alex Mortin</h5>
            <p>Artifical Intelligence</p>
          </div>

          <div className="data">
            <img src={Member4} alt="" />
            <h5>Zubair</h5>
            <p>SEO</p>
          </div>
        </div>
      </section>
    </>
  );
}
