import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Left Side: Existing Text */}
          <div className="col-md-6 text-white">
            <div className="line-above"></div> {/* Line above the title */}
            <h1 className="display-4">Hi, I'm Esa Heikkilä</h1>
            <p className="lead">
            I'm a Data and Information Technology student aspiring to grow into a professional full-stack developer. I have a deep interest in creating efficient, user-friendly web applications and am always eager to learn and improve. My portfolio reflects my journey so far, showcasing the skills I've developed and the progress I've made in both front-end and back-end development.
            </p>
          </div>

          {/* Right Side: New Text */}
          <div className="col-md-5 text-white">
            <div className="info-block">
              <h2>About me</h2>
              <p>
                Follow the link if you want to know more about me and my hobbies.
              </p>
              <a href="/about" className="btn btn-outline-light">
                Learn more &rarr;
              </a>
            </div>
            <div className="section-divider"></div>
            <div className="info-block mt-4">
              <h2>My work</h2>
              <p>
                Follow the link if you want to see some of my latest projects.
              </p>
              <a href="/portfolio" className="btn btn-outline-light">
                Browse portfolio &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;






