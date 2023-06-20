import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/EducateLogo.png';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import * as api from '../../api';

const Login = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(!disabled);

    const formData = {
      email,
      password,
    };

    try {
      let data;
      if (role === 'student') {
        data = await api.loginStudent(formData);
      } else if (role === 'instructor') {
        data = await api.loginInstructor(formData);
      }

      console.log(data)
      return data.data;
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {}, [email, password]);


  const handlePwdVisible = () => {
    setIsPwdVisible(!isPwdVisible);
  };

  return (
    <div className='md:flex md:flex-row-reverse lg:flex lg:flex-row h-screen w-full justify-between px-2 md:p-0'>
      <div className='grid w-full lg:w-1/2 py-3 px-2 md:px-14'>
        <div className='w-full justify-self-start'>
          <div className='flex justify-between items-center'>
            <Link to='/'>
              <img src={Logo} alt='logo' className='h-10 w-fit' />
            </Link>
            <div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className='px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full'
              >
                <option value='student'>Student</option>
                <option value='instructor'>Instructor</option>
              </select>
            </div>
          </div>
        </div>
        <div className='mt-10 flex flex-col justify-start'>
          <form onSubmit={handleSubmit}>
            <h1 className='text-4xl font-semibold mb-10'>Login into your account</h1>
            <label
              htmlFor='email'
              className='mb-3 relative block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              name='email'
              value={email}
              className='text-sm md:text-base mb-5 w-full px-4 py-2 text-gray-700 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent'
              placeholder='Enter your email address'
              onChange={(e) => setEmail(e.target.value)}
            />

            <label
              htmlFor='password'
              className='mb-3 relative block text-sm font-medium text-gray-700'
            >
              Password
              {isPwdVisible ? (
                <AiOutlineEyeInvisible
                  className='absolute text-2xl right-5 top-7 cursor-pointer'
                  onClick={handlePwdVisible}
                />
              ) : (
                <AiOutlineEye
                  className='absolute text-2xl right-5 top-7 cursor-pointer'
                  onClick={handlePwdVisible}
                />
              )}
            </label>
            <input
              id='password'
              value={password}
              type={`${isPwdVisible ? 'password' : 'text'}`}
              name='password'
              className='text-sm md:text-base w-full px-4 py-2 text-gray-700 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent'
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
            />

            {disabled === true ? (
              <div
                className='mt-10 p-2 h-12 flex justify-center items-center bg-orange-600 text-white rounded-md cursor-pointer'
                style={{ width: '100%' }}
              >
                <div className='inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900'></div>
              </div>
            ) : (
              <button
                type='submit'
                className='mt-10 p-2 h-12 flex justify-center items-center bg-orange-600 text-white rounded-md cursor-pointer'
                style={{ width: '100%' }}
              >
                Sign In
              </button>
            )}
          </form>
          <span className='mt-4 small'>
            Don't have an account?{' '}
            <Link to={`/signup`} className='text-primary no-underline'>
              Sign Up
            </Link>
          </span>
        </div>
      </div>

      <div className='place-items-center hidden md:grid w-1/2 bg-no-repeat bg-loginBg bg-cover flex-col justify-end lg:px-10 py-36 text-xl text-white h-full'>
        <div className='space-y-3'>
          <h1 className='text-white font-bold text-4xl lg:text-6xl'>
            Welcome to <span className=' text-primary'>Educate</span>
          </h1>
          <p className='text-white/90'>
            Sign up to find the best courses according to your preferences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
