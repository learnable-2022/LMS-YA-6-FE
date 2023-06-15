import { useState, useEffect } from "react";
import Logo from "../../assets/EducateLogo.png";
import { AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CryptoJS from 'crypto-js'


const Login = ()=> {
  const [isPwdVisible, setIsPwdVisible] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault()
    const encryptedPassword = CryptoJS.SHA256(password).toString();
    const formData = {email, encryptedPassword}
    // console.log(formData)
  }
  const handlePwdVisible = ()=>{
    setIsPwdVisible(!isPwdVisible)
  }
      return (
          <div className="md:flex md:flex-row-reverse lg:flex lg:flex-row h-screen w-full justify-between">
              <div className="w-full lg:w-1/2 py-3 px-2 md:px-14">
                <img src={Logo} alt="logo" className="h-10 w-fit" />
                <div className="mt-10 flex flex-col justify-start">
                  <form action="" method="POST">
                    <h1 className="text-4xl font-semibold mb-10">
                      Login into your account
                    </h1>
                    <label htmlFor="email" className="relative block text-sm font-medium text-gray-700">
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

                    <div className='mt-10 p-2 h-12 flex justify-center items-center bg-orange-600 text-white rounded-md cursor-pointer' onClick={handleSubmit}>
                      Sign In
                    </div>
                  </form>
                </div>
              </div>

              <div className="hidden md:flex w-1/2 bg-no-repeat bg-loginBg flex-col justify-end lg:px-10 py-36 text-xl text-white h-full">
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
      );
}

export default Login;