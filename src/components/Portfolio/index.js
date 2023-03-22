import React from "react";
import Card from "../Card";
import "./style.css";
import jateImage from "../../assets/jate.png";
import jschallenge1Image from "../../assets/jschallenge1.png";
import portfolioImage from "../../assets/portfolio.png";
import readmegeneratorImage from "../../assets/readmegenerator.png";
import sandwichmakerImage from "../../assets/sandwichmaker.png";
import workdayschedulerImage from "../../assets/workdayscheduler.png";
import devmatchImage from "../../assets/devmatch.png";

const projects = [
  {
    title: "JATE App",
    description: "Text editor that meets PWA criteria",
    gitURL: "https://github.com/AStandish/text-editor",
    deployedURL: "https://astandish.github.io/text-editor/",
    image: jateImage,
  },
  {
    title: "Random Password Generator",
    description: "Password generator using basic javascript",
    gitURL: "https://github.com/AStandish/JSchallenge1",
    deployedURL: "https://astandish.github.io/JSchallenge1/",
    image: jschallenge1Image,
  },
  {
    title: "Readme Generator",
    description: "Readme Generator using Node JS",
    gitURL: "https://github.com/AStandish/readme-generator",
    deployedURL: "https://astandish.github.io/readme-generator/",
    image: readmegeneratorImage,
  },
  {
    title: "Portfolio",
    description: "Portfolio built with HTML and CSS",
    gitURL: "https://github.com/AStandish/portfolio",
    deployedURL: "https://astandish.github.io/portfolio/",
    image: portfolioImage,
  },
  {
    title: "Sandwich Maker",
    description:
      "Group project: CMS style blog using MVC paradigm using Handlebars and Sequelize",
    gitURL: "https://github.com/ilavine/sandwich-maker",
    deployedURL: "https://radiant-eyrie-73016.herokuapp.com/",
    image: sandwichmakerImage,
  },
  {
    title: "Workday Scheduler",
    description:
      "Scheduler using JavaScript (JS), WebAPIs, Bootstrap, JQuery, and Moment JS",
    gitURL: "https://github.com/AStandish/WorkDayScheduler",
    deployedURL: "https://astandish.github.io/WorkDayScheduler/",
    image: workdayschedulerImage,
  },
  {
    title: "devMatch",
    description:
      "Dating APP using React, Materialize, MongoDB, GraphQL",
    gitURL: "https://github.com/AStandish/devMatch",
    deployedURL: "https://astandish.github.io/devMatch/",
    image: devmatchImage,
  },
];

const cardComponents = projects.map(
  ({ title, description, gitURL, deployedURL, image }) => {
    return (
      <Card
        key={title}
        title={title}
        description={description}
        gitURL={gitURL}
        deployedURL={deployedURL}
        image={image}
      />
    );
  }
);

export default function Portfolio() {
  return (
    <div>
      <h2 className="h2portfolio">Projects</h2>
      <div className="row">{cardComponents}</div>
    </div>
  );
}
