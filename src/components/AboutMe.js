import React from "react";
import amber2 from "../assets/amber2.jpg";
import "./aboutme.module.css"


export default function AboutMe() {
  return (
    <main>
      <h2>About Me</h2>

      <img src={amber2} alt="amber2" />
      <p>
        Welcome to my profile page. I am a junior developer looking to start a
        new career. I've been teaching special education for the past couple of
        years and am used to working fast-paced in an ever changing environment.
        I am excited for this new adventure solving puzzles, and helping
        businesses reach their full online (and offline) potential!
      </p>
      <p>
        I'm a hardworking, single Mom living in New Hampshire with my daughter
        and our pug. I love traveling, paddle boarding, gardening, hiking, and
        everything about the summer.
      </p>
    </main>
  );
}
