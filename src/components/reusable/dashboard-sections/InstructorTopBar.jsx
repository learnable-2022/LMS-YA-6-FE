import {FaSearch, FaUser} from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../../../assets/EducateLogo.png'
import SideNavIcon from './SideNavIcon';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const InstructorTopbar = () => {
    const [navDown, setNavDown] = useState(false)
    const handleNav = ()=>{
        setNavDown(!navDown)
    }
    const navigate = useNavigate()
    const location = useLocation()

    return ( 
        <div className='flex h-16 w-full px-6 z-20 md:px-14 shadow-md justify-between items-center sticky top-0 bg-white'>
            <img src={Logo} className='h-10' alt="educate-logo" />
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
                    navDown ? <AiOutlineClose className='text-3xl font-bold text-gray-900' />
                    : <GiHamburgerMenu className='text-3xl font-bold text-gray-900' />
                }
                {
                    navDown ? (
                        <div className='w-full h-screen  bg-gray-900/60 shadow-md absolute left-0 top-16 animate-fadeIn'>
                            <div className='w-full h-fit py-3 bg-white/90 shadow-md animate-slideDown'>
                            <div onClick={()=>navigate('/instructor')}>
                            <SideNavIcon iconName={'home'} iconDescription={'My Dashboard'} active={`${location.pathname==='/instructor' ? 'text-orange-500':''}`} />
                            </div>
                            <div onClick={()=>navigate('/instructor/messages')}>
                            <SideNavIcon iconName={'message'} iconDescription={'Inbox'} active={`${location.pathname==='/instructor/messages' ? 'text-orange-500':''}`} />
                            </div>
                            <div onClick={()=>navigate('/instructor/courses')}>
                            <SideNavIcon iconName={'courses'} iconDescription={'Courses'} active={`${location.pathname==='/instructor/courses' ? 'text-orange-500':''}`} />
                            </div>
                            <div onClick={()=>navigate('/instructor/assessment')}>
                            <SideNavIcon iconName={'todo'} iconDescription={'Assessment'} active={`${location.pathname==='/instructor/assessment' ? 'text-orange-500':''}`} />
                            </div>
                            <div onClick={()=>navigate('/instructor/support')}>
                            <SideNavIcon iconName={'support'} iconDescription={'24/7 Support'} active={`${location.pathname==='/instructor/support' ? 'text-orange-500':''}`} />
                            </div>
                            <div onClick={()=>navigate('/instructor/live')}>
                            <SideNavIcon iconName={'camera'} iconDescription={'Live Sessions'} active={`${location.pathname==='/instructor/live' ? 'text-orange-500':''}`} />
                            </div>
                            <div onClick={()=>navigate('/instructor/settings')}>
                            <SideNavIcon iconName={'setting'} iconDescription={'Settings'} active={`${location.pathname==='/instructor/settings' ? 'text-orange-500':''}`} />
                            </div>
                                <div className="px-3 cursor-pointer rounded-lg text-white mt-5 min-w-fit md:mx-4 h-14 flex justify-center items-center" style={{backgroundColor:'#27153E'}}>
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
 
export default InstructorTopbar;