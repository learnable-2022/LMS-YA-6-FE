import Main from './Main';
import StatusCard from './StatusCard';
// import DynamicUsername from "./DynamicUsername/DynamicUsername"
import React, { useEffect } from 'react';
import { studentProfile } from './../../../api';

const Hero = () => {
  useEffect(() => {
    const fetchUsername = async () => {
      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhiNjBiYzZiOGQxMjIwNTRiMTkwMzkiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY4NzAwODczMCwiZXhwIjoxNjg3NDQwNzMwfQ.XVNPGlm5Tb23WdoQ1GgW-o06Ln7RFI1RcPxoJJpn9TIs`,
        },
      };

      try {
        const { data } = await studentProfile(config);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsername();
  }, []);
  return (
    <div className='lg:mx-10 w-full overflow-x-hidden'>
      <h1 className='py-5 flex flex-col p-2'>
        <span className='font-bold text-4xl'>{/* Hello Kate <DynamicUsername/> */}</span>
        <span>Welcome back, let’s dive right back in</span>
      </h1>
      <div className='flex w-screen overflow-x-auto md:overflow-hidden items-center md:grid md:grid-cols-3 md:w-full h-fit p-2 md:p-0 md:space-x-8'>
        <div className='w-fit'>
          <StatusCard courseNumber={8} courseStatus={'Completed Courses'} iconStatus={'check'} />
        </div>
        <div className='w-fit'>
          <StatusCard courseNumber={5} courseStatus={'Course In Progress'} iconStatus={'todo'} />
        </div>
        <div className='w-fit'>
          <StatusCard
            courseNumber={10}
            courseStatus={'Study Hours This Week'}
            iconStatus={'studyHours'}
          />
        </div>
      </div>
      <div className='w-full space-y-2 px-2 overflow-x-scroll'>
        <h1 className='font-bold text-3xl'>Courses</h1>
        <Main />
      </div>
    </div>
  );
};

export default Hero;
