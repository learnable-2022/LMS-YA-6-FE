import { FaSearch, FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../../../assets/EducateLogo.png';
import SideNavIcon from '../../../components/reusable/dashboard-sections/SideNavIcon';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Topbar = () => {
  const [navDown, setNavDown] = useState(false);
  const handleNav = () => {
    setNavDown(!navDown);
  };
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='flex h-16 w-full px-6 z-20 md:px-14 shadow-md justify-between items-center sticky top-0 bg-white'>
      <img src={Logo} className='h-10' alt='educate-logo' />
      <div className='hidden lg:flex justify-between items-center'>
        <FaUser />
      </div>

      {/* for small devices */}
      <div className='w-fit h-fit py-4 px-3 lg:hidden' onClick={handleNav}>
        {navDown ? (
          <AiOutlineClose className='text-3xl font-bold text-gray-900' />
        ) : (
          <GiHamburgerMenu className='text-3xl font-bold text-gray-900' />
        )}
        {navDown ? (
          <div className='w-full h-screen  bg-gray-900/60 shadow-md absolute left-0 top-16 animate-fadeIn'>
            <div className='w-full h-fit py-3 bg-white/90 shadow-md animate-slideDown'>
              <div onClick={() => navigate('/dashboard')}>
                <SideNavIcon
                  iconName={'home'}
                  iconDescription={'Dashboard'}
                  active={`${location.pathname === '/dashboard' ? 'text-orange-500' : ''}`}
                />
              </div>
              <div onClick={() => navigate('/dashboard/all-courses')}>
                <SideNavIcon
                  iconName={'courses'}
                  iconDescription={'All Courses'}
                  active={`${
                    location.pathname === '/dashboard/all-courses' ? 'text-orange-500' : ''
                  }`}
                />
              </div>
              <div onClick={() => navigate('/dashboard/study-report')}>
                <SideNavIcon
                  iconName={'study_report'}
                  iconDescription={'Study Report'}
                  active={`${
                    location.pathname === '/dashboard/study-report' ? 'text-orange-500' : ''
                  }`}
                />
              </div>
              <div onClick={() => navigate('/dashboard/forum')}>
                <SideNavIcon
                  iconName={'forum'}
                  iconDescription={'Forum'}
                  active={`${location.pathname === '/dashboard/forum' ? 'text-orange-500' : ''}`}
                />
              </div>
              <div onClick={() => navigate('/dashboard/settings')}>
                <SideNavIcon
                  iconName={'setting'}
                  iconDescription={'Settings'}
                  active={`${location.pathname === '/dashboard/settings' ? 'text-orange-500' : ''}`}
                />
              </div>
              <div
                className='px-3 cursor-pointer rounded-lg text-white mt-5 min-w-fit md:mx-4 h-14 flex justify-center items-center'
                style={{ backgroundColor: '#27153E' }}
              >
                <BiLogOut className='px-1 text-3xl' />
                Logout
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Topbar;
