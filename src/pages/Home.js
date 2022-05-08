import React from "react";
import Details from "../components/home/Details";
import useTitle from "../hooks/useTitle";
import "../assets/css/Home.css";
import ShortDetail from "../components/home/ShortDetail";
import Navbar from "../components/Navbar";

const Home = () => {
  useTitle("Gharbhada | Home");
  return (
    <>
      <Navbar />
      <div className="home-container">
        <Details />
        <ShortDetail />
      </div>
    </>
  );
};

export default Home;
