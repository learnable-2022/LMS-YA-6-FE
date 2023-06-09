import React from "react";
import { useState } from "react";

import signup from "../SignUp/SignUp.module.css";
import logo from "../../../assets/EducateLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function UserAccess() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // ! state management for user specification
  const [userType, setUserType] = useState("");
  const handleContinue = () => {
    navigate(`./signup?type=${userType}`);
  };
  const handleStudentButtonClick = () => {
    setUserType("student");
  };

  const handleTeacherButtonClick = () => {
    setUserType("admin");
  };

  return (
    //! form content//*
    <section className="md:flex md:flex-row-reverse lg:flex lg:flex-row h-screen w-full justify-between">
      <div className="w-full lg:w-1/2 py-3 px-2 md:px-14">
        <img
          className="h-10 w-fit"
          src={logo}
          alt="Edu_cate"
          style={{height:'50px', width:'80px'}}
        />
        <div
          className="mt-10 flex flex-col justify-start"
          // id={signup.accessContent}
        >
          <form
            // id={signup.accessForm}
            // className={signup.formBox}
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl font-bold mb-4">Create an account</h1>
            <p className="text-xl font-semibold mb-4">Please select type of user</p>
            <div className={signup.useType}>
              <div>
                <button
                  className={`${
                    userType === "student"
                      ? " hover:bg-gray-600/60 focus:bg-gray-600/60 disabled:bg-orange-400 disabled:cursor-not-allowed p-5 text-white w-full mb-5 flex justify-center items-center border-2 p-5 rounded-md border-white"
                      : "w-full flex justify-center items-center border-2 p-5 mb-5 rounded-md border-gray-600/60 text-gray-600/60 "
                  }`}
                  style={{ marginTop: "61px" }}
                  onClick={handleStudentButtonClick}
                >
                  <AiOutlineUserAdd className="text-2xl" />
                  Sign up as a student
                </button>
              </div>
              <div>
                <button
                  className={`${
                    userType === "admin"
                      ? " hover:bg-gray-600/60 focus:bg-gray-600/60 disabled:bg-orange-400 disabled:cursor-not-allowed p-5 text-white w-full flex justify-center items-center border-2 p-5 rounded-md border-white"
                      : "w-full mt-5 flex justify-center items-center border-2 p-5 rounded-md border-gray-600/60 text-gray-600/60"
                  }`}
                  style={{ marginBottom: "61px" }}
                  onClick={handleTeacherButtonClick}
                >
                  <AiOutlineUserAdd className="text-2xl" />
                  Sign up as an Admin
                </button>
              </div>
            </div>
            <button
              className={`${
                userType === "student" || userType === "admin"
                  ? "bg-orange-600 rounded-md p-4 text-white block w-full"
                  : "hidden"
              }`}
              onClick={handleContinue}
              disabled={!userType}
            >
              Continue
            </button>
            <span
              className={signup.SignIn}
              style={{
                marginTop: "10px",
                display: "block",
                textAlign: "center",
              }}
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
       <div className="hidden md:flex w-1/2 bg-no-repeat bg-registerBg flex-col justify-end lg:px-10 py-36 text-xl text-white h-full">
          <div>
            <h1
              className="font-bold text-4xl"
              style={{ color: "white" }}
            >
              Welcome to
              <span style={{ color: "orangered" }}> Educate</span>
            </h1>
            <p>
              Sign up to find the best courses according to your preferences
            </p>
          </div>
        </div>
    </section>
  );
}
