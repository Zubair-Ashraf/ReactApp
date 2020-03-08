import React from "react";
import Product from "./product";
import "./products.css";
import { FaReact, FaAngular, FaVuejs, FaWix } from "react-icons/fa";

function products() {
  return (
    <>
      <section className="products">
        <Product
          image={FaAngular}
          label="Angular Js"
          content="It is a long established  of a page when looking at its layout. "
        />
        <Product
          image={FaReact}
          label="React Js"
          content="It is a long established  of a page when looking at its layout. "
        />
        <Product
          image={FaVuejs}
          label="Vue Js"
          content="It is a long established  of a page when looking at its layout. "
        />
        <Product
          image={FaWix}
          label="Wix"
          content="It is a long established  of a page when looking at its layout. "
        />
      </section>
    </>
  );
}

export default products;
