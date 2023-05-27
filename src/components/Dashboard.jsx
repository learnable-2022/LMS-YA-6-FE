import CourseCard from "./reusable/dashboard-sections/CourseCard";
import Hero from "./reusable/dashboard-sections/Hero";
import Main from "./reusable/dashboard-sections/Main";
import SideNavbar from "./reusable/dashboard-sections/SideNavbar";
import Topbar from "./reusable/dashboard-sections/Topbar";

const Dashboard = () => {
    return ( 
        <div>
            <Topbar />
            <div className="flex h-fit min-h-screen ">
                <SideNavbar />
                <Hero />
            </div>
        </div>
     );
}
 
export default Dashboard;