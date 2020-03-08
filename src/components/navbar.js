import React, { Component } from "react";
import "./navbar.css";

import { FaAlignJustify } from "react-icons/fa";

class navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };
  }

  toggleHandler = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <h1 className="nav-logo">AYAAN</h1>
              <button onClick={this.toggleHandler} className="nav-btn">
                <FaAlignJustify />
              </button>
            </div>
            <ul
              className={this.state.isOpen ? "nav-links" : "nav-links show-nav"}
            >
              <li>Home</li>
              <li>Services</li>
              <li>Products</li>
              <li>Projects</li>
              <li>About</li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default navbar;
