import {FaSearch} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import Logo from '../../../assets/EducateLogo.png'

const Topbar = () => {
    return ( 
        <div className='flex h-16 w-full px-14 shadow-md justify-between items-center sticky top-0 bg-white'>
            <img src={Logo} className='h-12' alt="educate-logo" />
            <div className='hidden md:flex w-1/6 justify-between items-center'>
                <h1>
                    My Course
                </h1>
                <FaSearch />
                <FaUser />
            </div>
        </div>
     );
}
 
export default Topbar;