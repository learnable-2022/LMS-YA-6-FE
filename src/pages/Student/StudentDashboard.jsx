import React from 'react';
import StatusCard from '../../components/reusable/dashboard-sections/StatusCard';

const StudentDashboard = () => {
  return (
    <div className='p-4 w-full'>
      <h1 className='py-5 flex flex-col p-2'>
        <span className='font-bold text-4xl'>Hello Kate</span>
        <span>Welcome back, let’s dive right back in</span>
      </h1>
      <div className='flex'>
        <StatusCard courseNumber={8} courseStatus={'Completed Courses'} iconStatus={'check'} />

        <StatusCard courseNumber={5} courseStatus={'Course In Progress'} iconStatus={'todo'} />
      </div>
      <div className='w-full space-y-2 px-2'>
        <h1 className='font-bold text-3xl'>Courses</h1>
      </div>
    </div>
  );
};

export default StudentDashboard;
