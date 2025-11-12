import React from "react";

import project1 from "../../src/assests/images/img.jpg";
import project2 from "../../src/assests/images/img.jpg";
import project3 from "../../src/assests/images/img.jpg";
import { Link } from "react-router-dom";

function ProjectPreview() {
  const projects = [
    { img: project1, title: "Modern Living Room" },
    { img: project2, title: "Elegant Office Space" },
    { img: project3, title: "Luxury Villa Design" },
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
