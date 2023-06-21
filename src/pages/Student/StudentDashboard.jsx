import React from 'react';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { getCourses } from '../../api';
import StatusCard from '../../components/reusable/dashboard-sections/StatusCard';
import UpperSection from './components/UpperSection';
import CourseContents from './components/CourseContents';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const { data } = await getCourses();

        setCourses(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllCourses();
  }, []);

  return (
    <div className='p-4 w-full'>
      <h1 className='py-5 flex flex-col p-2'>
        <span className='font-bold text-4xl'>Hello Kate</span>
        <span>Welcome back, let’s dive right back in</span>
      </h1>
      <div className='flex'>
        <div className='w-1/2'>
          <StatusCard courseNumber={8} courseStatus={'Completed Courses'} iconStatus={'check'} />
        </div>
        <div className='w-1/2'>
          <StatusCard courseNumber={5} courseStatus={'Course In Progress'} iconStatus={'todo'} />
        </div>
      </div>
      <div className='w-full space-y-2 px-2'>
        <h1 className='font-bold text-3xl'>Courses</h1>
        <div className='lg:px-10 px-2 py-6 overflow-hidden'>
          <UpperSection />
          <div className='mt-10'>
            <div className='relative w-fit md:px-6 lg:px-0 lg:flex'>
              <form className='flex'>
                <input
                  type='text'
                  placeholder='Search Courses'
                  className='w-72 form-input border border-gray-300'
                />
                <span className='relative inset-y-0 -right-1 flex items-center pr-3'>
                  <button
                    type='submit'
                    className='p-2 bg-primary rounded-md text-white h-full w-14 flex justify-center items-center'
                  >
                    <FaSearch className='h-5 w-5' />
                  </button>
                </span>
              </form>
            </div>
            <CourseContents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
