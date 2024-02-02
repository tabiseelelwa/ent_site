import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Modules/Admin/Sidebar";

const Dashboard = () => {
  return (
    <div className="dash">
      <Sidebar className="sidebar" />
      <div className="outlet_container">
        <div className="nav">
          {/* <div className="img_user"></div> */}
          <div className="nom_user">Tabiseelelwa</div>
        </div>
        <Outlet className="outlet" />
      </div>
    </div>
  );
};

export default Dashboard;
