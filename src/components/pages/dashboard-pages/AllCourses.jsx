import Footer from "../../reusable/Footer";
import Courses from "../../reusable/all-courses/Courses";
import SideNavbar from "../../reusable/dashboard-sections/SideNavbar";
import Topbar from "../../reusable/dashboard-sections/Topbar";

const AllCourses = () => {
    return ( 
        <div>
            <Topbar />
            <div className="flex h-fit min-h-screen ">
                <SideNavbar />
                <Courses />
            </div>
            <Footer />
        </div>
     );
}
 
export default AllCourses;