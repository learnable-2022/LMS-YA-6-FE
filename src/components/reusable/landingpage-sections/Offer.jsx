import play from '../../../assets/play.svg'
import connect from '../../../assets/connect.svg'
import read from '../../../assets/read.svg'
import chat from '../../../assets/chat.svg'

const Offer = () => {
    return ( 
        <div className='px-24 mb-20 w-full h-fit flex flex-col items-center text-center space-y-8'>
            <div className='w-1/2 space-y-2 flex flex-col items-center'>
                <h3 className='font-semibold'>Quality education for you</h3>
                <h1 className='text-4xl font-bold'>
                We offer Accessibility with Tons of friendly features 
                </h1>
                <p className='w-3/4'>
                Here are some of the interesting features and 
                experiences powered by Edu_cate.
                </p>
            </div>  

            <div className='flex mb-5'>
                <div className='w-1/3 flex flex-col items-center space-y-2'>
                    <img src={play} alt="play-icon" />
                    <h2 className='font-bold w-2/3 text-lg'>
                    Personalized Learning Experience
                    </h2>
                    <p>
                    We help track student progress and provide targeted feedback, 
                    further enhancing the learning experience.
                    </p>
                </div>

                <div className='w-1/3 flex flex-col items-center space-y-2'>
                    <img src={connect} alt="play-icon" />
                    <h2 className='font-bold w-2/3 text-lg'>
                    Centralized Learning Platform
                    </h2>
                    <p>
                    We provide a centralized location for accessing educational 
                    resources, course materials, and communication tools. 
                    </p>
                </div>

                <div className='w-1/3 flex flex-col items-center space-y-2'>
                    <img src={read} alt="play-icon" />
                    <h2 className='font-bold w-2/3 text-lg'>
                    Automated Assessment & Feedback
                    </h2>
                    <p>
                    We help provide immediate feedback to students, helping them 
                    gauge their understanding and identify areas for improvement.
                    </p>
                </div>

                <div className='w-1/3 flex flex-col items-center space-y-2'>
                    <img src={chat} alt="play-icon" />
                    <h2 className='font-bold w-2/3 text-lg'>
                    Enhanced Communication & Collaboration
                    </h2>
                    <p>
                    We help fosters engagement, encourages peer-to-peer learning, 
                    and facilitates better student-teacher communication.
                    </p>
                </div>
            </div>

            <div className='flex space-x-10'>
                    <div className='p-2 bg-orange-600 text-white rounded-md'>
                    Start Now For Free
                    </div>
                    <div className='p-2 bg-gray-200/60 rounded-md'>
                    Contact Team
                    </div>
            </div>
        </div>
     );
}
 
export default Offer;