import MainComponent from "../MainComponent/MainComponent";
import LeftComponent from "../Left Component/LeftComponent";
import "./SecondDashboard.css";
import React from "react";

function SecondDashboard() {
  return (
    <div className="App">
      <LeftComponent />
      <MainComponent />
    </div>
  );
}

export default SecondDashboard;
