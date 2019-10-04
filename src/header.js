import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">SALMAN LARI</div>
      <div className="nav">
        <ul className="nav-menu">
          <li>
            <a href="#" className="menu-links">
              About
            </a>
          </li>
          <li>
            <a href="#" className="menu-links">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="menu-links">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="log">
        <a href="#" className="login">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Header;
