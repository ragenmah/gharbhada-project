import React from "react";
import DashboardItems from "./DashboardItems";
import Notice from "./Notice";

const DashboardComponents = () => {
  return (
    <div className="dashboard-container">
      <Notice />
      <DashboardItems />
    </div>
  );
};

export default DashboardComponents;
