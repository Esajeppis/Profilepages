import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Side: Existing Text */}
          <div className="col-12 col-sm-6 col-md-6 text-white mb-4 mb-md-0">
            <div className="line-above"></div> {/* Line above the title */}
            <h1 className="display-4 fs-1">Hi, I'm Esa Heikkilä</h1>
            <p className="lead fs-5">
              I'm a Data and Information Technology student aspiring to grow into a professional full-stack developer. I have a deep interest in creating efficient, user-friendly web applications and am always eager to learn and improve. My portfolio reflects my journey so far, showcasing the skills I've developed and the progress I've made in both front-end and back-end development.
            </p>
          </div>

          {/* Right Side: New Text */}
          <div className="col-12 col-sm-6 col-md-5 text-white">
            <div className="info-block mb-4">
              <h2 className="fs-3">About me</h2>
              <p className="fs-5">
                Follow the link if you want to know more about me and my hobbies.
              </p>
              <Link to="/about" className="btn btn-outline-light">
                Learn more &rarr;
              </Link>
            </div>
            <div className="section-divider mb-4"></div>
            <div className="info-block">
              <h2 className="fs-3">My work</h2>
              <p className="fs-5">
                Follow the link if you want to see some of my latest projects.
              </p>
              <Link to="/portfolio" className="btn btn-outline-light">
                Browse portfolio &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;







