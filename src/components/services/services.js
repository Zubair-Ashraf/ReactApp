import React from "react";
import Service from "./service";
import "./services.css";
import {
  FaCanadianMapleLeaf,
  FaMobileAlt,
  FaBootstrap,
  FaRegHeart,
  FaShareAlt,
  FaThermometerQuarter,
} from "react-icons/fa";

export default function services() {
  return (
    <>
      <section className="services">
        <Service
          title="AWARD-WINNING DESIGN"
          content="It is a long established fact that a reader will be distracted by the readable content."
          icon={FaCanadianMapleLeaf}
        />

        <Service
          title="RESPONSIVE THEME"
          content="It is a long established fact that a reader will be distracted by the readable content."
          icon={FaMobileAlt}
        />

        <Service
          title="BOOTSTRAP SUPPORT"
          content="It is a long established fact that a reader will be distracted by the readable content."
          icon={FaBootstrap}
        />

        <Service
          title="PORTFOLIO OF WORK"
          content="It is a long established fact that a reader will be distracted by the readable content."
          icon={FaRegHeart}
        />

        <Service
          title="AWESOME SLIDERSHOWS"
          content="It is a long established fact that a reader will be distracted by the readable content."
          icon={FaShareAlt}
        />

        <Service
          title="TONS OF FEATURES"
          content="It is a long established fact that a reader will be distracted by the readable content."
          icon={FaThermometerQuarter}
        />
      </section>
    </>
  );
}
