import {FaSearch, FaUser} from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';
import Logo from '../../../assets/EducateLogo.png'
import SideNavIcon from './SideNavIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
    const [navDown, setNavDown] = useState(false)
    const handleNav = ()=>{
        setNavDown(!navDown)
    }
    const navigate = useNavigate()

    return ( 
        <div className='flex h-16 w-full px-6 md:px-14 shadow-md justify-between items-center sticky top-0 bg-white'>
            <img src={Logo} className='h-12' alt="educate-logo" />
            <div className='hidden lg:flex w-1/6 justify-between items-center'>
                <h1>
                    My Course
                </h1>
                <FaSearch />
                <FaUser />
            </div>

            {/* for small devices */}
            <div className='w-fit h-fit py-4 px-3 lg:hidden' onClick={handleNav}>
                {
                    navDown ? <BsChevronDoubleUp className='text-3xl font-bold text-gray-900' />
                    : <BsChevronDoubleDown className='text-3xl font-bold text-gray-900' />
                }
                {
                    navDown ? (
                        <div className='w-full h-screen  bg-gray-900/60 shadow-md absolute left-0 top-16 animate-fadeIn'>
                            <div className='w-full h-fit py-3 bg-white/90 shadow-md animate-slideDown'>
                                <div className='animate-fadeIn delay-1500'>
                                    <SideNavIcon iconName={'home'} iconDescription={'Dashboard'} active={' text-orange-600'} />
                                </div>
                                <div className='animate-fadeIn delay-150'>
                                    <SideNavIcon iconName={'courses'} iconDescription={'All Courses'} />
                                </div>
                                <div className='animate-fadeIn delay-200'>
                                    <SideNavIcon iconName={'study_report'} iconDescription={'Study Report'} />
                                </div>
                                <div className='animate-fadeIn delay-300'>
                                    <SideNavIcon iconName={'forum'} iconDescription={'Forum'} />
                                </div>
                                <div className='animate-fadeIn delay-500'>
                                    <SideNavIcon iconName={'support'} iconDescription={'24/7 Support'} />
                                </div>
                                <div className='animate-fadeIn delay-700'>
                                    <SideNavIcon iconName={'setting'} iconDescription={'Settings'} />
                                </div>
                                <div className="px-3 cursor-pointer bg-purple-900 rounded-lg text-white mt-5 min-w-fit md:mx-4 h-14 flex justify-center items-center">
                                    <BiLogOut className='px-1 text-3xl' />
                                    Logout
                                </div>
                            </div>
                        </div>
                    ):''
                }
            </div>
        </div>
     );
}
 
export default Topbar;