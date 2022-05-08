import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "../assets/css/AdminSidebar.css";
import SideBar from "../components/sidebar/SideBar";
// import Dashboard from "./admin/dashboard";

const AdminRoutes = () => {
  return (
    <Router>
      <SideBar>
        <Routes>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </SideBar>
    </Router>
  );
};

export default AdminRoutes;
