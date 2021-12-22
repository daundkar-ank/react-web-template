import React from "react";
import { PropTypes } from "prop-types";
import { Themes, DefaultTheme } from "src/App";
import { useContext } from "react";

function Navbar(props) {
  const darkMode = useContext(Themes);
  const mode = useContext(DefaultTheme);

  return (
    <div>
      <nav className={`navbar fixed-top navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.subtitle}
                </a>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>
            <input
              className="form-check-input"
              onClick={darkMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Navbar;
