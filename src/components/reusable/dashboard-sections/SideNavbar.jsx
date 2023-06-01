import { useLocation, useNavigate } from "react-router-dom";
import SideNavIcon from "./SideNavIcon";

const SideNavbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    return ( 
        <div className="hidden lg:flex py-10 shadow-md bg-white flex-col items-center " style={{width: '20%'}}>
            <div className="w-fit h-fit sticky top-24 space-y-10">
                <div onClick={()=>navigate('/dashboard')}>
                <SideNavIcon iconName={'home'} iconDescription={'Dashboard'} active={`${location.pathname==='/dashboard' ? 'text-orange-500':''}`} />
                </div>
                <div onClick={()=>navigate('/dashboard/all-courses')}>
                <SideNavIcon iconName={'courses'} iconDescription={'All Courses'} active={`${location.pathname==='/dashboard/all-courses' ? 'text-orange-500':''}`} />
                </div>
                <div onClick={()=>navigate('/dashboard/study-report')}>
                <SideNavIcon iconName={'study_report'} iconDescription={'Study Report'} active={`${location.pathname==='/dashboard/study-report' ? 'text-orange-500':''}`} />
                </div>
                <div onClick={()=>navigate('/dashboard/forum')}>
                <SideNavIcon iconName={'forum'} iconDescription={'Forum'} active={`${location.pathname==='/dashboard/forum' ? 'text-orange-500':''}`} />
                </div>
                <div onClick={()=>navigate('/dashboard/support')}>
                <SideNavIcon iconName={'support'} iconDescription={'24/7 Support'} active={`${location.pathname==='/dashboard/support' ? 'text-orange-500':''}`} />
                </div>
                <div onClick={()=>navigate('/dashboard/settings')}>
                <SideNavIcon iconName={'setting'} iconDescription={'Settings'} active={`${location.pathname==='/dashboard/settings' ? 'text-orange-500':''}`} />
                </div>
            </div>
        </div>
     );
}
 
export default SideNavbar;