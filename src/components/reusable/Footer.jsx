import logoWhite from '../../assets/logo_white.svg'
import {FaTwitter, FaYoutube, FaInstagram, FaDiscord} from 'react-icons/fa'

const Footer = () => {
    return ( 
        <div className='px-14 py-10 w-full space-y-5' style={{backgroundColor: '#27153E'}}>
                <div className='flex'>
                    <div className='w-1/2 space-y-4'>
                    <img src={logoWhite} alt="logo" className='h-10' />
                    <p className='text-white w-fit'>
                    Join our newsletter to stay up to date on features and releases.
                    </p>
                    <form action="" className='flex items-center space-x-2'>
                        <div className="flex items-center justify-center">
                            <input
                            type="text"
                            placeholder="Enter your email"
                            className="px-4 py-2 border-2 border-gray-300 focus:border-purple-600 focus:outline-none rounded-lg"
                            />
                        </div>
                        <div className='w-fit h-fit'>
                            <button type='submit' className='bg-orange-600 p-2 rounded-md text-white'>
                            Subscribe
                            </button>
                        </div>
                    </form>
                    <p className='text-white'>
                        By subscribing you agree to with our Privacy Policy and provide 
                        consent to receive updates from our company.
                        </p>
                </div>

                <div className='w-1/4 flex flex-col items-center'>
                    <div>
                        <h1 className='text-white font-bold'>Menu</h1>
                        <ul className=' space-y-2 text-gray-200/60'>
                            <li className='w-full flex'>Home</li>
                            <li className='w-full flex'>About Us</li>
                            <li className='w-full flex'>Contact Us</li>
                            <li className='w-full flex'>Support</li>
                        </ul>
                    </div>
                </div>

                <div className='w-1/4 flex flex-col items-center'>
                <div>
                        <h1 className='text-white font-bold'>Resources</h1>
                        <ul className=' space-y-2 text-gray-200/60'>
                            <li className='w-full flex'>Blog</li>
                            <li className='w-full flex'>Pricing</li>
                            <li className='w-full flex'>Help Center</li>
                            <li className='w-full flex'>Documentation</li>
                            <li className='w-full flex'>Guidelines</li>
                        </ul>
                    </div>
                </div>

                <div className='w-1/4 flex flex-col items-center'>
                    <div>
                    <h1 className='text-white font-bold'>Follow us on:</h1>
                    <ul className='flex text-gray-200/60 space-x-4'>
                        <li><FaInstagram className='text-2xl' /></li>
                        <li><FaYoutube className='text-2xl' /></li>
                        <li><FaDiscord className='text-2xl' /></li>
                        <li><FaTwitter className='text-2xl' /></li>
                    </ul>
                    </div>
                </div>
            </div>
            <hr className='text-gray-200/60' />
            <div className='text-gray-200/60 flex justify-between'>
                <h2>
                2023 Edu_cate. All right reserved.
                </h2>
                <ul className='flex space-x-2'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies Settings</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;