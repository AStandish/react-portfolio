import React from "react";
import githubicon from "../assets/github-mark.png";
import linkedinicon from "../assets/LinkedIn-Blue-21@2x.png";
import "./footer.css";

const styles = {
  footer: {
    borderTop: "groove",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: "2vw",
    height: "25vw",
    backgroundColor: "rgba(35, 15, 50, 1)",
    minHeight: "240px",
  },
  ul: {
    padding: "2vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "75%",
  },
  img: {
    borderRadius: "50%",
    width: "15vw",
    maxWidth: "100px",
  },
};
export default function Footer() {
  return (
    <footer style={styles.footer}>
      <ul style={styles.ul}>
        <li>
          <a href="https://github.com/AStandish">
            <img style={styles.img} src={githubicon} alt="My GitHub" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/amber-standish-23527534/">
            <img style={styles.img} src={linkedinicon} alt="My LinkedIn" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
