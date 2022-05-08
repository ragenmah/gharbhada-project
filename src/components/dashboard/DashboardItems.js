import React from "react";
import DashboardItemsCard from "./DashboardItemsCard";
import "../../assets/css/Dashboard.css";
const DashboardItems = () => {
  return (
    <div className="dashboard-items-container" style={{ marginLeft: 20 }}>
      <h4>Dashboard</h4>
      <p>Good Afternoon, Ragen maharjan, Today is, 20th nov, 2002 </p>
      {/* <div> */}
      <div className="dashboard-card-items">
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
        <DashboardItemsCard />
      </div>
      {/* </div> */}
    </div>
  );
};

export default DashboardItems;
