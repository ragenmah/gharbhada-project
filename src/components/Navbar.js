import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <Link to="/">Gharbhada</Link>{" "}
        <span className="slogan">Your online home rental manager</span>
      </div>
      <div className="navbar-routes">
        <Link to="/login-home">Log in</Link>
      </div>
    </div>
  );
};

export default Navbar;
