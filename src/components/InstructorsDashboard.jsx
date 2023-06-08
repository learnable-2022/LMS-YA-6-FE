import Footer from "./reusable/Footer";
import SideNavbar from "./reusable/dashboard-sections/SideNavbar";
import Topbar from "./reusable/dashboard-sections/Topbar";

const InstructorsDashboard = () => {
    return ( 
        <>
            <Topbar />
            <div className="flex h-fit min-h-screen ">
                <SideNavbar instructorsRoute={''} />
            </div>
            <Footer />
        </>
     );
}
 
export default InstructorsDashboard;