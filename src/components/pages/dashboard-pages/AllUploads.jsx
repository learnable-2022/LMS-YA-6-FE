import Footer from "../../reusable/Footer";
import InstructorTopbar from "../../reusable/dashboard-sections/InstructorTopBar";
import SideNavbar from "../../reusable/dashboard-sections/SideNavbar";
import Topbar from "../../reusable/dashboard-sections/Topbar";
import Uploads from "../../reusable/instructors-sections/Uploads";

const AllUploads = () => {
    return ( 
        <>
            <InstructorTopbar />
            <div className="flex h-fit min-h-screen ">
                <SideNavbar instructorsRoute={'/courses'} />
                <Uploads />
            </div>
            <Footer />
        </>
     );
}
 
export default AllUploads;