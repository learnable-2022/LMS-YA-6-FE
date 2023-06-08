import React from "react";
import { GrNext } from "react-icons/gr";
import { FaChevronRight, FaChevronLeft, FaPlay } from 'react-icons/fa';
import { BsPerson } from "react-icons/bs";
import ReactPlayer from 'react-player';
import course from "../../Images/course.png";
import "./MainComponent.css";

function MainComponent() {
  return (
    <>
      <div className="main-component">
        <div className=" p-2 flex justify-end mr-2">
          <div className="flex mx-2 bg-black p-2 rounded-md w-fit justify-center items-center text-white">
            <h1 className=" flex items-center justify-center">
            <FaChevronLeft className="mx-2" />
            Previous Lesson</h1>
          </div>
          <div className="flex mx-2 bg-orange-600 p-2 rounded-md w-fit justify-center items-center text-white">
            <h1 className="flex items-center justify-center">
              Complete and Continue
                <FaChevronRight className="mx-2" />
            </h1>
          </div>
        </div>
        <div>
          <h1 className="started">Getting Started</h1>

          <p>Hey there! You are finally here. Congratulations.</p>
           <p>
            We have a short message for you. Listen and follow through we are
            sure you will do great
          </p>
          <br />
          <div className="course flex justify-center items-center">
            <FaPlay /> <h2 className="started"> Public administration </h2>
          </div>
        </div>
        <div className="course-video">
          {/* <img src={course} alt="" className="course" /> */}
          <ReactPlayer
          url="https://youtu.be/GK-VbhToLEI"
          controls
          width="80%"
          className="h-full"
          />
        </div>
        <button className="download p-2 rounded-md mt-2 mb-4 w-fit">Download</button>
        <div class="border-container">
          <div class="content">
            <BsPerson className="person-icon" />
            <div className="inner-content" >
              <textarea name="" id="" cols="70" rows="10" className="textarea">
                Leave a comment...
              </textarea>
            </div>
          </div>
          <button className="post">Post a comment</button>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
