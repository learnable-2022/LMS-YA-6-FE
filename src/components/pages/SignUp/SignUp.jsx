import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../../assets/logo.png";
import RegisterImg from "../../../assets/register.png";
// import google from "../../../assets/google.png";
import FormInput from "../../reusable/FormInput/FormInput";
import { Link, useNavigate, /*useLocation*/} from "react-router-dom";
// import GAuthButton from "../../reusable/GOAuth/GOAuth";

export default function SignUp() {
  // *!State Management for the input field
  const navigate = useNavigate();
  // const location = useLocation();
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //! Input field. Regex code used to validate form/*
  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Enter your name",
      errorMessage: "Username should be 3-16 characters",
      label: "Name",
      pattern: "^[A-Za-z0-9](?=.*[@$^#!%*&]){3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      errorMessage: "Valid email is required",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      errorMessage:
        "Password should be 8-20 characters and should include alphanumeric charcters and a special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=*[a-zA-Z])(?=.*[@$^#!%*&])[a-zA-Z0-9@#^$!%*?&]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target[0]);
    passData();
//     const searchParams = new URLSearchParams(location.search);
//     const userType = searchParams.get ('type')
//   if (userType === "Admin") {
//     navigate("/dashboard1");
// } else if (userType === "student") {
//     navigate("/dashboard");
//  }
navigate("/login")
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  // const handleSignUp = () => {
  //   // const {fullname, password, email}=values;
  //   // const userType = location.state;

  //   // if (userType === "Admin") {
  //   //   navigate("/dashboard");
  //   // } else if (userType === "student") {
  //   //   navigate("dashboard");
  //   // }
  // };

  // *! API call//
  const passData = () => {
    console.log("passData before fetch");
    fetch("https://edu-cate.onrender.com/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        console.log("before response.ok", response);
        if (response.ok) {
          console.log("request successful");
          return response.json();
        } else {
          throw new Error("API request failed");
        }
      })
      .then((data) => {
        console.log(data);
        // navigate("./login");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // ! content box body
  return (
    <section className="sign-up-wrapper">
      <div className="logoContent">
        <img
          src={logo}
          alt="Edu_cate"
        />
      </div>
      <div className="contentBox">
        <form
          className="formBox"
          onSubmit={handleSubmit}
        >
          <h1>Create an account</h1>
          <p>Let's get you started</p>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="link-btn-wrapper">
            {/* <Link to={`/signup-2`}> */}
            <button
              // onClick={ handleSignUp }
              className="button1"
              type="submit"
            >
              Sign Up
            </button>
            {/* </Link> */}
          </div>
          {/* <span className="spanOr">or</span> */}
          {/* <a
            href="#"
            className="google-btn"
          >
            <GAuthButton />
          </a> */}
          <span
            className="SignIn"
            style={{ marginTop: "10px", fontSize: "10px" }}
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
