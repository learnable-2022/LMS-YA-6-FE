import { FaCheck, FaList, FaClock } from "react-icons/fa";

const StatusCard = ({courseNumber, courseStatus, iconStatus}) => {
    const IconComponent = {
        check: FaCheck,
        todo: FaList,
        studyHours: FaClock,
        // Add more icon mappings as needed
      }[iconStatus];
    return ( 
        <div className="flex overflow-hidden w-fit  h-24 md:py-0 px-3 mx-1 md:mx-3 md:mt-5 mb-8 bg-gradient-to-b from-orange-600 to-orange-300 rounded-md text-white">
            <h1 className="flex flex-col h-full">
                <span className="h-3/4 flex items-center text-5xl font-bold">{courseNumber}</span>
                <span className="flex font-semibold items-center h-full text-sm pr-3">{courseStatus}</span>
            </h1>
            <div className="w-fit h-fit relative">
                {IconComponent && <IconComponent className="text-6xl border-4 p-2 border-white rounded-lg relative  top-14 left-5" />}
            </div>
        </div>
     );
}
 
export default StatusCard;