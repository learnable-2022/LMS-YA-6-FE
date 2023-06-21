import {FaUser} from 'react-icons/fa'

const NewCourseCard = ({ courseName, courseCost, courseImg}) => {
    return ( 
        <div className="h-fit mb-3 w-48 md:w-56 p-3 rounded-md shadow-md bg-white space-y-1">
            <div className='w-fit h-fit relative'>
                <img src={courseImg} alt="course" className="rounded-md w-full" />
                <div className="absolute top-2 left-1 w-fit h-fit bg-orange-600/90 text-white rounded-md p-1 font-semibold">
                        {courseCost}
                </div>
            </div>
            <div className="w-full h-fit space-y-2">
                <div className="font-semibold text-sm w-fit h-fit">
                    {courseName}
                </div>
            </div>

            <div className="flex flex-col w-fit max-w-full min-h-fit space-x-1">
                
                <div className="w-fit flex justify-center items-center h-fit font-semibold">
                <FaUser />
                 By Alphouse Joan
                </div>
                <div className='bg-yellow-600/90 w-fit p-2 mt-2 rounded-md cursor-pointer'>
                    Enroll
                </div>
            </div>
        </div>
     );
}
 
export default NewCourseCard;