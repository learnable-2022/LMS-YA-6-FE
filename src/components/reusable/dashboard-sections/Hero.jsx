import Courses from '../all-courses/Courses';
import Main from './Main';
import StatusCard from './StatusCard';
import DynamicUsername from './DynamicUsername/DynamicUsername';
import React, { useEffect, useState } from 'react';
import { studentProfile } from './../../../api';

const Hero = () => {
  const token = localStorage.getItem('token');
  const [name, setName] = useState('');
  useEffect(() => {
    const fetchUsername = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await studentProfile(config);
        console.log(data);
        setName(data.data.fullname);
        return data;
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsername();
  }, []);
  return (
    <div className='px-4 lg:px-10 w-full '>
      <div className='flex flex-col py-4'>
        <h1 className='font-bold text-5xl mb-2'>
          <DynamicUsername name={name} />
        </h1>
        <p className='font-thin text-lg p-0'>Welcome back, let’s dive right back in</p>
      </div>
      <div className=' md:grid md:grid-cols-2 md:w-full h-fit md:gap-x-8'>
        <div className='w-fit mx-auto'>
          <StatusCard courseNumber={8} courseStatus={'Completed Courses'} iconStatus={'check'} />
        </div>
        <div className='w-fit'>
          <StatusCard courseNumber={5} courseStatus={'Course In Progress'} iconStatus={'todo'} />
        </div>
      </div>
      <div className='w-full space-y-2'>
        <h1 className='font-bold text-3xl'>Courses</h1>
        <Courses />
        {/* <Main /> */}
      </div>
    </div>
  );
};

export default Hero;
