import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Dashboard from "./components/Dashboard";

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
        <Route exact path='/' element={<Home />} />
        <Route exact path="/login">
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/login/signup" element={<SignUp />} />
        </Route>
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
   );
}
 
export default App;