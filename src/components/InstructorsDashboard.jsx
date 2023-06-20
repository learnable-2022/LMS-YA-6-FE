import SideNavbar from './reusable/dashboard-sections/SideNavbar';
import Topbar from './reusable/dashboard-sections/Topbar';
import StudentOverview from './reusable/StudyReport/StudentOverview';

const InstructorsDashboard = () => {
  return (
    <div className=''>
      <Topbar />
      <div className='flex h-screen'>
        <SideNavbar instructorsRoute={''} />
        <StudentOverview />
      </div>
    </div>
  );
};

export default InstructorsDashboard;
