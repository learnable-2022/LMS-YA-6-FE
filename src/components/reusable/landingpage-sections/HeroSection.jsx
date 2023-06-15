import { useNavigate } from 'react-router-dom';
import heroTutor from '../../../assets/tutor.png';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id='Home' className='px-5 mt-10 md:px-14 w-full flex flex-col lg:flex-row gap-10 mb-20 justify-between'>
      <div className='flex flex-col items-end justify-center lg:w-1/2'>
        <div className='flex flex-col items-center md:items-start text-center lg:text-left justify-center gap-y-5'>
          <h1 className='text-4xl lg:text-5xl font-bold lg:w-2/3'>Education Without Limits!</h1>
          <p className='text-md lg:text-lg font-extralight'>
            Bringing amazing opportunities to learn your chosen career and become a better version
            of yourself. Yes you can become whatever you want to be. Be determined and you’ll excel.
          </p>
          <div className='p-3 flex justify-center bg-orange-600 text-white rounded-md' 
          
          onClick={() => navigate("/userAccess")}>
            Get Started Now
          </div>
        </div>
      </div>

      <div className='h-fit flex justify-center'>
        <img src={heroTutor} alt='tutor' className='rounded-md' />
      </div>
    </section>
  );
};

export default Hero;