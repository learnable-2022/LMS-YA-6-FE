import Footer from "./reusable/Footer";
import Hero from "./reusable/dashboard-sections/Hero";
import SideNavbar from "./reusable/dashboard-sections/SideNavbar";
import Topbar from "./reusable/dashboard-sections/Topbar";

const Dashboard = () => {
    return ( 
        <div>
            <Topbar />
            <div className="flex h-fit min-h-screen ">
                <SideNavbar studentRoute={''} />
                <Hero />
            </div>
            <Footer />
        </div>
     );
}
 
export default Dashboard;