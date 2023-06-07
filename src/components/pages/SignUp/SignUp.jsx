import React, { useEffect, useState } from "react";
import Logo from "../../../assets/EducateLogo.png";
import FormInput from "../../reusable/FormInput/FormInput";
import { Link, useNavigate, /*useLocation*/} from "react-router-dom";


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
  // useEffect(() => {
  //   // Get the current URL
  //   const currentURL = window.location.href;

  //   // Extract the value of 'type' parameter
  //   const urlSearchParams = new URLSearchParams(currentURL.split('?')[1]);
  //   const userType = urlSearchParams.get('type');

  //   console.log(userType); // Output: admin
  // }, []);

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
navigate("/login")
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

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
    <section className="md:flex md:flex-row-reverse lg:flex lg:flex-row h-screen w-full justify-between">
      <div className="w-full lg:w-1/2 py-3 px-2 md:px-14">
        <img
        className="h-10 w-fit"
        src={Logo}
        alt="Edu_cate"
        />
      <div className="mt-10 w-full flex flex-col justify-start">
          <form
            className="formBox"
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl font-semibold">Create an account</h1>
            <p className="text-lg mt-2">Let's get you started</p>
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
                className="bg-orange-600 rounded-md p-2 text-white block w-full mt-10"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <span
              className="SignIn"
              style={{ marginTop: "2em" }}
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
      <div className="hidden md:flex h-screen w-1/2 bg-no-repeat bg-cover bg-registerBg">
        <div className="flex flex-col justify-end lg:px-10 py-36 text-xl text-white h-full">
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
