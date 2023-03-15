import React from "react";
import "./style.css";

export default function Resume() {
  return (
    // <section className="sectionresume">
    //   <h2 className="h2resume">Resume</h2>
    //   <h3 className="h3resume">
    //     <a
    //       href="https://docs.google.com/document/d/19pCtwBu9sYcvvmHBvCSydlCD8o1L0fUEjy_Pj7NsAwc/edit?usp=sharing"
    //       download className="aresume"
    //     >
    //       Download Here
    //     </a>
    //   </h3>
    //   <div>
    //     <h3 className="h3resume">Front-end experience:</h3>
    //     <ul className="ulresume">
    //       <li>HTML/CSS/Git</li>
    //       <li>JavaScript/ES6</li>
    //       <li>Bootstrap</li>
    //       <li>JQuery</li>
    //       <li>React</li>
    //       <li>Handlebars</li>
    //       <li>JSON</li>
    //       <li>AJAX</li>
    //       <li>Progressive Web Apps</li>
    //     </ul>
    //   </div>
    //   <div>
    //     <h3 className="h3resume">Back-end/other experience:</h3>
    //     <ul className="ulresume">
    //       <li>Node</li>
    //       <li>MVC</li>
    //       <li>MySQL</li>
    //       <li>OOP</li>
    //       <li>MongoDB</li>
    //       <li>Mongoose</li>
    //       <li>Sequelize</li>
    //       <li>Express.js</li>
    //       <li>Testing</li>
    //       <li>MERN stack</li>
    //       <li>NoSQL</li>
    //     </ul>
    //   </div>
    // </section>
    <section className=".sectionresume">
      <div>
        <h3 className="h3resume">
          <a
            href="https://docs.google.com/document/d/19pCtwBu9sYcvvmHBvCSydlCD8o1L0fUEjy_Pj7NsAwc/edit?usp=sharing"
            download
            className="aresume"
          >
            Download Resume
          </a>
        </h3>
      </div>
      <div>
        <div>
          <h3 className="h3resume">Front-end experience:</h3>
          <ul className="ulresume">
            <li>HTML/CSS/Git</li>
            <li>JavaScript/ES6</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Handlebars</li>
            <li>JSON</li>
            <li>AJAX</li>
            <li>Progressive Web Apps</li>
          </ul>
        </div>
        <div>
          <h3 className="h3resume">Back-end/other experience:</h3>
          <ul className="ulresume">
            <li>Node</li>
            <li>MVC</li>
            <li>MySQL</li>
            <li>OOP</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Sequelize</li>
            <li>Express.js</li>
            <li>Testing</li>
            <li>MERN stack</li>
            <li>NoSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
