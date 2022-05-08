import React from "react";
import DetailCustomComponent from "./DetailCustomComponent";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <>
      <div className="details-container">
        <h2 className="title">Hello there, Welcome to Gharbhada </h2>
        <p>Ready to manage home? Register your home with us.</p>
        <h4 className="title">Services we provide</h4>
        <DetailCustomComponent icon={1} title="Manage home" />
        <DetailCustomComponent icon={2} title="Generate Reports" />
        <DetailCustomComponent icon={3} title="Track the tenants" />
        <Link to="/register-home" className="register-btn">
          Register your home with us
        </Link>
      </div>
    </>
  );
};

export default Details;
