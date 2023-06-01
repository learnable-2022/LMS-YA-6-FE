import { useState } from "react";
import Footer from "../../reusable/Footer";
import Courses from "../../reusable/all-courses/Courses";
import SideNavbar from "../../reusable/dashboard-sections/SideNavbar";
import Topbar from "../../reusable/dashboard-sections/Topbar";

const AllCourses = () => {
    const [cancelOnclickEvents, setCancelOnclickEvents] = useState(false)
    const handleActions = ()=>{
        setCancelOnclickEvents(true)
    }
    return ( 
        <div>
            <Topbar />
            <div className="flex h-fit min-h-screen " onClick={handleActions}>
                <SideNavbar />
                <Courses />
            </div>
            <Footer />
        </div>
     );
}
 
export default AllCourses;