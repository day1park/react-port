import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mt-5 p-4 text-center">
      <div className="icon">
        <a href="https://github.com/day1park" target="_blank">
          <img src="icons/github-w.svg" />
        </a>

        <span>Github</span>
      </div>
      <div className="icon">
        <a href="https://www.linkedin.com/in/day-park" target="_blank">
          <img src="icons/linkedin-w.svg" />
        </a>

        <span>LinkedIn</span>
      </div>
      <div className="footer-contact">
        <span>daypark2408@gmail.com</span>
        <span>
          <a className="mobile" href="tel:0430126695">
            0430 126 695
          </a>
        </span>
      </div>
      DAY PARK &copy; {new Date().getFullYear()}
    </footer>
  );
}
