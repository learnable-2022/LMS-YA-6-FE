import React, { useState, useEffect } from "react";
import signup from "./SignUp.module.css";
import logo from "../../../assets/EducateLogo.png";
import FormInput from "../../reusable/FormInput/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export default function SignUp() {
  // *!State Management for the input field
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
      errorMessage: "Username should be 3-16 alphabets",
      label: "Name",
      pattern: `^[A-Za-z].{2,17}$`,
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      errorMessage: "Valid email is required" ,
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
      pattern: `^.{8,}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
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
    setDisabled(!disabled);
    console.dir(e.target[0]);
    passData();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  // *! API call//
  const passData = async () => {
    const currentURL = window.location.href;
    const searchParams = new URLSearchParams(currentURL.split("?")[1]);
    const userType = searchParams.get("type");
    // const userType = role === "admin" ? "instructor" : "student";
    const apiUrl =
      userType === "admin"
        ? "https://edu-cate.onrender.com/api/v1/instructor/register"
        : "https://edu-cate.onrender.com/api/v1/auth/register";
    let errorMessage = "";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log("response ", response);
     const data = await response.json();
      if (response.ok) {
        localStorage.setItem("userType", userType);
        navigate("/login");
        // return response.json();
      } else {
        console.log("response not ok ", response);
        const message = data.message;
        throw new Error(message || "API request failed");
      }
    } catch (error) {
      console.log("typeof error ", typeof error);
      console.log("error instanceof AxiosError ", error instanceof AxiosError);
      console.log("error ", error);
      if (error instanceof AxiosError) {
        errorMessage = error.response.data.message;
        console.log(errorMessage);
        if (errorMessage.toLowerCase().includes("email")) {
          setEmailError(errorMessage);
        }
        if (userType === "student") {
          setEmailError("Student with email already exists");
        } 
        else if (userType === "admin") {
      setEmailError("Instructor with email already exists");
    }
    
      } else {
        errorMessage = error.message;
        setEmailError("Email already exists")
        if (errorMessage.toLowerCase().includes("email")) {
          setEmailError(errorMessage);
        }
        if (userType === "student") {
          setEmailError("Student with email already exists");
        }
        if (userType === "admin") {
          setEmailError("Instructor with email already exists");
        }
        if (errorMessage.toLowerCase().includes("password")) {
          setPasswordError(errorMessage);
        }
      }
      setDisabled(false);
    }
  };
  useEffect(() => {}, [disabled]);
  useEffect(() => {
  }, [emailError]);
  console.log(emailError)
  // ! content box body
  return (
    <section className="md:flex md:flex-row-reverse lg:flex lg:flex-row h-screen w-full justify-between px-2 md:p-0">
      <div className="grid w-full lg:w-1/2 py-3 px-2 md:px-14">
        <div className="w-full justify-self-start">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-10 w-fit"
              />
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-start">
          <form
            method="POST"
            id="form"
            onSubmit={handleSubmit}
          >
            <h1 className=" text-3xl md:text-4xl font-bold mb-4">
              Create an account
            </h1>
            <p className="text-sm md:text-xl font-semibold mb-2 p-0">
              Let's get you started
            </p>
            {inputs.map((input) => {
              console.log(emailError)
              console.log(input.name)
              if (emailError && input.name === "email") {
                input.emailError = emailError;
                console.log("emailError present")
              }
              console.log(input)
              return (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              );
            })}
            <div className={signup["link-btn-wrapper"]}>
              {disabled === true ? (
                <button
                  className={signup.button1}
                  type="submit"
                >
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                </button>
              ) : (
                <button
                  className={signup.button1}
                  type="submit"
                >
                  Sign Up
                </button>
              )}
            </div>
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
      {/* <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"> */}
      <div className="hidden md:flex w-1/2 bg-no-repeat bg-center bg-cover filter brightness-90 bg-registerBg bg-absolute flex-col justify-center lg:px-10 py-36 text-xl text-white h-full">
        <div className="md:hidden lg:block">
          <h1
            className="font-bold text-4xl filter contrast-125"
            style={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 6)",
            }}
          >
            Welcome to
            <span style={{ color: "orangered" }}> Educate</span>
          </h1>
          <p style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 6)" }}>
            Sign up to find the best courses according to your preferences
          </p>
        </div>
      </div>
    </section>
  );
}
