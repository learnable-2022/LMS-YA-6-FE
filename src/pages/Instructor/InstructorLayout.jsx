import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';
import SideNavbar from './components/SideNavbar';

const InstructorLayout = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <Topbar />
      <div className='flex-1 flex'>
        <div className='hidden lg:flex py-10 shadow-md flex-col items-center lg:w-1/5'>
          <SideNavbar />
        </div>
        <div className='overflow-auto flex-1'>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default InstructorLayout;
