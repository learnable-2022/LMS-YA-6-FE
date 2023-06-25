import Footer from "./reusable/Footer";
import SideNavbar from "./reusable/dashboard-sections/SideNavbar";
import Topbar from "./reusable/dashboard-sections/Topbar";
import StudentOverview from "./reusable/StudyReport/StudentOverview";
import InstructorTopbar from "./reusable/dashboard-sections/InstructorTopBar";

const InstructorsDashboard = () => {
    return ( 
        <>
            <InstructorTopbar />
            <div className="flex h-fit min-h-screen ">
                <SideNavbar instructorsRoute={''} />
                <StudentOverview/>
            </div>
            <Footer />
        </>
     );
}
 
export default InstructorsDashboard;