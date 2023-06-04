import React from "react";
import { useState } from "react";
// import "./userAccess.css";
// import {GoogleLogin} from '@react-oauth/google';
import Logo from "../../../assets/EducateLogo.png";
import RegisterImg from "../../../assets/register.png";
import UserEdit from "../../../assets/user-edit.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUserAdd } from 'react-icons/ai';

export default function UserAccess() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
// ! state management for user specification
  const [userType, setUserType] = useState("");
  // const handleUserTypeClick = (type) => {
  //   setUserType(type);
  // };

  const handleContinue =()=>{
    navigate(`./signup?type=${userType}`)
  }
  const handleStudentButtonClick = () => {
    setUserType('student');
  };

  const handleTeacherButtonClick = () => {
    setUserType('admin');
  };
  // const handleContinueClick = () => {
  //   if (userType === "Admin") {

  //      navigate("/signup");
  //   } else if (userType === "student") {
  
  //     navigate("/signup")
      
  //   }
  // };

  return (
    //! form content//*
    <section className="md:flex h-screen">
      <div className="w-full lg:w-1/2 py-3 px-2 md:px-14">
        <img
          src={Logo}
          className="h-10 w-fit"
          alt="Edu_cate"
        />
      
      <div
        // id="accessContent"
        className="mt-10 "
      >
        <form
          // id="accessForm"
          className=""
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-semibold">Create an account</h1>
          <p className="text-lg font-semibold mt-3 mb-5">Please select type of user</p>
          <div className="flex flex-col mb-10">
            <div className="w-full">
              <button
                className= {`${userType === 'student' ? ' hover:bg-orange-500 focus:bg-gray-600/60 disabled:bg-orange-400 disabled:cursor-not-allowed px-4 py-2 text-white w-full mb-5 flex justify-center items-center border-2 p-2 rounded-md border-white':'w-full mb-5 flex justify-center items-center border-2 p-2 rounded-md border-gray-600/60 text-gray-600/60'}`} 
                // id="button"
                onClick={handleStudentButtonClick}
              >
                <AiOutlineUserAdd className="text-2xl" /> 
                Sign up as a student
              </button>
               
            </div>
            <div>
              <button
                // id="button"
                className={`${userType === 'admin' ? ' hover:bg-orange-500 focus:bg-gray-600/60 disabled:bg-orange-400 disabled:cursor-not-allowed px-4 py-2 text-white w-full mb-5 flex justify-center items-center border-2 p-2 rounded-md border-white':'w-full mb-5 flex justify-center items-center border-2 p-2 rounded-md border-gray-600/60 text-gray-600/60'}`} 
                onClick={handleTeacherButtonClick}
              >
                <AiOutlineUserAdd className="text-2xl" /> 
                Sign up as an Admin
              </button>
            </div>
          </div>
          {/* <button className="button1" onClick={handleContinueClick} disabled={!continueEnabled}>Continue</button> */}

          <button
            className={`${userType === 'student' || userType === 'admin' ? 'bg-orange-600 rounded-md p-2 text-white block w-full': 'hidden'}`}
            onClick={handleContinue}
            disabled={!userType}
          >
            Continue
          </button>
          <span
            className=""
            style={{ marginTop: "10px" }}
          >
            Already have an account?
            <Link
              to={`/Login`}
              style={{ color: "orangered", textDecoration: "none" }}
            >
              Sign In
            </Link>
          </span>
        </form>
        </div>
      </div>
      <div className="hidden md:block bg-registerBg bg-cover lg:w-1/2">
        <div className="flex flex-col justify-end px-10 py-36 text-xl text-white h-full">
          <h1 
          style={{ color: "white" }}>
            <span className="font-bold text-3xl">Welcome to</span>
            <span 
            className="font-bold text-3xl"
            style={{ color: "orangered" }}> Educate</span>
          </h1>
          <p className="text-white/90">Sign up to find the best courses according to your preferences</p>
        </div>
      </div>
    </section>
  );
}
