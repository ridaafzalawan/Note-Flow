import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");
  console.log(location.pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Rida's Notebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/home"
                className={`nav-link ${isActive("/home")}`}
                aria-current={isActive("/home") ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${isActive("/about")}`}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                About
              </Link>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
