import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/EducateLogo.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import * as api from "../../api";
import { AxiosError } from "axios";

const Login = () => {
  // const token = localStorage.getItem("token")
  const [isPwdVisible, setIsPwdVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [role, setRole] = useState("student");
  // const [terror, setError] = useState(""); // New state for error message
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("")
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(!disabled);
console.log(disabled)
    const formData = {
      email,
      password,
    };

    try {
      let data;
      if (role === "student") {
        data = await api.loginStudent(formData);
      } else if (role === "instructor") {
        data = await api.loginInstructor(formData);
      }
      
      // else {
      //   setError("Invalid credentials"); // Set a generic error message for invalid credentials
      // }

      console.log(data);
  localStorage.setItem("token", data.data.data);
  localStorage.setItem("role", data.data.role);
      if (data.data.role === "student") {
        navigate("/dashboard");
      } else if (data.data.role === "instructor") {
        navigate("/instructor");
      }
      return data.data;
    } catch (error) {
   
      // setError(error.response.data.message);
      //  // Set the error message
       console.log(typeof error)
       console.log(error instanceof AxiosError)
      console.log(error);
      if (error instanceof AxiosError ){
        const errorMessage =error.response.data.message
        console.log(errorMessage)
        if (errorMessage.toLowerCase().includes("email")){
          setEmailError(errorMessage)
        }
        if(errorMessage.toLowerCase().includes("password")){
          setPasswordError(errorMessage)
        }
      }
setDisabled(false)
console.log(disabled)

    }
  };
  useEffect(() => {}, [disabled]);
  useEffect(() => {
    passwordError && setPasswordError("");
    emailError && setEmailError("");
     // Clear the error message when email or password changes
  }, [email, password]);


  const handlePwdVisible = () => {
    setIsPwdVisible(!isPwdVisible);
  };

  return (
    <div className="md:flex md:flex-row-reverse lg:flex lg:flex-row h-screen w-full justify-between px-2 md:p-0">
      <div className="grid w-full lg:w-1/2 py-3 px-2 md:px-14">
        <div className="w-full justify-self-start">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className="h-10 w-fit"
              />
            </Link>
            <div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-start">
          <form onSubmit={handleSubmit}>
            <h1 className="text-4xl font-semibold mb-10">
              Login into your account
            </h1>
            <label
              htmlFor="email"
              className="relative block text-sm font-medium text-gray-700"
            >

              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
             {passwordError && ( // Render the error message if it exists
            <div className="text-red-500 text-xs">{emailError}</div>
          )}
            <label
              htmlFor="password"
              className=" mt-5 relative block text-sm font-medium text-gray-700"
            >
              Password
              {isPwdVisible ? (
                <AiOutlineEyeInvisible
                  className="absolute z-40 text-2xl right-5 top-7 cursor-pointer"
                  onClick={handlePwdVisible}
                />
              ) : (
                <AiOutlineEye
                  className="absolute z-40 text-2xl right-5 top-7 cursor-pointer"
                  onClick={handlePwdVisible}
                />
              )}
            </label>
            <input
              id="password"
              type={`${isPwdVisible ? "password" : "text"}`}
              name="password"
              required
              className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && ( // Render the error message if it exists
            <div className="text-red-500 text-xs">{passwordError}</div>
          )}
      


            {disabled === true ? (
              <div
                className="mt-10 p-2 h-12 flex justify-center items-center bg-orange-600 text-white rounded-md cursor-pointer"
                style={{ width: "100%" }}
              >
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <button
                type="submit"
                className="mt-10 p-2 h-12 flex justify-center items-center bg-orange-600 text-white rounded-md cursor-pointer"
                style={{ width: "100%" }}
              >
                Sign In
              </button>
            )}
          </form>
          <span
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Don't have an account?
            <p
              style={{ color: "orangered", textDecoration: "none" }}
              className="cursor-pointer"
              onClick={() => navigate("/userAccess")}
            >
              Sign Up
            </p>
          </span>
        </div>
      </div>
      <div className="hidden md:flex flex-end w-1/2 bg-no-repeat bg-loginBg bg-absolute filter brightness-90 bg-center bg-cover  flex-col justify-center lg:px-10 py-36 text-xl text-white h-full">
        <div className="md:hidden lg:block">
          <h1
            className="font-bold text-4xl"
            style={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 6)",
            }}
          >
            Welcome to
            <span
              style={{
                color: "orangered",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 6)",
              }}
            >
              {" "}
              Educate
            </span>
          </h1>
          <p style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 6)" }}>
          Sign up to find the best courses according to your preferences
          </p>
        </div>
      </div>
      </div>
  );
};

export default Login;