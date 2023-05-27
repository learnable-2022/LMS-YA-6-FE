import courseImg from '../../../assets/Rectangle 14.svg'
import {FaUser} from 'react-icons/fa'

const NewCourseCard = ({ courseName, courseCost}) => {
    return ( 
        <div className="h-fit mb-3 w-56 p-3 rounded-md shadow-md bg-white space-y-1">
            <img src={courseImg} alt="course" className="rounded-md w-full" />
            <div className="w-full h-fit space-y-2">
                <div className="font-semibold text-sm w-fit h-fit">
                    {courseName}
                </div>
                <div className=" w-fit h-fit text-orange-600 font-bold">
                    {courseCost}
                </div>
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
 
export default NewCourseCard;