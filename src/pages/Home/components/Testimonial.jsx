import students from '../../../assets/students.png';

const Testimonial = () => {
  return (
    <div className='mb-20 flex flex-col  justify-center items-center text-center space-y-5 px-5 md:px-24'>
      <div className='space-y-4 mb-4'>
        <h1 className='font-bold text-3xl md:text-4xl'>Customer testimonials</h1>
        <p className='font-semibold'>Here's what some of them are saying.</p>
      </div>
      <div className='md:flex gap-4'>
        <div className='space-y-2'>
          <div className='bg-gray-200/60 h-fit w-fit p-5 rounded-sm text-md lg:text-lg font-extralight'>
            "The program and online courses has been a great help in my career as a software
            developer, all classes, projects, onboarding session were so worth it."
          </div>
          <div className='flex flex-col items-center space-y-1'>
            <img src={students} alt='avatar' className='w-10 h-10 rounded-full' />
            <h1>Jack Yang</h1>
            <h2>Developer, Milfred</h2>
          </div>
        </div>

        <div className='hidden md:block space-y-2'>
          <div className='bg-gray-200/60 h-fit w-fit p-5 rounded-sm text-md lg:text-lg font-extralight'>
            "I am happy to enroll in Edu_cate, I have gotten great value in my chosen learning
            track. I have a mentor who have held my hands."
          </div>
          <div className='flex flex-col items-center space-y-1'>
            <img src={students} alt='avatar' className='w-10 h-10 rounded-full' />
            <h1>Jack Yang</h1>
            <h2>Developer, Milfred</h2>
          </div>
        </div>

        <div className='hidden lg:block space-y-2'>
          <div className='bg-gray-200/60 h-fit w-fit p-5 rounded-sm text-md lg:text-lg font-extralight'>
            "The online courses are easy to understand and I love the fate that I can collaborate
            with my colleagues and mentors."
          </div>
          <div className='flex flex-col items-center space-y-1'>
            <img src={students} alt='avatar' className='w-10 h-10 rounded-full' />
            <h1>Jack Yang</h1>
            <h2>Developer, Milfred</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
