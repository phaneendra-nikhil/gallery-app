import React from "react";
import "../App.css";

const TopNav = () => {
  return (
    <>
      <header>
        <nav className="nav1">
          <ul className="contact-links">
            <li>
              <a href="#">+123-555-333</a> 
            </li> 
            <li>
              <a href="#">info@example.com</a>
            </li>
          </ul>
          <ul className="follow-links">
            <li>
              <a href="#">follow us on</a>
            </li>
            <ul>
              <li>
                <a href="#"><i class="uil uil-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="uil uil-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="uil uil-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="uil uil-whatsapp"></i></a>
              </li>
            </ul>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default TopNav;
