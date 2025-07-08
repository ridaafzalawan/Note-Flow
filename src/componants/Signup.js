import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.cpassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();
      console.log(json); // Debug: View response

      if (json.authtoken) {
        localStorage.setItem("token", json.authtoken);
        navigate("/home"); // Redirect to notes page
      } else {
        alert("Signup failed. " + (json.error || "Please try again."));
      }
    } catch (err) {
      console.error("Signup Error:", err.message);
      alert("Something went wrong during signup.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
          <h2 className="text-success text-center p-3">Sign-Up</h2>
        <div className="col-md-8 col-lg-6">
          <div className="card border-0 rounded-4 shadow-sm bg-success">
            <div className="card-body">
              <h3 className="card-title text-center mb-4 text-dark fw-bold">
                📝 Create a New Account
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-dark fw-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-success-subtle"
                    id="name"
                    value={credentials.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark fw-bold">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control border-success-subtle"
                    id="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                  <div id="emailHelp" className="form-text text-dark">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control border-success-subtle"
                    id="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    minLength={3}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="cpassword" className="form-label text-dark fw-bold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control border-success-subtle"
                    id="cpassword"
                    value={credentials.cpassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    required
                    minLength={3}
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-dark btn-lg">
                    ✅ Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
