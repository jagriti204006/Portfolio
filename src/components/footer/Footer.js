/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>© 2024 Shriya Poddar. All rights reserved.</p>
      </div>
      <div className="footer-middle">
        <div className="footer-left">
          <p>Let's Connect!</p>
          <ul className="social-links">
            <li>
              <a href="mailto:poddarshriya21@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shriya-poddar/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/shriyapoddar">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/poddar_shriya21/?igsh=MWUydHVjaWc1aGh5eQ%3D%3D">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <p>Guwahati, Assam, India</p>
        </div>
        <div className="footer-right">
          <p>Explore More:</p>
          <ul className="footer-nav">
            <li>
              <Link to="/home" onClick={handleScrollToTop}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={handleScrollToTop}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleScrollToTop}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Looking forward to creating something beautiful together!</p>
      </div>
    </footer>
  );
};

export default Footer;
