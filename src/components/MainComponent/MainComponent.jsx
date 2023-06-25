import React, { useState, useEffect } from 'react';
// import { GrNext } from "react-icons/gr";
import { FaChevronRight, FaChevronLeft, FaPlay } from 'react-icons/fa';
// import { BsPerson } from "react-icons/bs";
import ReactPlayer from 'react-player';
import { FaBars } from 'react-icons/fa';
// import course from "../../Images/course.png";
import "./MainComponent.css";
import Comment from "./Comment";
// import Certificate from "./Certificate";
import MobileSidebar from "../Left Component/MobileSidebar";

const MainComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 500);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkIsMobileView = () => {
      setIsMobileView(window.innerWidth <= 500);
    };

    // checkIsMobileView();

    window.addEventListener('resize', checkIsMobileView);

    return () => {
      window.removeEventListener('resize', checkIsMobileView);
    };
  }, []);


  return (
    <>
      <div className="main-component">
      {isMobileView && (
        <div className="menu-icon" onClick={toggleSidebar}>
          <FaBars />
        </div>
      )}
      <MobileSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div>
          <h1 className="started">Getting Started</h1>

          <p className="p-section">Hey there! You are finally here. Congratulations.</p>
           <p className="p-section">
            We have a short message for you. Listen and follow through we are
            sure you will do great
          </p>
          <br />
          <div className="course flex justify-center items-center">
            <div className='play-icon'>
            <FaPlay /> 
            </div>
            <h2 className="started"> Public administration </h2>
          </div>
        </div>

        {/* video section */}
        <div className="course-video">
          <ReactPlayer
          url="https://youtu.be/GK-VbhToLEI"
          controls
          width="100%"
          className="h-full"
          />
        </div>
          <br />
          <br />
          <Comment />
          {/* <Certificate/> */}
          <br />
      </div>
    </>
  );
}

export default MainComponent;
