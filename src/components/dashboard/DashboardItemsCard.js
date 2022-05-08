import React from "react";
import { Link } from "react-router-dom";
import { FaPeopleArrows } from "react-icons/fa";

const DashboardItemsCard = () => {
  return (
    <div>
      <Link to="/login-home" className="dashboard-items-link">
        <div className="dashboard-items-card">
          <div
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <h3>Tenants</h3>
            <p>0</p>
          </div>
          <FaPeopleArrows style={{ marginLeft: 10 }} size={50} />
        </div>
      </Link>
    </div>
  );
};

export default DashboardItemsCard;
