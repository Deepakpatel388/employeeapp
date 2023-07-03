import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <span>StudyMonk Recruitments</span>
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink to="/search" className="nav-link">
                  Search
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <NavLink
                  to="/register"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Register
                </NavLink>
              </li> */}

              <li className="nav-item dropdown me-5">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Register
                </NavLink>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/register">
                      Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/register">
                      Recruiter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/register">
                      JobSeeker
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li> */}

              <li className="nav-item dropdown me-5">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdownMenuLinkLogin"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LogIn
                </NavLink>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLinkLogin"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/login">
                      Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/login">
                      Recruiter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/login">
                      JobSeeker
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
