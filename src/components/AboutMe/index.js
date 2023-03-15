import React from "react";
import amber2 from "../../assets/amber2.jpg";
import "./style.css";

export default function AboutMe() {
  return (
    <section className="sectionabout">
      <h2 className="h2about">About Me</h2>

      <img className="aboutme" src={amber2} alt="amber2" />
      <p className="pabout">
        Welcome to my profile page. I am a junior developer looking to start a
        new career. I've been teaching special education for the past couple of
        years and am used to working fast-paced in an ever changing environment.
        I am excited for this new adventure solving puzzles, and helping
        businesses reach their full online (and offline) potential!
      </p>
      <p className="pabout">
        I'm a hardworking, single Mom living in New Hampshire with my daughter
        and our pug. I love traveling, paddle boarding, gardening, hiking, and
        everything about the summer.
      </p>
    </section>
  );
}
