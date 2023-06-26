import Footer from '../../reusable/Footer';
import CourseContents from '../../reusable/all-courses/CourseContents';
import Courses from '../../reusable/all-courses/Courses';
import Main from '../../reusable/dashboard-sections/Main';
import SideNavbar from '../../reusable/dashboard-sections/SideNavbar';
import Topbar from '../../reusable/dashboard-sections/Topbar';

const AllCourses = () => {
  return (
    <div className=' overflow-x-hidden'>
      <Topbar />
      <div className='flex h-fit min-h-screen '>
        <SideNavbar studentRoute={'/all-courses'} />
        <div className='md:w-4/5 px-2 md:px-8 mb-5 mt-10'>
        <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCourses;
