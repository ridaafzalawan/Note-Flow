import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  const isActive = (path) => (location.pathname === path ? "active" : "");

  useEffect(() => {
    // Fetch username from localStorage if logged in
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name"); // Assuming you're storing it
    if (token && name) {
      setUserName(name);
    } else {
      setUserName("");
    }
  }, [location]); // re-run when route changes

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setUserName("");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand text-success" to="/">
          {userName ? `${userName}'s Notebook` : "Your Notebook"}
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

          {userName ? (
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          ) : (
            <form className="d-flex">
              <Link className="btn btn-success text-dark" to="/login">
                Login
              </Link>
              <Link className="btn btn-success mx-2 text-dark" to="/signup">
                SignUp
              </Link>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
