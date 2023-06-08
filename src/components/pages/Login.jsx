import { useState, useEffect } from "react";
import Logo from "../../assets/EducateLogo.png";
import { AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CryptoJS from 'crypto-js'


const Login = ()=> {
  const [isPwdVisible, setIsPwdVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault()
    setDisabled(!disabled)
    console.log('SUBMITED')
    // const encryptedPassword = CryptoJS.SHA256(password).toString();
    const formData = {
      'email':email, 
      'password':password
    }
    console.log(formData)
    const userType = localStorage.getItem('userType')
    if(userType === 'instructor'){
    fetchInstructorData(formData)
   }else if(userType === 'student'){
    fetchStudentData(formData)
   }
  }
  useEffect(()=>{},[email, password])

  // API call for an instructor
      
        const fetchInstructorData = async (formData)=>{
          try {
          const response = await fetch('https://edu-cate.onrender.com/api/v1/instructor/login',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
        
        if(response.ok){
            console.log("request successful");
            localStorage.setItem('userType', 'instructor')
            console.log(response)
            navigate("/instructor");
            return response.json();
          } else {
                throw new Error("API request failed");
                setDisabled(!disabled)
          }
      } catch (error) {
        console.log(error)
      }
    }

    // Api call for a student
    const fetchStudentData = async (formData)=>{
      try {
      const response = await fetch('https://edu-cate.onrender.com/api/v1/instructor/login',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer `
        },
        body: JSON.stringify(formData),
      })
    
    if(response.ok){
        console.log("request successful");
        localStorage.setItem('userType', 'instructor')
        navigate("/instructor");
        return response.json();
      } else {
            throw new Error("API request failed");
            setDisabled(!disabled)
      }
  } catch (error) {
    console.log(error)
  }
}
    
      // fetch("https://edu-cate.onrender.com/api/v1/instructor/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // })
      //   .then((response) => {
      //     console.log("before response.ok", response);
      //     if (response.ok) {
      //       console.log("request successful");
      //       localStorage.setItem('userType', 'instructor')
      //       navigate("/instructor");
      //       return response.json();
      //     } else {
      //       throw new Error("API request failed");
      //     }
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
  //   } else if (userType === "student") {
  //     console.log("passData before fetch");
  //     fetch("https://edu-cate.onrender.com/api/v1/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     })
  //       .then((response) => {
  //         console.log("before response.ok", response);
  //         if (response.ok) {
  //           console.log("request successful");
  //           localStorage.setItem('userType', 'student')
  //           navigate("/dashboard");
  //           return response.json();
  //         } else {
  //           throw new Error("API request failed");
  //         }
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
    
  // };




  const handlePwdVisible = ()=>{
    setIsPwdVisible(!isPwdVisible)
  }
      return (
          <div className="md:flex md:flex-row-reverse lg:flex lg:flex-row h-screen w-full justify-between">
              <div className="w-full lg:w-1/2 py-3 px-2 md:px-14">
                <img src={Logo} alt="logo" className="h-10 w-fit" />
                <div className="mt-10 flex flex-col justify-start">
                  <form method="POST" onSubmit={handleSubmit}>
                    <h1 className="text-4xl font-semibold mb-10">
                      Login into your account
                    </h1>
                    <label htmlFor="email" className="relative block text-sm font-medium text-gray-700" >
                      Email
                    </label>
                    <input 
                      id="email" 
                      type="email" 
                      name="email" 
                      className="mb-5 w-full px-4 py-2 text-gray-700 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" 
                      placeholder="Enter your email address" 
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                      
                      <label htmlFor="password" className="relative block text-sm font-medium text-gray-700">
                      Password
                      {
                        isPwdVisible ? (
                          < AiOutlineEyeInvisible className="absolute text-2xl right-5 top-7 cursor-pointer" onClick={handlePwdVisible} />
                        ):
                        (
                          < AiOutlineEye className="absolute text-2xl right-5 top-7 cursor-pointer" onClick={handlePwdVisible} />
                        )
                      }
                    </label>
                    <input 
                      id="password" 
                      type={`${isPwdVisible ? "password" : "text"}`} 
                      name="password" 
                      className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" 
                      placeholder="Enter your password" 
                      onChange={(e)=>setPassword(e.target.value)}
                    />

                    {
                      disabled === true ? (
                        <div className='mt-10 p-2 h-12 flex justify-center items-center bg-orange-600 text-white rounded-md cursor-pointer' style={{width: '100%'}}>
                          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                      ):(
                        <button type="submit" className='mt-10 p-2 h-12 flex justify-center items-center bg-orange-600 text-white rounded-md cursor-pointer' style={{width: '100%'}}>
                        Sign In
                        </button>
                      )
                    }
                  </form>
                </div>
              </div>

              <div className="hidden md:flex w-1/2 bg-no-repeat bg-loginBg flex-col justify-end lg:px-10 py-36 text-xl text-white h-full">
              <h1 
                style={{ color: "white" }}>
                <span className="font-bold text-4xl">Welcome to</span>
                <span 
                className="font-bold text-4xl"
                style={{ color: "orangered" }}> Educate</span>
              </h1>
          <p className="text-white/90">Sign up to find the best courses according to your preferences</p>
              </div>
          </div>
      );
}

export default Login;