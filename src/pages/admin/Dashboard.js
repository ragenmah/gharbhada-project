import React from "react";
import Banner from "../../components/dashboard/Banner";
import DashboardComponents from "../../components/dashboard/DashboardComponents";
import LeftNavigation from "../../components/dashboard/LeftNavigation";
import Notice from "../../components/dashboard/Notice";
import SideBar from "../../components/sidebar/SideBar";
import useTitle from "../../hooks/useTitle";
import AdminRoutes from "../AdminRoutes";
import "../../assets/css/AdminSidebar.css";

const Dashboard = () => {
  useTitle("Admin dashboard | Gharbhada");
  return (
    <>
      {/* <Banner /> */}
      {/* <LeftNavigation /> */}
      {/* <DashboardComponents /> */}
      {/* <AdminRoutes />
       */}
      <SideBar />
    </>
  );
};

export default Dashboard;
