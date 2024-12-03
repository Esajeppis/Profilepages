import React from "react";
import "./About.css";
import pkuva from '../assets/profiili_kuva.png'

const About: React.FC = () => {
  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5">
        
          <img
            src={pkuva}
            alt="Esa Heikkilä"
            className="profile-photo mb-4"
          />
          <div className="section-separator"></div> {/* Add separator */}
          <h1 className="fw-bold">About Me</h1>
          <p className="lead">
          I'm Esa, an aspiring full-stack developer and a student of Data and Information Technology.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-5">
  <h2 className="fw-bold mb-4 text-white">My Journey</h2>
  <ul className="timeline">
    {/* Recent Years */}
    <li className="timeline-item">
      <div className="timeline-year">
        <span>2024</span>
      </div>
      <div className="timeline-content">
      Interned as a software developer at Porin Asbesti, where I developed their webpage and gained experience in teamwork and project management.
      </div>
    </li>
    <li className="timeline-item">
  <div className="timeline-year">
    <span>2023</span>
  </div>
  <div className="timeline-content">
    Explored various fields such as IoT, Data Analysis, and Machine Learning, gaining knowledge and insights into these growing areas of technology.
  </div>
</li>
 

    {/* Full-Stack Development */}
    <li className="timeline-item">
      <div className="timeline-year">
        <span>2022</span>
      </div>
      <div className="timeline-content">
       Started coding with python and other programming languages
      </div>
    </li>

    {/* Data and IT Studies */}
    <li className="timeline-item">
      <div className="timeline-year">
        <span>2021</span>
      </div>
      <div className="timeline-content">
        Started studying Data and Information Technology.
      </div>
    </li>

    {/* High School Graduation */}
    <li className="timeline-item">
      <div className="timeline-year">
        <span>2021</span>
      </div>
      <div className="timeline-content">
        Graduated from upper secondary school for adults.
      </div>
    </li>
    <li className="timeline-item">
      <div className="timeline-year">
        <span>2006-2024</span>
      </div>
      <div className="timeline-content">
        Working as a CNC Machinist for 18 years, specializing in precision machining and complex part manufacturing.
      </div>
    </li>
  </ul>
</div>


        {/* Skills Section */}
<div className="mb-5">
  <h2 className="fw-bold mb-4">Skills</h2>
  <p className="mb-4">
    I have a strong foundation in both frontend and backend development, with a focus on building dynamic, scalable web applications. I am also skilled in Python, particularly for tasks such as data analysis, interacting with APIs, and managing databases. Below are some of the key technologies I've worked with:
  </p>
  <div className="row">
    <div className="col-md-6">
      <h5>Frontend</h5>
      <p>React, TypeScript, HTML, CSS</p>
    </div>
    <div className="col-md-6">
      <h5>Backend</h5>
      <p>Node.js, Express, PostgreSQL</p>
    </div>
    <div className="col-md-6">
      <h5>Python</h5>
      <p>Data Analysis, APIs, PostgreSQL, SQLite</p>
    </div>
  </div>
</div>


        {/* Hobbies Section */}
        <div className="mb-5">
          <h2 className="fw-bold mb-4">Hobbies</h2>
          <p>
          In my free time, I enjoy hiking in nature, going to the gym, and gardening. Fall is especially enjoyable as I love going berry and mushroom picking. These activities help me stay active, connect with nature, and unwind from the demands of everyday life.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a href="/portfolio" className="btn btn-outline-light me-2">
            View Portfolio
          </a>
          <a href="/contact" className="btn btn-outline-light">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

