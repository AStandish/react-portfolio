import React from "react";
import gitIcon from "../../assets/github-mark.png";
import "./style.css";

export default function Card({
  title,
  description,
  gitURL,
  deployedURL,
  image,
}) {
  return (
    <div className="card col-3" style={{ width: 18 + "rem;" }}>
      <img src={image} className="project card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{description}</p>
        <a href={gitURL} className="card">
          <img src={gitIcon} alt="git" className="giticon center"  />
        </a>
        <a href={deployedURL} className="card" class="title">
          <h3>{title}</h3>
        </a>
      </div>
    </div>
  );
}
