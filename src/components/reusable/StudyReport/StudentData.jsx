import React from "react";
import DropDownBtn from "./DropDownBtn";
import BarChart from "../../../assets/bar-chart.png";

const studentData = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[#1F3042] text-4xl font-bold">Insight Chart</h1>
        </div>

        <div className="hidden my-7 md:flex  lg:ml-10 md:space-x-4 bg-white h-fit p-1 md:w-fit rounded-md ">
          <div className="p-1">
            <DropDownBtn
              filterName={"Courses"}
              position={"left-1 md:left-0 md:right-0"}
            />
          </div>
          <div className="p-1">
            <DropDownBtn
              filterName={"Daily"}
              position={"left-20 md:left-0 md:right-0"}
            />
          </div>
        </div>
      </div>

      {/* small devices */}
      <div className="flex mt-4 md:mt-0 md:ml-10 my-7 md:space-x-4 bg-white h-fit p-1 w-screen overflow-x-auto md:hidden rounded-md">
        <div className="p-1">
          <DropDownBtn
            filterName={"Courses"}
            position={"left-1 md:left-0 md:right-0"}
          />
        </div>
        <div className="p-1">
          <DropDownBtn
            filterName={"Daily"}
            position={"left-20 md:left-0 md:right-0"}
          />
        </div>
      </div>
      <div>
        <img src={BarChart} alt="" />
      </div>
    </div>
  );
};

export default studentData;
