import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import Dashboard from "./components/Dashboard";
import  UserAccess from "./components/pages/userSpecify/userAccess"
import SecondDashboard from "./components/SecondDashboard/SecondDashboard";
import AllCourses from "./components/pages/dashboard-pages/AllCourses";
import InstructorsDashboard from "./components/InstructorsDashboard";
import AllUploads from "./components/pages/dashboard-pages/AllUploads";
import NewCourse from "./components/reusable/instructors-sections/NewCourse";

const App = () => {
  return (
    <BrowserRouter>
      {/* Do not add other components in this App.jsx root component. 
      It serves a purpose to display all other components. 

      If you need to display your component on the browser, Kindly add a path to the codes
      below if not exists, then navigate to the exact path in your browser. 
      eg: http://localhost:3000/login or http://localhost:3000/login/signup
      */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard">
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/all-courses" element={<AllCourses />} />
        </Route>
        <Route exact path="/instructor">
          <Route exact path="/instructor" element={<InstructorsDashboard />} />
          <Route exact path="/instructor/courses">
          <Route exact path="/instructor/courses" element={<AllUploads />} />
          <Route exact path="/instructor/courses/create-course" element={<NewCourse />} />
          </Route>
        </Route>
        <Route exact path="/dashboard/my-class" element={<SecondDashboard />} />

        <Route exact path="/userAccess">
        <Route path="" element={<UserAccess/>} />
        <Route path ="signup" element={<SignUp />} />
        </Route>
        <Route exact path="/login">
            <Route exact path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
