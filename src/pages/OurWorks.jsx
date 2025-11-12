import React, { useState } from "react";

// Sample project images (replace with actual images in src/assets/images)
import project1Img from "../../src/assests/images/img.jpg";
import project2Img from "../../src/assests/images/img.jpg";
import project3Img from "../../src/assests/images/img.jpg";
import project4Img from "../../src/assests/images/img.jpg";

// Reusable ProjectCard component
const ProjectCard = ({ project, onClick }) => (
  <div className="project-card" onClick={() => onClick(project)}>
    <img src={project.image} alt={project.name} className="project-img" />
    <h3 className="project-name">{project.name}</h3>
    <p className="project-desc">{project.shortDesc}</p>
  </div>
);

// Modal component
const Modal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={project.image} alt={project.name} className="modal-img" />
        <h3>{project.name}</h3>
        <p>{project.fullDesc}</p>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const OurWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Luxury Villa",
      shortDesc: "Modern residential villa",
      fullDesc: "This luxury villa features contemporary design, spacious interiors, and a private garden.",
      category: "Residential",
      image: project1Img,
    },
    {
      id: 2,
      name: "Corporate Office",
      shortDesc: "Commercial office space",
      fullDesc: "A modern office building with open layouts and collaborative spaces for productivity.",
      category: "Commercial",
      image: project2Img,
    },
    {
      id: 3,
      name: "Interior Makeover",
      shortDesc: "Stylish home interiors",
      fullDesc: "Complete interior design for a cozy apartment with modern furniture and lighting.",
      category: "Interior",
      image: project3Img,
    },
    {
      id: 4,
      name: "Exterior Renovation",
      shortDesc: "Outdoor landscape project",
      fullDesc: "Revamped exterior with gardens, patios, and sustainable landscaping.",
      category: "Exterior",
      image: project4Img,
    },
  ];

  const categories = ["All", "Residential", "Commercial", "Interior", "Exterior"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="ourworks-page">
      {/* Filter Buttons */}
      <section className="filter-section">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Project Grid */}
      <section className="project-grid-section">
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setModalProject}
            />
          ))}
        </div>
      </section>

      {/* Modal Preview */}
      <Modal project={modalProject} onClose={() => setModalProject(null)} />
    </div>
  );
};

export default OurWorks;
