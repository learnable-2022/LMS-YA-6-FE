import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

const MobileSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="sidebar"
      unmountOnExit
    >
      <div className="mobile-sidebar">
        <div className="sidebar-content">
          <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
        <div className="cancel-icon" onClick={toggleSidebar}>
          {/* <FaTimes /> */}
        </div>
      </div>
    </CSSTransition>
  );
};

export default MobileSidebar;
