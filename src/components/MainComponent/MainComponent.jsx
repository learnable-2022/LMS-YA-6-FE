import React from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { BsPlayBtn } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

import course from "../../Images/course.png";
import "./MainComponent.css";

function MainComponent() {
  return (
    <>
      <div className="main-component">
        <div className="previous-continue">
          <div className="previous next">
            {" "}
            <i>
              <GrPrevious className="text-white" />
            </i>{" "}
            <h1>Previous Lesson</h1>
          </div>
          <div>
            <h1 className="continue">
              Complete and Continue{" "}
              <i className="next">
                <GrNext className="next" />
              </i>{" "}
            </h1>
          </div>
        </div>
        <div>
          <h1 className="started">Getting Started</h1>

          <p>Hey there! You are finally here. Congratulations.</p>
          <br />

          <p>
            We have a short message for you. Listen and follow through we are
            sure you will do great
          </p>
          <br />
          <br />
          <div className="course">
            <BsPlayBtn /> <h2 className="started"> Public administration </h2>
          </div>
        </div>
        <div className="course-video">
          <img src={course} alt="" className="course" />
        </div>
        <button className="download">Download</button>
        <div class="border-container">
          <div class="content">
            <BsPerson className="person-icon" />
            <div className="inner-content">
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
