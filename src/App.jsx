import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp/SignUp';
import Dashboard from './components/Dashboard';
import UserAccess from './components/pages/userSpecify/userAccess';
import SecondDashboard from './components/SecondDashboard/SecondDashboard';
import AllCourses from './components/pages/dashboard-pages/AllCourses';
import InstructorsDashboard from './components/InstructorsDashboard';
import AllUploads from './components/pages/dashboard-pages/AllUploads';
import NewCourse from './components/reusable/instructors-sections/NewCourse';
import Settings from './pages/Instructor/Settings';
import Courses from './pages/Instructor/Courses';
import InstructorDashboard  from './pages/Instructor/InstructorDashboard';
import Assessment from './pages/Instructor/Assessment';
import InstructorLayout from './pages/Instructor/InstructorLayout';
import StudentLayout from './pages/Student/StudentLayout';
import StudentDashboard from './pages/Student/StudentDashboard';
import MyCourses from './pages/Student/MyCourses';
import StudentSettings from './pages/Student/StudentSettings';

const App = () => {
  return (
    <BrowserRouter>
      {/* Do not add other components in this App.jsx root component. 
      It serves a purpose to display all other components. 

      If you need to display your component on the browser, Kindly add a path to the codes
      below if not exists, then navigate to the exact path in your browser. 
      eg: http://localhost:3000/login or http://localhost:3000/login/userAccess
      */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard'>
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/dashboard/all-courses' element={<AllCourses />} />
        </Route>

        <Route exact path='/my-class' element={<SecondDashboard />} />

        <Route exact path="/instructor">
          <Route exact path="/instructor" element={<InstructorsDashboard />} />
          <Route exact path="/instructor/courses">
          <Route exact path="/instructor/courses" element={<AllUploads />} />
          <Route exact path="/instructor/courses/create-course" element={<NewCourse />} />
          </Route>
        </Route>

        <Route path='/instructor' element={<InstructorLayout />}>
          <Route path='/instructor' element={<Navigate replace to='dashboard' />} />
          <Route path='dashboard' element={<InstructorDashboard />} />
          <Route path='courses' element={<Courses />} />
          <Route path='assessment' element={<Assessment />} />
          <Route path='settings' element={<Settings />} />
        </Route>

        <Route path='/student' element={<StudentLayout />}>
          <Route path='/student' element={<Navigate replace to='dashboard' />} />
          <Route path='dashboard' element={<StudentDashboard />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='settings' element={<StudentSettings />} />
        </Route>

        <Route exact path='/dashboard/my-class' element={<SecondDashboard />} />
        <Route exact path='/userAccess'>
          <Route path='' element={<UserAccess />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route exact path='/login'>
          <Route exact path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
