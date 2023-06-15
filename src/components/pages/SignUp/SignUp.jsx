import React, { useState } from "react";
import signup from "./SignUp.module.css";
import logo from "../../../assets/EducateLogo.png";
import FormInput from "../../reusable/FormInput/FormInput";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  // *!State Management for the input field
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
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
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  // useEffect(() => {
  //   // Get the current URL
  //   const currentURL = window.location.href;

  //   // Extract the value of 'type' parameter
  //   const urlSearchParams = new URLSearchParams(currentURL.split('?')[1]);
  //   const userType = urlSearchParams.get('type');

  //   console.log(userType); // Output: admin
  // }, []);
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
  const passData = () => {
    const currentURL = window.location.href;
    const searchParams = new URLSearchParams(currentURL.split("?")[1]);
    const userType = searchParams.get("type");
    if (userType === "admin") {
      // navigate("/dashboard1");
      console.log("passData after fetch");
      fetch("https://edu-cate.onrender.com/api/v1/instructor/register", {
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
            const data = response.json();
            console.log(data);
            localStorage.setItem("userType", "instructor");
            navigate("/login");
            return response.json();
          } else {
            throw new Error("API request failed");
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (userType === "student") {
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
            localStorage.setItem('userType', 'student')
            navigate("/login");
            return response.json();
          } else {
            throw new Error("API request failed");
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
          setDisabled(!disabled);
        });
    }
  };

  // ! content box body
  return (
    <section className="md:flex flex-end flex-row-reverse lg:flex lg:flex-row h-screen w-full justify-between">
      <div className="w-full lg:w-1/2 py-3 px-2 md:px-14">
        <img className="h-10"
          src={logo}
          alt="Edu_cate"
        />
        <div className="mt-10 flex flex-col justify-start">
          <form
          method="POST"
            id="form"
            onSubmit={handleSubmit}
          >
            <h1 className=" text-3xl md:text-4xl font-bold mb-4">
              Create an account
            </h1>
            <p className="text-sm md:text-xl font-semibold mb-2">Let's get you started</p>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
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
      <div className="hidden md:flex w-1/2 bg-no-repeat bg-center bg-cover bg-registerBg flex-col justify-center lg:px-10 py-36 text-xl text-white h-full">
          <div>
            {/* <img
              src={RegisterImg}
              alt=""
            /> */}
            <h1 className="font-bold text-4xl" style={{ color: "white" }}>
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
