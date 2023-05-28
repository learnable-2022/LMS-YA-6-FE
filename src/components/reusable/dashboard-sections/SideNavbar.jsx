import SideNavIcon from "./SideNavIcon";

const SideNavbar = () => {
    return ( 
        <div className="hidden lg:flex w-2/6 py-10 shadow-md bg-white flex-col items-center ">
            <div className="w-fit h-fit sticky top-24 space-y-10">
                <SideNavIcon iconName={'home'} iconDescription={'Dashboard'} active={' text-orange-600'} />
                <SideNavIcon iconName={'courses'} iconDescription={'All Courses'} />
                <SideNavIcon iconName={'study_report'} iconDescription={'Study Report'} />
                <SideNavIcon iconName={'forum'} iconDescription={'Forum'} />
                <SideNavIcon iconName={'support'} iconDescription={'24/7 Support'} />
                <SideNavIcon iconName={'setting'} iconDescription={'Settings'} />
            </div>
        </div>
     );
}
 
export default SideNavbar;