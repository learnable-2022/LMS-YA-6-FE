import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import img from "../../assets/desktop.jpg";
import { AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai";
import googlebtn from "../../assets/Google logo.png"
import { useNavigate } from "react-router-dom";




function Login() {
  const intialValues = {email: "", password: ""};
  const [formValues,  setFormValues]= useState(intialValues);
  const [formErrors,  setFormErrors]= useState({});
  const [isSubmit,  setIsSubmit]= useState(false);
  const [visible, setVisible]= useState(false)
  const [loginError, setLoginError] = useState("");

  // function handleCallbackResponse(response){
  //   console.log("Encoded JWT ID token: " + response.credential)
  // }
  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id: "337279948824-e5uk24qm2cojf9a0avudk2si1gcv1j4r.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   })

  //   google.accounts.id.renderButton(
  //     document.getElementById("google-btn"),
  //     { theme: "outline", size: "large" }
  //   )
  // }, [])
  
  const handleChange = (e) => {
    // console.log(e.target);
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0) {
      handleAPICall();
    }
  };

  useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email address!";
    }

    if (!values.password) {
      errors.password = "password is required!";
    }

    return errors;
  };

  // Backend implementation
  const navigate = useNavigate();

  const handleAPICall = async () => {
    try {
      const response = await fetch("https://edgegap.onrender.com/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (response.ok) {
        // Signin successful
        // Perform desired actions (e.g., redirect, store token)
        console.log("Signin successful!");
        navigate("/dashboard");
      } else {
        // Signin failed
        const errorData = await response.json();
        setLoginError(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (

      <div className="container">
        <div><img src={ require('../../assets/EducateLogo.png')} className="logo"/></div>
        <form id="login-form" onSubmit={handleSubmit} method="POST" action="/api/v1/auth/login">
          <h1>Login into your account</h1>
          <p className="first-p">Please select a login method</p>
          <div className="input-group">
            <label htmlFor="email" id="lab">
              Email
            </label>
            <input type="email" id="email" name="email" placeholder="Enter Your Email" value={ formValues.email } onChange={handleChange}/>
          </div>
          <p className="input-response">{ formErrors.email }</p>
          <div className="input-group flex-input">
            <label htmlFor="password" id="lab">
              Password
            </label>
            <input id="password" name="password" placeholder="Enter Your Password" value={ formValues.password } onChange={handleChange} type={visible ? "text":"password"}/>
            <div className="eye-icon" onClick={() => setVisible(!visible)}>
              {
                visible ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>
              }
            </div>
          </div>
          <p className="input-response">{ formErrors.password }</p>
          <button type="submit" id="btn">
            Login
          </button>
          {loginError && <p className="error-message">{loginError}</p>}
          <p className="last-p">Don't have an account? <a href="">Sign Up</a></p>
        </form>
        
      <div className="grey-bg">
        <p className="wlc-writeup">
          <h1>Welcome back to <b>Educate</b></h1>
          Login into your account to continue your learning journey.
        </p>
        <img src={img} alt="man on laptop" className="grey-img"></img>
      </div>
      <div className="clr"></div>
      </div>

  );
}

export default Login;