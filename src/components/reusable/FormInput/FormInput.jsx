import React, { useState } from "react";
import "./FormInput.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
      {passwordVisible ? <FaEyeSlash className="absolute text-2xl right-5 bottom-[.58rem] cursor-pointer"  /> : <FaEye className="absolute text-2xl right-5 bottom-[.58rem] cursor-pointer"/>}
  </div>)}
      <span className="errorMessage">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
