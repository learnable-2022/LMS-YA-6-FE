import React from "react";
import { useState } from "react";
// import "./userAccess.css";
// import {GoogleLogin} from '@react-oauth/google';
import logo from "../../../../assets/logo.png";
import RegisterImg from "../../../../assets/register.png";
import UserEdit from "../../../../assets/user-edit.png";
import { Link, useNavigate } from "react-router-dom";

export default function UserAccess() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
// ! state management for user specification
  const [userType, setUserType] = useState(null);

  const handleUserTypeClick = (type) => {
    setUserType(type);
  };

  const handleContinueClick = () => {
    if (userType === "Admin") {

       navigate("/Login");
    } else if (userType === "student") {
  
      navigate("/dashboard")
      
    }
  };

  return (
    //! form content//*
    <section className="App">
      <div className="logoContent">
        <img
          src={logo}
          alt="Edu_cate"
        />
      </div>
      <div
        id="accessContent"
        className="contentBox"
      >
        <form
          id="accessForm"
          className="formBox"
          onSubmit={handleSubmit}
        >
          <h1>Create an account</h1>
          <p>Please select type of user</p>
          <div className="useType">
            <div>
              <button
                id="button"
                onClick={() => handleUserTypeClick("student")}
              >
                <img
                  src={UserEdit}
                  alt="User"
                />
                Sign up as a student
              </button>
            </div>
            <div>
              <button
                id="button"
                onClick={() => handleUserTypeClick("Admin")}
              >
                <img
                  src={UserEdit}
                  alt="User"
                />
                Sign up as an Admin
              </button>
            </div>
          </div>
          {/* <button className="button1" onClick={handleContinueClick} disabled={!continueEnabled}>Continue</button> */}

          <button
            className="button1"
            onClick={handleContinueClick}
            disabled={!userType}
          >
            Continue
          </button>
          <span
            className="SignIn"
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
      <div className="imgBox">
        <div className="BannerText">
          <h1 style={{ color: "white" }}>
            Welcome to
            <span style={{ color: "orangered" }}> Educate</span>
          </h1>
          <p>Sign up to find the best courses according to your preferences</p>
        </div>
        <img
          src={RegisterImg}
          alt=""
        />
      </div>
    </section>
  );
}
