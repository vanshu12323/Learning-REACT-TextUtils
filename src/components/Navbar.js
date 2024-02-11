import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  useEffect(() => {
    toggleMyStyle(); // Call toggleMyStyle whenever theme changes
  }, [props.theme]); // Run this effect whenever props.theme changes

  const [myStyle, setMyStyle] = useState({
    backgroundColor: "#9eaab6",
    color: "black",
  });

  // change myStyle based on theme
  const toggleMyStyle = () => {
    let t = props.theme;
    if (t === "light") {
      setMyStyle({
        backgroundColor: "#9eaab6",
        color: "black",
      });
    } else if (t === "dark") {
      setMyStyle({
        backgroundColor: "#2b3035dd",
        color: "#d6d6d4",
      });
    } else if (t === "pink") {
      setMyStyle({
        backgroundColor: "#67729D",
        color: "#E7BCDE",
      });
    } else if (t === "blue") {
      setMyStyle({
        backgroundColor: "#435585",
        color: "#F5E8C7",
      });
    } else if (t === "green") {
      setMyStyle({
        backgroundColor: "#6D7E22",
        color: "#ECEEE3",
      });
    }
  };
  // #6D7E22
  return (
    <nav
      className="navbar navbar-expand-lg"
      // data-bs-theme={props.mode}
      style={myStyle}
    >
      <div className="container-fluid" style={myStyle}>
        <a className="navbar-brand" href="/" style={myStyle}>
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={(myStyle, { border: "none" })}
        >
          <span className="navbar-toggler-icon" style={myStyle}></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={myStyle}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={myStyle}>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={myStyle}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" style={myStyle}>
                {props.about}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch" style={myStyle}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "light" ? "Dark " : "Light "}Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// if number given -> console -> error
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = { title: "Set Title", about: "About text here" };
