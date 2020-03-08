import React, { Component } from "react";
import "./product.css";

class product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customTag: this.props.image,
    };
  }

  render() {
    return (
      <>
        <div className="product">
          <this.state.customTag />
          <h5>{this.props.label}</h5>
          <p>{this.props.content}</p>
        </div>
      </>
    );
  }
}

export default product;
