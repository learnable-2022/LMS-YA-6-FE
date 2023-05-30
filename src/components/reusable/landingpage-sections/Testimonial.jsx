import students from '../../../assets/students.png'

const Testimonial = () => {
    return ( 
        <div className='mb-20 flex flex-col justify-center items-center text-center space-y-5 px-24'>
            <div className='space-y-4'>
                <h1 className='font-bold text-4xl'>
                Customer testimonials
                </h1>
                <p className='font-semibold'>
                Here's what some of them are saying.
                </p>
            </div>

            <div className='flex space-x-2'>
                <div className='space-y-2'>
                    <div className="bg-gray-200/60 h-fit w-fit p-5 rounded-sm">
                        "The program and online courses has been a great help in my 
                        career as a software developer, all classes, projects, 
                        onboarding session were so worth it."
                    </div>
                    <div className='flex flex-col items-center space-y-2'>
                        <img src={students} alt="avatar" className='w-10 h10 rounded-full' />
                        <h1>
                        Jack Yang
                        </h1>
                        <h2>
                        Developer, Milfred
                        </h2>
                    </div>
                </div>

                <div className='space-y-2'>
                    <div className="bg-gray-200/60 h-fit w-fit p-5 rounded-sm">
                        "The program and online courses has been a great help in my 
                        career as a software developer, all classes, projects, 
                        onboarding session were so worth it."
                    </div>
                    <div className='flex flex-col items-center space-y-2'>
                        <img src={students} alt="avatar" className='w-10 h10 rounded-full' />
                        <h1>
                        Jack Yang
                        </h1>
                        <h2>
                        Developer, Milfred
                        </h2>
                    </div>
                </div>

                <div className='space-y-2'>
                    <div className="bg-gray-200/60 h-fit w-fit p-5 rounded-sm">
                        "The program and online courses has been a great help in my 
                        career as a software developer, all classes, projects, 
                        onboarding session were so worth it."
                    </div>
                    <div className='flex flex-col items-center space-y-2'>
                        <img src={students} alt="avatar" className='w-10 h10 rounded-full' />
                        <h1>
                        Jack Yang
                        </h1>
                        <h2>
                        Developer, Milfred
                        </h2>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonial;