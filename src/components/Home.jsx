import React from "react";
import photo from "../assets/photo.png";
import "./Home.css";
import globe from "../assets/globeimg.png";
import express from "../assets/express-logo.png";
import reactimg from "../assets/react-logo.png";
import git from "../assets/git-logo.png";
import nextjs from "../assets/nextjs-logo.png";
import arrow from "../assets/arrow.png";

function Home() {
  return (
    <div>
      <div className="heading">
        <h1 className="logo">SR.</h1>
        <h1 className="h1">I'm Shivam Raj</h1>
        <h1 className="h11">A re-Imagined Software Developer</h1>

        <div className="location-card">
          <span className="place">Based in India</span>

          <div className="globe">
            <img src={globe} alt="globe" />
          </div>
        </div>
      </div>

      <div className="arrow">
        <img src={arrow} alt="" />
      </div>

      <div className="social-link">
        <h6>
          <a
            href="https://leetcode.com/u/shivam_hack014/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-anchor"
          >
            LeetCode
          </a>
        </h6>

        <h6>
          <a
            href="https://github.com/Shivam14raj"
            target="_blank"
            rel="noopener noreferrer"
            className="social-anchor"
          >
            GitHub
          </a>

          <span className="amp">&</span>

          <a
            href="https://drive.google.com/file/d/182JNqG0xh01aWIxOBH4i0HXbe0dVGd94/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="social-anchor"
            id="cv"
          >
            CV
          </a>
        </h6>
      </div>

      <div className="bg">
        <img src={photo} alt="" className="profile-img" />
      </div>
    </div>
  );
}

export default Home;
