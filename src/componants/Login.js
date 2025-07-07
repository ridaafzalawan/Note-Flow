import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json); // For debugging

    if (json.success && json.authtoken) {
      localStorage.setItem("token", json.authtoken);
      localStorage.setItem("name", json.name); // ✅ Save name for Navbar
      navigate("/home"); // ✅ Redirect after login
    } else {
      alert("Login failed: " + (json.error || "Invalid credentials"));
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card border-0 rounded-4 shadow-sm bg-success">
            <div className="card-body">
              <h3 className="card-title text-center mb-4 text-dark h3 fw-bold">
                🔐 Login to Your Account
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark fw-bold">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control border-success-subtle"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control border-success-subtle"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-dark btn-lg">
                    🔓 Login
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

export default Login;
