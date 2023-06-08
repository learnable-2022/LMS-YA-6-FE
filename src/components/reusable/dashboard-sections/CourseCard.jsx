import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import {FaUser} from 'react-icons/fa'

const CourseCard = ({courseTitle, courseStatus, progressPercentage, courseImg}) => {
    const navigate = useNavigate()
    return ( 
        <div className="mb-3 h-fit w-48 md:w-56 p-3 rounded-md shadow-md bg-white space-y-1 hover:bg-black/20 cursor-pointer" onClick={()=>navigate('/dashboard/my-class')}>
            <img src={courseImg} alt="course" className="rounded-md w-full" /> 
            <div className="w-full h-fit space-y-2">
                <div className="font-semibold text-sm w-fit h-fit">
                    {courseTitle}
                </div>
                <div className=" w-fit h-fit">
                    {courseStatus}
                </div>
                <ProgressBar progressPercentage={progressPercentage} />
            </div>
            
            <div className="flex w-fit max-w-full min-h-fit items-center space-x-1">
                <FaUser />
                <div className="w-fit h-fit font-semibold">
                 By Alphouse Joan
                </div>
            </div>
        </div>
     );
}
 
export default CourseCard;