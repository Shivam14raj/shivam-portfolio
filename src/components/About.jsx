import React from "react";
import "./About.css";
import express from "../assets/express-logo.png"
import git from "../assets/git-logo.png"
import next from "../assets/nextjs-logo.png"
import reactimg from "../assets/react-logo.png"
import mongodb from "../assets/mongo-db-img.png"


function About() {
  return (
    <div>
      <div className="about-me">About Me</div> 
      <h1 className="logo">SR.</h1>
      <div className="about-me-text">
        {/* I' m a <span>re-imagined </span>software developer who believes great software is built at the intersection of logic, design, and experience. */}
        I work across the full spectrum of development - building modern
        frontends, designing reliable <span>backends</span>, and exploring{" "}
        <span>machine learning </span>to create intelligent systems. Alongside
        this, I actively practice data structures and algorithms, constantly
        sharpening my problem-solving skills through platforms like{" "}
        <span>LeetCode</span>.

        <div className="tech-icons">
            <img src= {express} alt="" id="express"/>
            <img src=  {git} alt="" id="git"/>
            <img src= {next} alt="" id="next" />
            <img src= {reactimg} alt=""  id="reactimg"/>
            <img src= {mongodb} alt=""  id="mongo"/>
        </div>
      </div>
    </div>
  );
}

export default About;
