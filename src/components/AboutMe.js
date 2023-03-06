import React from "react";
import amber2 from "../assets/amber2.jpg";
import "./aboutme.css"

const styles = {
  main: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: "25px",
  },
  h2: {
    padding: "25px",
    fontSize: "32px",
  },
  img: {
    marginLeft: "10%",
    borderRadius: "50%",
    minWidth: "120px",
    maxWidth: "15vw",
  },
  p: {
    minWidth: "300px",
    maxWidth: "720px",
    fontSize: "18px",
    padding: "25px",
  },
};
export default function AboutMe() {
  return (
    <main style={styles.main}>
      <h2 style={styles.h2}>About Me</h2>

      <img style={styles.img} src={amber2} alt="amber2" />
      <p style={styles.p}>
        Welcome to my profile page. I am a junior developer looking to start a
        new career. I've been teaching special education for the past couple of
        years and am used to working fast-paced in an ever changing environment.
        I am excited for this new adventure solving puzzles, and helping
        businesses reach their full online (and offline) potential!
      </p>
      <p style={styles.p}>
        I'm a hardworking, single Mom living in New Hampshire with my daughter
        and our pug. I love traveling, paddle boarding, gardening, hiking, and
        everything about the summer.
      </p>
    </main>
  );
}
