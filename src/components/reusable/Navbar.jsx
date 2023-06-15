import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { Link, animateScrool as scroll, scroller } from "react-scroll";
import Logo from "../../assets/EducateLogo.png";

const Navbar = () => {
  const [navDown, setNavDown] = useState(false);
  const handleNav = () => {
    setNavDown(!navDown);
  };
  const navigate = useNavigate();

  return (
    <div className="flex h-16 w-full px-6 z-20 md:px-14 justify-between items-center sticky top-0 bg-white">
      <img
        src={Logo}
        className="h-10"
        alt="educate-logo"
      />
      <div className="hidden lg:flex w-3/6 items-center justify-between h-full">
        <ul className="flex items-center justify-center w-fit h-full space-x-4">
          <li className="h-full flex w-20 items-center justify-center">
            <Link
              to="Home"
              smooth={true}
              duration={800}
              className="h-full w-full flex items-center justify-center cursor-pointer"
            >
              Home
            </Link>
          </li>

          <li className="h-full flex items-center justify-center">
            <Link
              to="About"
              smooth={true}
              duration={800}
              className="h-full w-full flex items-center justify-center cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li className="h-full flex items-center justify-center">
            <Link
              to="Contact"
              smooth={true}
              duration={800}
              className="h-full w-full flex items-center justify-center cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-center space-x-10 p-2 h-full">
          <div
            className="p-2 bg-gray-200/60 rounded-md cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign In
          </div>
          <div
            className="p-2 bg-orange-600 text-white rounded-md cursor-pointer"
            onClick={() => navigate("/userAccess")}
          >
            Sign Up
          </div>
        </div>
      </div>

      {/* for small devices */}
      <div
        className="w-fit h-fit py-4 px-3 lg:hidden"
        onClick={handleNav}
      >
        {navDown ? (
          <AiOutlineClose className="text-3xl font-bold text-gray-900" />
        ) : (
          <GiHamburgerMenu className="text-3xl font-bold text-gray-900" />
        )}
        {navDown ? (
          <div className="w-full h-screen  bg-gray-900/60 shadow-md absolute left-0 top-16 animate-fadeIn">
            <div className="w-full h-fit py-3 bg-white/90 shadow-md animate-slideDown">
              <ul className="">
                <li className="p-5">
                    <Link
                        to="Home"
                        smooth={true}
                        duration={800}
                        className="h-full w-full flex items-center justify-center cursor-pointer"
                    >
                        Home
                    </Link>
                </li>
                <li className="p-5">
                    <Link
                        to="About"
                        smooth={true}
                        duration={800}
                        className="h-full w-full flex items-center justify-center cursor-pointer"
                    >
                        About Us
                    </Link>
                </li>
                <li className="p-5">
                    <Link
                        to="Contact"
                        smooth={true}
                        duration={800}
                        className="h-full w-full flex items-center justify-center cursor-pointer"
                    >
                        Contact Us
                    </Link>
                </li>
              </ul>
              <div
                className="p-4 flex justify-center mb-2 text-white rounded-md cursor-pointer"
                style={{ backgroundColor: "#27153E" }}
                onClick={() => navigate("/login")}
              >
                Sign In
              </div>
              <div
                className="p-4 flex justify-center bg-orange-600 text-white rounded-md cursor-pointer"
                onClick={() => navigate("/userAccess")}
              >
                Sign Up
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
