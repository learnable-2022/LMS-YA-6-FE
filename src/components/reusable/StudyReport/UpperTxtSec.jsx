import React, { useEffect, useState } from 'react'
import DynamicUsername from "../dashboard-sections/DynamicUsername/DynamicUsername"

import { instructorProfile } from './../../../api';
function UpperTxtSec() {

  const token = localStorage.getItem("token")
  const [name, setName] =useState("")
useEffect(() => {
  const fetchUsername = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
    };

    try {
      const { data } = await instructorProfile(config);
      console.log(data);
      setName(data.data.fullname)
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  fetchUsername();
}, [token]);
  return (
    <>
      <div className= ""> 
        <h1 className=" text-[#1F3042] text-4xl font-bold">
        <DynamicUsername name={name}/>
        </h1>
        <p className='text-black'>
          Welcome back, here’s what happened with your courses while you were away!
        </p>
      </div>
    </>
  )
}

export default UpperTxtSec