import React from "react";

import project1 from "../../src/assests/images/recent1.jpg";
import project2 from "../../src/assests/images/recent2.png";
import project3 from "../../src/assests/images/recent3.jpg";
import { Link } from "react-router-dom";

function ProjectPreview() {
  const projects = [
    { img: project1, title: "Residence At Mayiladuthurai" },
    { img: project2, title: "Office Interior for SM Developers" },
    { img: project3, title: "Residence At Chinnasalem" },
  ];

  return (
    <section className="project-preview">
      <h2 className="section-title">Recent Projects</h2>
      <p className="section-subtitle">
        A glimpse of our latest design inspirations and completed works.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="project-button">
        <Link to="/ourworks" className="view-all-btn">
          View All Projects
        </Link>
      </div>
    </section>
  );
}

export default ProjectPreview;
