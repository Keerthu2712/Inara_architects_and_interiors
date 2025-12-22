import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { portfolioData } from "../../src/data/portfolioData";

const ProjectGallery = () => {
  const { category, projectId } = useParams();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categoryData = portfolioData.find(c => c.category === category);
  if (!categoryData) return null;

  const project = categoryData.projects.find(p => p.id === projectId);
  if (!project) return null;

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const modalRoot = document.getElementById("modal-root");

  return (
    <>
      <div className="gallery-page">
        <h1>{project.title}</h1>

        <div className="gallery-grid">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openImage(index)}
              alt=""
            />
          ))}
        </div>
      </div>

      {selectedIndex !== null && modalRoot &&
        ReactDOM.createPortal(
          <div className="lightbox-overlay" onClick={closeImage}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button className="lightbox-close" onClick={closeImage}>
                ×
              </button>

              {/* PREV */}
              <button className="lightbox-nav left" onClick={prevImage}>
                ‹
              </button>

              {/* IMAGE */}
              <img
                src={project.images[selectedIndex]}
                alt="preview"
              />

              {/* NEXT */}
              <button className="lightbox-nav right" onClick={nextImage}>
                ›
              </button>
            </div>
          </div>,
          modalRoot
        )}
    </>
  );
};

export default ProjectGallery;
