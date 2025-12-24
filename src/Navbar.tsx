import { Link } from "react-router-dom";
import logo from "../public/logo (1).png";
import { useState } from "react";

export const Navbar = () => {
  // State to track if the navbar is collapsed or expanded
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to toggle the collapsed state
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" className="d-inline-block align-top" />
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isCollapsed ? "false" : "true"}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            {/* Toggling between hamburger and close icon */}
            <span
              className={`navbar-toggler-iconn ${isCollapsed ? "" : "d-none"}`}
            ></span>
            <i
              className={`fa-solid ${
                isCollapsed ? "fa-bars" : "fa-xmark"
              } d-lg-none`}
            ></i>
          </button>
          {/* Toggle the "show" class based on the isCollapsed state */}
          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link " //dropdown-toggle
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HOME
                </a>
                {/* <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link" //  dropdown-toggle
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </a>
                {/* <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link " //dropdown-toggle
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EVENTS
                </a>
                {/* <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link " // dropdown-toggle
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BLOG
                </a>
                {/* <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                </ul> */}
              </li>
            </ul>
            <div className="me-2 jointoday">
              <Link to="/signup">
                <button className="btn btn-outline-warning" type="button">
                  <i className="fa-regular fa-pen-to-square"></i> JOIN TODAY
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
