import student from '../../../assets/learn.png';
import mute from '../../../assets/mute.svg';
import record from '../../../assets/record.svg';
import HQ from '../../../assets/hq.svg';
import { FaCheck } from 'react-icons/fa';

const LiveTutor = () => {
  return (
    <section className='px-5 md:px-24 mb-10 lg:mb-20 w-full md:flex md:justify-between h-screen gap-8 '>
      <div className='flex flex-col text-center lg:text-left justify-center lg:w-1/2 space-y-9 md:space-y-5'>
        <h2 className='text-lg text-orange-600 font-bold lg:w-fit'>One on One learning</h2>
        <h1 className='text-3xl md:text-4xl font-bold lg:w-1/2'>Live Tutoring Sessions</h1>
        <p className='w-fit font-extralight text-md lg:text-lg'>
          Effective communication is our priority. We provide live sessions for our students in all
          learning tracks to help them have a better understanding in their field of study and clear
          their concerns through Q & A live sessions and one-in-one mentorship live sessions.
        </p>
        <div className='flex flex-wrap gap-4 items-center justify-around h-1/6'>
          <div className='flex flex-col items-center gap-2'>
            <img src={mute} alt='mute-icon' className='h-12 flex w-full' />
            <div className='flex items-center gap-3 font-medium text-primary'>
              <p className='uppercase font-medium'>Noiseless</p>
              <FaCheck/>
            </div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <img src={record} alt='rec-icon' className='h-12 flex w-full' />
            <div className='flex items-center gap-3 font-medium text-primary'>
              <p className='uppercase font-medium'>Recording</p>
              <FaCheck/>
            </div>
          </div>
          <div className='flex flex-col items-center gap-2 '>
            <img src={HQ} alt='hq-icon' className='h-12 flex w-full' />
            <div className='flex items-center gap-3 font-medium text-primary'>
              <p className='uppercase font-medium'>High Quality</p>
              <FaCheck/>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden lg:flex h-full'>
        <img src={student} alt='student' className='rounded-sm' />
      </div>
    </section>
  );
};

export default LiveTutor;
