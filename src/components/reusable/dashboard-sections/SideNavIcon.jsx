import {FaBookOpen, FaBusinessTime, FaChartLine, FaHome, FaPeopleArrows, FaToolbox} from 'react-icons/fa'

const SideNavIcon = ({iconName, iconDescription, active}) => {
    const IconComponent = {
        home: FaHome,
        courses: FaBookOpen,
        study_report: FaChartLine,
        forum: FaPeopleArrows,
        support: FaBusinessTime,
        setting: FaToolbox,
        // Add more icon mappings as needed
      }[iconName];
    
      return (
        <div className={`${active} flex w-full p-2 space-x-4 items-center cursor-pointer`}>
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