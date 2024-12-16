import React from "react";
import { Project, projects } from "../data/projectsData";
import { FaReact, FaNodeJs, FaLaptopCode } from "react-icons/fa";
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const getIcon = (technologies: string[]): React.ReactNode => {
    if (technologies.includes("React")) return <FaReact />;
    if (technologies.includes("Node.js")) return <FaNodeJs />;
    return <FaLaptopCode />;
  };

  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <div className="title-separator mx-auto mb-3"></div> {/* Separator */}
          <h1 className="fw-bold">My Portfolio</h1>
        </div>
        <div className="row">
          {projects.map((project: Project, index: number) => (
            <div key={index} className="col-md-6 mb-4">
              <div
                className="card"
                style={{ backgroundColor: "#33363b", color: "white" }}
              >
                <div className="card-header d-flex align-items-center">
                  <div className="me-3" style={{ fontSize: "2rem" }}>
                    {getIcon(project.technologies)}
                  </div>
                  <div>
                    <h5 className="mb-0">{project.title}</h5>
                    <small>{project.date}</small>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">{project.description}</p>
                  <ul className="list-inline">
                    {project.technologies.map((tech, idx) => (
                      <li
                        key={idx}
                        className="list-inline-item badge bg-primary text-light p-2 mt-2"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light mt-3"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


