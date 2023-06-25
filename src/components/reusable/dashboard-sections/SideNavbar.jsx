import { useLocation, useNavigate } from 'react-router-dom';
import SideNavIcon from './SideNavIcon';

const SideNavbar = ({ instructorsRoute, studentRoute, courseTitle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleInstructorLogout = () => {
    localStorage.removeItem('instructor');
    if (localStorage.getItem('instructor') === null) {
      navigate('/');
    }
  };
  const handleStudentLogout = () => {
    localStorage.removeItem('student');
    if (localStorage.getItem('student') === null) {
      navigate('/');
    }
  };
  const handleClick = () => {
    alert('This page is still under construction!');
  };

  return (
    <div
      className='hidden lg:flex py-10 shadow-md bg-white flex-col items-center '
      style={{ width: '20%' }}
    >
      <div className='w-fit h-fit sticky top-24 space-y-10'>
        {location.pathname === `/dashboard${studentRoute}` ? (
          <>
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
            <div /*onClick={()=>navigate('/dashboard/study-report')}*/ onClick={handleClick}>
              <SideNavIcon
                iconName={'study_report'}
                iconDescription={'Study Report'}
                active={`${
                  location.pathname === '/dashboard/study-report' ? 'text-orange-500' : ''
                }`}
              />
            </div>
            <div /*onClick={()=>navigate('/dashboard/forum')}*/ onClick={handleClick}>
              <SideNavIcon
                iconName={'forum'}
                iconDescription={'Forum'}
                active={`${location.pathname === '/dashboard/forum' ? 'text-orange-500' : ''}`}
              />
            </div>
            <div /*onClick={()=>navigate('/dashboard/support')}*/ onClick={handleClick}>
              <SideNavIcon
                iconName={'support'}
                iconDescription={'24/7 Support'}
                active={`${location.pathname === '/dashboard/support' ? 'text-orange-500' : ''}`}
              />
            </div>
            <div /*onClick={()=>navigate('/dashboard/settings')}*/ onClick={handleClick}>
              <SideNavIcon
                iconName={'setting'}
                iconDescription={'Settings'}
                active={`${location.pathname === '/dashboard/settings' ? 'text-orange-500' : ''}`}
              />
            </div>

            {/* Logout Btn */}
            <div
              onClick={handleStudentLogout}
              className='hover:border-2 hover:border-orange-600 rounded-lg bg-gray-600/60 text-white'
            >
              <SideNavIcon iconName={'signout'} iconDescription={'Logout'} />
            </div>
          </>
        ) : location.pathname === `/instructor${instructorsRoute}` ? (
          <>
            <div onClick={() => navigate('/instructor')}>
              <SideNavIcon
                iconName={'home'}
                iconDescription={'My Dashboard'}
                active={`${location.pathname === '/instructor' ? 'text-orange-500' : ''}`}
              />
            </div>
            <div onClick={() => navigate('/instructor/messages')}>
              <SideNavIcon
                iconName={'message'}
                iconDescription={'Inbox'}
                active={`${location.pathname === '/instructor/messages' ? 'text-orange-500' : ''}`}
              />
            </div>
            <div onClick={() => navigate('/instructor/courses')}>
              <SideNavIcon
                iconName={'courses'}
                iconDescription={'Courses'}
                active={`${location.pathname === '/instructor/courses' ? 'text-orange-500' : ''}`}
              />
            </div>
            <div onClick={() => navigate('/instructor/assessment')}>
              <SideNavIcon
                iconName={'todo'}
                iconDescription={'Assessment'}
                active={`${
                  location.pathname === '/instructor/assessment' ? 'text-orange-500' : ''
                }`}
              />
            </div>
            <div onClick={() => navigate('/instructor/support')}>
              <SideNavIcon
                iconName={'support'}
                iconDescription={'24/7 Support'}
                active={`${location.pathname === '/instructor/support' ? 'text-orange-500' : ''}`}
              />
            </div>
            <div onClick={() => navigate('/instructor/live')}>
              <SideNavIcon
                iconName={'camera'}
                iconDescription={'Live Sessions'}
                active={`${location.pathname === '/instructor/live' ? 'text-orange-500' : ''}`}
              />
            </div>
            <div onClick={() => navigate('/instructor/settings')}>
              <SideNavIcon
                iconName={'setting'}
                iconDescription={'Settings'}
                active={`${location.pathname === '/instructor/settings' ? 'text-orange-500' : ''}`}
              />
            </div>

            {/* Logout Btn */}
            <div
              onClick={handleInstructorLogout}
              className='hover:border-2 hover:border-orange-600 rounded-lg bg-gray-600/60 text-white'
            >
              <SideNavIcon iconName={'signout'} iconDescription={'Logout'} />
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SideNavbar;
