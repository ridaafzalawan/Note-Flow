import React from "react";

const About = () => {
  return (
    <div className="bg-light text-dark py-5">
      <div className="container px-4">

        {/* Header */}
        <section className="text-center mb-5">
          <h1 className="text-success fw-bold display-4 mb-3">Why Cloud Notes?</h1>
          <p className="fs-5 text-muted">
            Your ideas deserve a smarter space — organize them beautifully and securely with Cloud Notes.
          </p>
        </section>

        {/* Features */}
        <section className="row text-center mb-5 g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <i className="fa-solid fa-bolt fa-2x text-success mb-3"></i>
              <h4>Fast & Easy</h4>
              <p className="text-muted">Add, edit, or delete notes instantly with zero distractions.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <i className="fa-solid fa-tags fa-2x text-success mb-3"></i>
              <h4>Organized with Tags</h4>
              <p className="text-muted">Keep notes grouped and searchable using comma-separated tags.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <i className="fa-solid fa-lock fa-2x text-success mb-3"></i>
              <h4>Secure & Private</h4>
              <p className="text-muted">Notes are secured and only accessible after logging in.</p>
            </div>
          </div>
        </section>
        <section className="row text-center mb-5 g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <i className="fa-solid fa-bolt fa-2x text-success mb-3"></i>
              <h4>Fast & Easy</h4>
              <p className="text-muted">Add, edit, or delete notes instantly with zero distractions.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <i className="fa-solid fa-tags fa-2x text-success mb-3"></i>
              <h4>Organized with Tags</h4>
              <p className="text-muted">Keep notes grouped and searchable using comma-separated tags.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <i className="fa-solid fa-lock fa-2x text-success mb-3"></i>
              <h4>Secure & Private</h4>
              <p className="text-muted">Notes are secured and only accessible after logging in.</p>
            </div>
          </div>
        </section>
        

        {/* Login/Register Section */}
        <section className="row align-items-center mb-5 g-4">
          <div className="col-md-6">
            <h2 className="text-success mb-3">🔐 Login & Register</h2>
            <p className="text-muted">Cloud Notes protects your data and gives you full control over your notes.</p>
            <ul className="text-muted">
              <li>Register securely with email and password</li>
              <li>Access notes via token-based authentication</li>
              <li>Only you can see and modify your notes</li>
            </ul>
            <div className="mt-3">
              <a href="/login" className="btn btn-outline-success me-2">Login</a>
              <a href="/register" className="btn btn-success">Register</a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
              alt="Secure access"
              className="img-fluid rounded shadow border border-success"
              style={{ maxHeight: "250px" }}
            />
          </div>
        </section>

        {/* Audience */}
        <section className="row align-items-center mb-5 g-4">
          <div className="col-md-6">
            <h2 className="text-success mb-3">For Everyone Who Thinks</h2>
            <p className="text-muted">Designed for students, developers, creators, and anyone who needs to remember.</p>
            <ul className="text-muted">
              <li>Capture notes on the go</li>
              <li>Tag-based filtering</li>
              <li>Responsive across all devices</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
              alt="Users"
              className="img-fluid rounded shadow border border-success"
              style={{ maxHeight: "250px" }}
            />
          </div>
        </section>

        {/* Tech & Security */}
        <section className="row align-items-center mb-5 flex-md-row-reverse g-4">
          <div className="col-md-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4456/4456481.png"
              alt="Tech stack"
              className="img-fluid rounded shadow border border-success"
              style={{ maxHeight: "250px" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-success mb-3">Built for Performance</h2>
            <p className="text-muted">Powered by the MERN stack for fast, secure, and scalable performance.</p>
            <ul className="text-muted">
              <li>MongoDB, Express, React, Node.js</li>
              <li>Instant UI updates and secure APIs</li>
              <li>Alert system for real-time feedback</li>
            </ul>
          </div>
          
        </section>

        {/* Features Overview */}
        <section className="row text-center mb-5 g-4">
          <div className="col-md-3 col-6">
            <i className="fa-solid fa-pen-to-square fa-2x text-success mb-2"></i>
            <p className="text-muted">Quick Editing</p>
          </div>
          <div className="col-md-3 col-6">
            <i className="fa-solid fa-mobile fa-2x text-success mb-2"></i>
            <p className="text-muted">Mobile Ready</p>
          </div>
          <div className="col-md-3 col-6">
            <i className="fa-solid fa-bell fa-2x text-success mb-2"></i>
            <p className="text-muted">Live Alerts</p>
          </div>
          <div className="col-md-3 col-6">
            <i className="fa-solid fa-layer-group fa-2x text-success mb-2"></i>
            <p className="text-muted">Tag Grouping</p>
          </div>
        </section>
         <section className="row text-center mb-5 g-4">
          <div className="col-md-3 col-6">
            <i className="fa-solid fa-pen-to-square fa-2x text-success mb-2"></i>
            <p className="text-muted">Quick Editing</p>
          </div>
          <div className="col-md-3 col-6">
            <i className="fa-solid fa-mobile fa-2x text-success mb-2"></i>
            <p className="text-muted">Mobile Ready</p>
          </div>
          <div className="col-md-3 col-6">
            <i className="fa-solid fa-bell fa-2x text-success mb-2"></i>
            <p className="text-muted">Live Alerts</p>
          </div>
          <div className="col-md-3 col-6">
            <i className="fa-solid fa-layer-group fa-2x text-success mb-2"></i>
            <p className="text-muted">Tag Grouping</p>
          </div>
        </section>
        

        {/* Final CTA */}
        <section className="text-center mt-5">
          <h4 className="text-success">Organize More. Remember Better. Stay Secure. 🌿</h4>
          <p className="text-muted mb-4">Start using Cloud Notes today — the easiest way to manage your thoughts with privacy and style.</p>
          <a href="/signup" className="btn btn-success btn-lg px-4">Get Started</a>
        </section>

      </div>
    </div>
  );
};

export default About;
