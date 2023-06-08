import Footer from "../../reusable/Footer";
import SideNavbar from "../../reusable/dashboard-sections/SideNavbar";
import Topbar from "../../reusable/dashboard-sections/Topbar";
import Uploads from "../../reusable/instructors-sections/Uploads";

const AllUploads = () => {
    return ( 
        <>
            <Topbar />
            <div className="flex h-fit min-h-screen ">
                <SideNavbar instructorsRoute={'/courses'} />
                <Uploads />
            </div>
            <Footer />
        </>
     );
}
 
export default AllUploads;