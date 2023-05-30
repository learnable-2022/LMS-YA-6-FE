import lecturer from '../../../assets/lecturer.png'
import students from '../../../assets/students.png'
import circle from '../../../assets/circle-full.svg'
import arc from '../../../assets/arc.svg'

const About = () => {
    return ( 
        <div className="px-24 mb-20 w-full relative">
           <div className='w-fit h-fit flex'>
           <div className='flex flex-col w-4/5 space-y-5'>
                <h2 className='text-lg text-orange-600 font-bold w-2/3'>
                    About Us
                </h2>
                <h1 className="text-4xl font-bold">
                Qualified And Highly Equipped Tutors
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse varius enim in eros elementum tristique. Duis cursus, 
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam 
                libero vitae erat.
                </p>
            </div>

            <div className=' h-full w-full flex'>
                <div className="w-1/6 h-full flex justify-end">
                    <div className="bg-orange-400 absolute top-0 overflow-hidden right-24 rounded-md h-fit w-1/4">
                        <img src={students} alt="students" />
                    </div>
                </div>
                <div className="w-56 h-56 flex">
                    <div className="relative top-36 left-20 object-cover rounded-md h-fit w-fit">
                        <img src={lecturer} alt="lecturer" className='lecturer' />
                    </div>
                </div>
            </div>
           </div>

           <div className='flex justify-between mt-20 items-center'>
             <div className='transform rotate-180 w-fit h-fit flex flex-col space-y-2 items-end'>
                <div className='h-2 w-10 transform rotate-12 rounded-full bg-black'></div>
                <div className='h-2 w-14 transform rotate-12 rounded-full bg-orange-400'></div>
                <div className='h-2 w-20 transform rotate-12 rounded-full bg-orange-600'></div>
             </div>
             <div className='relative flex justify-end items-center'>
                <img src={circle} alt="deep-orange-circle" className='absolute right-16 top-10' />
                <img src={arc} alt="arc" />
             </div>
           </div>
        </div>
     );
}
 
export default About;