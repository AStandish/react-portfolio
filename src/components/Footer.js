import React from "react";
import githubicon from "../assets/github-mark.png";
import linkedinicon from "../assets/LinkedIn-Blue-21@2x.png";
import "./footer.module.css";


export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/AStandish">
            <img src={githubicon} alt="My GitHub" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/amber-standish-23527534/">
            <img src={linkedinicon} alt="My LinkedIn" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
