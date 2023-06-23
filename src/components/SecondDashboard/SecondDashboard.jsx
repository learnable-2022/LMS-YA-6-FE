import MainComponent from "../MainComponent/MainComponent";
import LeftComponent from "../Left Component/LeftComponent";
import "./SecondDashboard.css";
import React from "react";
// import MobileSidebar from "../Left Component/MobileSidebar";

function SecondDashboard() {
  return (
    <div className="App">
      {/* <MobileSidebar/> */}
      <LeftComponent />
      <MainComponent />
    </div>
  );
}

export default SecondDashboard;
