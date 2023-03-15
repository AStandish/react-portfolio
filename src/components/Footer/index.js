import React from "react";
import githubicon from "../../assets/github-mark.png";
import linkedinicon from "../../assets/LinkedIn-Blue-21@2x.png";
import devicon from "../../assets/Dev.png";
import "./style.css";


export default function Footer() {
  return (
    <footer className="footer">
      <ul className="ulfooter">
        <li>
          <a href="https://github.com/AStandish">
            <img src={githubicon} alt="My GitHub" className="imgfooter" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/amber-standish-23527534/">
            <img src={linkedinicon} alt="My LinkedIn" className="imgfooter"/>
          </a>
        </li>
        <li>
          <a href="https://dev.to/astandishperry">
            <img src={devicon} alt="My Dev" className="imgfooter" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
