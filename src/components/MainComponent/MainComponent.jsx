import React from "react";
import { GrFormNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import "./MainComponent.css";

function MainComponent() {
  return (
    <>
      <div className="main-component">
        <div>
          <h1>
            {" "}
            <i>
              <GrPrevious />
            </i>{" "}
            Previous Lesson
          </h1>
          <h1>
            {" "}
            <i>
              <GrFormNext />
            </i>{" "}
            Complete and Continue
          </h1>
        </div>
        <div>
          <h1>Getting Started</h1>
          <p>Hey there! You are finally here. Congratulations.</p>
          <p>
            We have a short message for you. Listen and follow through we are
            sure you will do great
          </p>
        </div>
        <div>
          <h1>Public Administration</h1>
          {/* Image */}
          <button>Download</button>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
