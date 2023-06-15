import { useNavigate } from "react-router";

const EndSection = () => {
    const navigate = useNavigate()
    return ( 
        <div className="px-5 md:px-24 w-full lg:flex text-center lg:text-left bg-teachBg bg-no-repeat object-cover space-y-5 md:space-y-0 py-10">
        <div className='flex flex-col justify-center lg:w-1/2 space-y-5'>
            <h1 className='text-2xl text-white font-bold lg:w-1/2'>
            We only offer you the best
            </h1>
        </div>

        <div className=' h-fit lg:w-1/2 space-y-2'>
            <p className="text-white mb-5 md:mb-0">
            Edu_cate, learning becomes flexible and accessible from anywhere with an 
            internet connection. Students can access their course materials, 
            assignments, and resources at their own convenience, allowing for 
            self-paced learning.
            </p>
            <div className='flex space-x-10 justify-center lg:justify-normal'>
                <div className='p-2 bg-orange-600 text-white rounded-md cursor-pointer' onClick={()=>navigate('/login')}>
                Enroll Now
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default EndSection;