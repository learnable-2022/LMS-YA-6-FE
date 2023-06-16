import React from "react";
import SideNavbar from "../../reusable/dashboard-sections/SideNavbar";
import Topbar from "../../reusable/dashboard-sections/Topbar";
import StudentOverview from "../../reusable/StudyReport/StudentOverview";


function StudyReport() {
  return (
    <div>
      <Topbar />
      <div className="flex  h-fit min-h-screen ">
        <SideNavbar />
       <StudentOverview/>
       </div>
    </div>
  );
}

export default StudyReport;
