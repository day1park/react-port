import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      {/* <div className="icon">
        <span>Github</span>
        <a href="https://github.com/day1park" target="_blank">
          <img src="icons/github-w.svg" />
        </a>
      </div>
      <div className="icon">
        <span>LinkedIn</span>
        <a href="https://www.linkedin.com/in/day-park" target="_blank">
          <img src="icons/linkedin-w.svg" />
        </a>
      </div> */}
      daypark2408@gmail.com{" "}
      <a className="mobile" href="tel:0430126695">
        0430 126 695
      </a>{" "}
      DAY PARK &copy; {new Date().getFullYear()}
    </footer>
  );
}
