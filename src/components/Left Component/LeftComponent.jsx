// import { useState } from 'react';
import React from "react";
// import { AiOutlineHome } from "react-icons/ai";
// import { CiSettings } from "react-icons/ci";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsPlayBtn } from "react-icons/bs";
import "./LeftComponent.css";

function LeftComponent() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const openNav = () => {
  //   setIsSidebarOpen(true);
  // };

  // const closeNav = () => {
  //   setIsSidebarOpen(false);
  // };
  
  return (
    <>
      <div id="mySidenav" className={`left-component bg-white shadow-md w-fit`}>
        {/* <div className="home p-2">
          <i>
            <AiOutlineHome />
          </i>
          <i>
            <CiSettings />
          </i>
        </div> */}
         {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a> */}

        <div>
          {/* 100 percent completed */}
          <hr />
          <h1 className="heading">Welcome To Edu-cate</h1>
          <hr />
          <div className="welcome">
            <i className="check">
              {" "}
              <AiOutlineCheckCircle />
            </i>
            <i className="play">
              {" "}
              <BsPlayBtn />
              {/* <BsPlayBtn /> */}
            </i>
            <h2 className="topic border-b-2 border-gray-600/60">
              Introduction of Public administration(05:20)
            </h2>

            <i className="check">
              {" "}
              <AiOutlineCheckCircle />{" "}
            </i>
            <i className="play">
              {" "}
              <BsPlayBtn />
            </i>
            <h2 className="topic border-b-2 border-gray-600/60">Element of Public administration(05:20)</h2>
          </div>
        </div>
        <div>
          {/* 100 percent completed */}
          <hr />
          <h1 className="heading">Laws of Public administration</h1>
          <hr />
          <div className="welcome">
            <i className="check">
              {" "}
              <AiOutlineCheckCircle />
            </i>
            <i className="play">
              {" "}
              <BsPlayBtn />
              {/* <BsPlayBtn /> */}
            </i>
            <h2 className="topic border-b-2 border-gray-600/60">Administrative Law(10:20)</h2>

            <i className="check">
              {" "}
              <AiOutlineCheckCircle />{" "}
            </i>
            <i className="play">
              {" "}
              <BsPlayBtn />
            </i>
            <h2 className="topic border-b-2 border-gray-600/60">Constitutional law(05:20)</h2>
          </div>
          <div>
            {/* 100 percent completed */}
            <hr />
            <h1 className="heading">Extended Topics</h1>
            <hr />

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>
              <h2 className="topic">Statistics(05:20)</h2>
            </div>

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>

              <h2 className="topic">Transaction(05:20)</h2>
            </div>

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>

              <h2 className="topic border-b-2 border-gray-600/60">Entreneurship(05:20)</h2>
            </div>
            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>
              <h2 className="topic border-b-2 border-gray-600/60">Introduction to Computer(05:20)</h2>
            </div>

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>
              <h2 className="topic border-b-2 border-gray-600/60">Psychology(05:20)</h2>
            </div>

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>
              <h2 className="topic border-b-2 border-gray-600/60">Submit Weekly Test(05:20)</h2>
            </div>
            <hr />
            <h1 className="heading">Week 2</h1>
            <hr />

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>
              <h2 className="topic border-b-2 border-gray-600/60">Procurement(05:20)</h2>
            </div>

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>

              <h2 className="topic border-b-2 border-gray-600/60">Marketing(05:20)</h2>
            </div>

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>

              <h2 className="topic border-b-2 border-gray-600/60">Sociology(05:20)</h2>
            </div>
            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>
              <h2 className="topic border-b-2 border-gray-600/60">Use of English(05:20)</h2>
            </div>

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>
              <h2 className="topic border-b-2 border-gray-600/60">Human Resource Management</h2>
            </div>

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>
              <h2 className="topic border-b-2 border-gray-600/60">Accounting(05:20)</h2>
            </div>

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>
              <h2 className="topic border-b-2 border-gray-600/60">Political Economy</h2>
            </div>

            <div className="welcome">
              <i className="check">
                {" "}
                <AiOutlineCheckCircle />
              </i>
              <i className="play">
                {" "}
                <BsPlayBtn />
                {/* <BsPlayBtn /> */}
              </i>
              <h2 className="topic border-b-2 border-gray-600/60">Procurement Management(05:20)</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftComponent;
