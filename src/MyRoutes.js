import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Footer from "./components/Footer";
import RegisterHome from "./pages/RegisterHome";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/Login";

import Home from "./pages/admin/home/Home";
import LoginAdmin from "./pages/admin/login/Login";
import List from "./pages/admin/list/List";
import Single from "./pages/admin/single/Single";
import New from "./pages/admin/new/New";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<> not found</>} />

        <Route index element={<Homepage />} />
        <Route path="/register-home" element={<RegisterHome />} />
        <Route path="/login-home" element={<Login />} />

        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="admin">
          <Route index element={<Home />} />
          <Route path="login" element={<LoginAdmin />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userid" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default MyRoutes;
