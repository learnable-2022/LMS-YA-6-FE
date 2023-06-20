import { useLocation, useNavigate } from 'react-router-dom';
import SideNavIcon from '../../../components/reusable/dashboard-sections/SideNavIcon';

const SideNavbar = ({ instructorsRoute, studentRoute, courseTitle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleStudentLogout = () => {
    localStorage.removeItem('student');
    if (localStorage.getItem('student') === null) {
      navigate('/');
    }
  };
  return (
    <div className='w-fit flex flex-col justify-between h-full'>
      <div className='flex flex-col gap-10'>
        <div onClick={() => navigate('dashboard')}>
          <SideNavIcon
            iconName={'home'}
            iconDescription={'Dashboard'}
            active={`${location.pathname === '/dashboard' ? 'text-orange-500' : ''}`}
          />
        </div>
        <div onClick={() => navigate('my-courses')}>
          <SideNavIcon
            iconName={'courses'}
            iconDescription={'All Courses'}
            active={`${location.pathname === '/dashboard/all-courses' ? 'text-orange-500' : ''}`}
          />
        </div>
        <div onClick={() => navigate('forum')}>
          <SideNavIcon
            iconName={'forum'}
            iconDescription={'Forum'}
            active={`${location.pathname === '/dashboard/forum' ? 'text-orange-500' : ''}`}
          />
        </div>
        <div onClick={() => navigate('settings')}>
          <SideNavIcon
            iconName={'setting'}
            iconDescription={'Settings'}
            active={`${location.pathname === '/dashboard/settings' ? 'text-orange-500' : ''}`}
          />
        </div>
      </div>

      {/* Logout Btn */}
      <div onClick={handleStudentLogout} className=''>
        <SideNavIcon iconName={'signout'} iconDescription={'Logout'} />
      </div>
    </div>
  );
};

export default SideNavbar;
