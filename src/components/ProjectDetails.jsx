import React, { useState } from "react";
import "./ProjectDetails.css";
import sorting from "../assets/sort-visu.png";
import weather from "../assets/weather-app.png";
import email from "../assets/spam-email.png";
import customer from "../assets/customer-seg.png"

const ProjectDetails = () => {
  const [index, setIndex] = useState(0);
  const total = 5;

  const next = () => {
    if (index < total - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="project-wrapper">
      <div className="slider-window">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 55}vw)` }}
        >
          <div className="project-container" id="p1">
            <div className="project-heading">
              Interactive DSA Visualizer
              <a
                id="ancher1"
                href="https://github.com/Shivam14raj/DSA-Visualizer-"
                target="_blank"
                rel="noopener noreferrer"
                className="social-anchor"
              >
                GitHub
              </a>
              <div className="description">
                Developed an interactive web-based DSA visualizer to demonstrate
                core data structures and algorithms, including sorting and
                searching algorithms, stacks, and queues. Implemented D3.js for
                dynamic DOM manipulation, smooth animations, and step-by-step
                visualizations, significantly improving conceptual clarity and
                learning experience.
              </div>
            </div>

            <div className="project-img">
              <img src={sorting} alt="" id="sorting" />
            </div>
          </div>

          <div className="project-container" id="p2">
            <div className="project-heading">
              Weather App
              <a
                id="ancher2"
                href="https://github.com/Shivam14raj/Weather-app-in-react"
                target="_blank"
                rel="noopener noreferrer"
                className="social-anchor"
              >
                GitHub
              </a>
              <div className="description-p2">
                Developed a responsive weather application using React.js that
                fetches real-time weather data from a RESTful Weather API.
                Implemented Axios for efficient API communication and used React
                Hooks (useState, useEffect) for state management and side
                effects. The app displays current weather conditions such as
                temperature, humidity, and weather status based on user input.
              </div>
            </div>
            <div className="project-img">
              <img src={weather} alt="" id="sorting" />
            </div>
          </div>
          <div className="project-container" id="p3">
            <div className="project-heading">
              Email Spam Classifier
              <a
                id="ancher1"
                href="https://github.com/Shivam14raj/email-spam-classifier"
                target="_blank"
                rel="noopener noreferrer"
                className="social-anchor"
              >
                GitHub
              </a>
              <div className="description">
                Developed a Python-based machine learning application to
                classify emails as spam or not spam. Utilized TF-IDF
                vectorization to convert email text into numerical features and
                trained a Logistic Regression model for accurate classification.
                Performed data preprocessing, including text cleaning and
                handling missing values, and evaluated model performance using
                metrics such as accuracy, precision, and recall, ensuring
                reliable spam detection.
              </div>
            </div>

            <div className="project-img">
              <img src={email} alt="" id="email" />
            </div>
          </div>
          <div className="project-container" id="p4">
            <div className="project-heading">
              Customer Segmentation
              <a
                id="ancher1"
                href="https://github.com/Shivam14raj/customer-segmentation"
                target="_blank"
                rel="noopener noreferrer"
                className="social-anchor"
              >
                GitHub
              </a>
              <div className="description">
                Customer Segmentation is a machine learning project where
                customers are grouped into different clusters based on their
                similar characteristics and behavior. The main goal of this
                project is to help businesses understand their customers better
                and make data-driven decisions.In this project, K-Means
                Clustering (unsupervised ML algorithm) is used to segment
                customers without any predefined labels.
              </div>
            </div>
              <div className="project-img">
              <img src={customer} alt="" id="sorting" />
            </div>
          </div>
          <div className="project-container" id="p5">
             <h2>Loading....</h2>
          </div>
        </div>
      </div>

      <div className="slider-controls">
        <button onClick={prev} disabled={index === 0}>
          Prev
        </button>
        <button onClick={next} disabled={index === total - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
