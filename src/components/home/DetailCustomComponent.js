import React from "react";
import { FaRegChartBar, FaRegBuilding, FaHouseUser } from "react-icons/fa";

const DetailCustomComponent = ({ icon, title }) => {
  return (
    <div className="detailCustom-container">
      <div className="circle-div">
        {icon === 1 ? (
          <FaRegBuilding className="circle-icon" size="10" />
        ) : icon === 2 ? (
          <FaRegChartBar className="circle-icon" size="10" />
        ) : (
          <FaHouseUser className="circle-icon" size="10" />
        )}
      </div>
      <p style={{ paddingLeft: 10 }}>{title}</p>
    </div>
  );
};

export default DetailCustomComponent;
