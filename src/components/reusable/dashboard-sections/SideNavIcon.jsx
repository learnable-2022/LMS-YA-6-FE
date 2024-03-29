import {FaBookOpen, FaBusinessTime, FaCamera, FaChartLine, FaHome, FaInbox, FaList, FaPeopleArrows, FaSignOutAlt, FaToolbox} from 'react-icons/fa'

const SideNavIcon = ({iconName, iconDescription, active}) => {
    const IconComponent = {
        home: FaHome,
        courses: FaBookOpen,
        study_report: FaChartLine,
        forum: FaPeopleArrows,
        support: FaBusinessTime,
        setting: FaToolbox,
        message: FaInbox,
        todo: FaList,
        camera: FaCamera,
        signout: FaSignOutAlt
        // Add more icon mappings as needed
      }[iconName];
    
      return (
        <div className={`${active} p-5 flex w-full md:p-10 lg:p-2 space-x-4 items-center cursor-pointer`}>
          <div>
            {IconComponent && <IconComponent />}
          </div>
          <div className='h-fit w-fit'>
            {iconDescription}
          </div>
        </div>
      );
}
 
export default SideNavIcon;