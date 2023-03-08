import React from "react";
import "./resume.module.css";

const styles = {
  main: {
    padding: "15px",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: "25px",
  },
  h2: {
    fontSize: "32px",
    padding: "12px",
  },
  h3: {
    padding: "8px",
  },
  ul: {
    listStyleType: "square",
    fontSize: "18px",
  },
  a: {
    textDecoration: "underline",
  },
};
export default function Resume() {
  return (
    <section style={styles.main}>
      <h2 style={styles.h2}>Resume</h2>
      <h3 style={styles.h3}>
        <a
          style={styles.a}
          href="https://docs.google.com/document/d/19pCtwBu9sYcvvmHBvCSydlCD8o1L0fUEjy_Pj7NsAwc/edit?usp=sharing"
          download
        >
          Download Here
        </a>
      </h3>
      <div>
        <h3 style={styles.h3}>Front-end experience:</h3>
        <ul style={styles.ul}>
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
        <h3 style={styles.h3}>Back-end/other experience:</h3>
        <ul style={styles.ul}>
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
    </section>
  );
}
