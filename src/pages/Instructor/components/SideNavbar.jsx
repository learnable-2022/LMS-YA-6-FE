import { useLocation, useNavigate } from 'react-router-dom';
import SideNavIcon from '../../../components/reusable/dashboard-sections/SideNavIcon';

const SideNavbar = ({ instructorsRoute, studentRoute, courseTitle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleInstructorLogout = () => {
    localStorage.removeItem('instructor');
    if (localStorage.getItem('instructor') === null) {
      navigate('/');
    }
  };

  return (
    <div className='w-fit flex flex-col justify-between h-full'>
      <div className='flex flex-col gap-10'>
        <div onClick={() => navigate('dashboard')}>
          <SideNavIcon
            iconName={'home'}
            iconDescription={'My Dashboard'}
            active={`${location.pathname === '/instructor' ? 'text-orange-500' : ''}`}
          />
        </div>
        <div onClick={() => navigate('courses')}>
          <SideNavIcon
            iconName={'courses'}
            iconDescription={'Courses'}
            active={`${location.pathname === '/instructor/courses' ? 'text-orange-500' : ''}`}
          />
        </div>
        <div onClick={() => navigate('assessment')}>
          <SideNavIcon
            iconName={'todo'}
            iconDescription={'Assessment'}
            active={`${location.pathname === '/instructor/assessment' ? 'text-orange-500' : ''}`}
          />
        </div>
        <div onClick={() => navigate('settings')}>
          <SideNavIcon
            iconName={'setting'}
            iconDescription={'Settings'}
            active={`${location.pathname === '/instructor/settings' ? 'text-orange-500' : ''}`}
          />
        </div>
      </div>
      {/* Logout Btn */}
      <div onClick={handleInstructorLogout}>
        <SideNavIcon iconName={'signout'} iconDescription={'Logout'} />
      </div>
    </div>
  );
};

export default SideNavbar;
