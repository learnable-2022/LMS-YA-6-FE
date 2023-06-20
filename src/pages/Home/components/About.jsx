import lecturer from '../../../assets/lecturer.png';
import students from '../../../assets/students.png';
import circle from '../../../assets/circle-full.svg';
import arc from '../../../assets/arc.svg';

const About = () => {
  return (
    <section id='about' className='px-5 md:px-24 mb-20 w-full relative'>
      <div className='w-fit h-fit md:flex'>
        <div className='flex flex-col text-center lg:text-left lg:w-4/5 space-y-5'>
          <h2 className='text-lg text-orange-600 font-bold lg:w-2/3'>About Us</h2>
          <h1 className='text-3xl md:text-4xl font-bold'>Qualified And Highly Equipped Tutors</h1>
          <p className='text-md lg:text-lg font-extralight'>
            We have highly trained and qualified tutors that hold the hands of our students and walk
            them through their journey in any of their chosen course. We give you the best at
            Edu_cate.
          </p>
        </div>

        <div className=' h-full w-full hidden md:flex'>
          <div className='w-1/6 h-full flex justify-end'>
            <div className='bg-orange-400 absolute top-0 overflow-hidden right-24 rounded-md h-fit w-1/4'>
              <img src={students} alt='students' />
            </div>
          </div>
          <div className='w-72 lg:w-56 h-56 flex'>
            <div className='relative top-36 left-20 object-cover rounded-md h-fit w-fit'>
              <img src={lecturer} alt='lecturer' className='lecturer' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between lg:mt-20 items-center'>
        <div className='transform rotate-180 w-fit h-fit flex flex-col space-y-2 items-end'>
          <div className='h-2 w-10 transform rotate-12 rounded-full bg-black'></div>
          <div className='h-2 w-14 transform rotate-12 rounded-full bg-orange-400'></div>
          <div className='h-2 w-20 transform rotate-12 rounded-full bg-orange-600'></div>
        </div>
        <div className='relative flex justify-end items-center'>
          <img src={circle} alt='deep-orange-circle' className='absolute right-16 top-10' />
          <img src={arc} alt='arc' />
        </div>
      </div>
    </section>
  );
};

export default About;
