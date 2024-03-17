import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"; // Make sure to import Outlet from react-router-dom
import './css_file/Navbar.css';
const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={isSticky ? "NAVBAR sticky" : "NAVBAR"}>
      <div className="Nav">
        <header>
          <nav>
            <ul className={sidebarVisible ? "sidebar visible" : "sidebar"}>
              <li onClick={hideSidebar} id="firstlinav">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </a>
              </li>
              <li>
                <Link to="/Supportservice">Support & Services</Link>
              </li>

              <li className="hideOnMobile">
                <Link to="/ContactUs">ContactUs</Link>
              </li>
              <li>  
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/register" className="a">Singup/Login</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">FixWorker</Link>
              </li>
              <li className="hideOnMobile">
                <Link to="/about">About</Link>
              </li>

              <li className="hideOnMobile">
                <Link to="/Supportservice">Support & Services</Link>
              </li>
              <li className="hideOnMobile">
                <Link to="/ContactUs">ContactUs</Link>
              </li>
              <li className="hideOnMobile">
                <Link to="/register" className="a">Singup/Login</Link>
              </li>
              <li onClick={showSidebar} id="menubutton">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Outlet />
    </section>
  );
};

export default Navbar;
