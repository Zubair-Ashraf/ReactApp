import React, { Component } from "react";
import "./service.css";

class service extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customTag: this.props.icon,
    };
  }

  render() {
    return (
      <>
        <div className="service">
          <div className="icon">
            <this.state.customTag />
          </div>
          <div className="contents">
            <h5>{this.props.title}</h5>
            <p>{this.props.content}</p>
          </div>
        </div>
      </>
    );
  }
}

export default service;
