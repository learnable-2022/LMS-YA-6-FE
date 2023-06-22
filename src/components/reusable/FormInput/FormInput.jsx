import React, { useState } from "react";
import "./FormInput.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const { label, errorMessage, onChange, id, ...Ip } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="FormInput w-full lg:mb-0">
      <label>{label}</label>
      <input
        {...Ip}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => Ip.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
        type={Ip.name === 'password' ? (passwordVisible ? 'text' : 'password'):Ip.type}
        

      />
      {Ip.name === 'password' &&  (
    <div className="relative" onClick={togglePasswordVisibility}>
      {passwordVisible ? <AiOutlineEye className="absolute text-2xl right-5 bottom-[.58rem] cursor-pointer"  /> : <AiOutlineEyeInvisible className="absolute text-2xl right-5 bottom-[.58rem] cursor-pointer"/>}
  </div>)}
  {/* {Ip.name === 'email' && errorMessage === 'Valid email is required' && (
        <span className="errorMessage">Valid email is required</span>
      )} */}
      {Ip.name === 'email' && errorMessage && (
  <span className="errorMessage">{errorMessage}</span>
)}
    </div>
  );
};

export default FormInput;
