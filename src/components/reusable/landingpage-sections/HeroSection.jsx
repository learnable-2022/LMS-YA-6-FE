import heroTutor from '../../../assets/tutor.png'
import { AiOutlineArrowRight } from 'react-icons/ai';

const HeroSection = () => {
    return ( 
        <div className="px-24 w-full flex mb-20">
            <div className='flex flex-col justify-center w-3/5 space-y-5'>
                <h1 className='text-4xl font-bold w-2/3'>
                    Education Without Limits!
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique. Duis 
                    cursus, mi quis viverra ornare, eros dolor interdum nulla, 
                    ut commodo diam libero vitae erat.
                </p>
                <div className='flex space-x-10'>
                    <div className='p-2 bg-orange-600 text-white rounded-md'>
                    Get Started Now
                    </div>
                    <div className='p-2 bg-gray-200/60 rounded-md'>
                    Sign In
                    </div>
                </div>
            </div>

            <div className='relative py-10 h-fit'>
                <img src={heroTutor} alt="tutor" className='rounded-md' />
                <div className='h-full w-full flex justify-center items-end'>
                    <div className='h-14 w-3/6 transform rotate-12 rounded-full bg-gray-200/60 -z-20 absolute bottom-20 -left-20'></div>
                    <div className='h-14 w-3/6 transform rotate-12 rounded-full bg-gray-200/60 -z-20 absolute top-48 -right-10'></div>

                    <div className='h-14 w-3/6 transform rotate-45 border-b-2 border-l-2 border-dashed border-orange-600 -z-20 absolute top-44 -left-14'></div>
                    <div className='h-14 w-3/6 transform rotate-45 border-b-2 border-dashed border-white absolute top-56 -left-1'></div>
                    <div className='h-fit w-fit transform p-2 bg-white font-bold rounded-full rotate-45 absolute top-72 left-32'>
                        <AiOutlineArrowRight className='text-orange-600 text-3xl transform' />
                    </div>
                    <div className='h-fit w-fit transform -rotate-12 p-2 rounded-full absolute bottom-0 right-0'>
                        <AiOutlineArrowRight className='text-orange-400 text-5xl ' />
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default HeroSection;