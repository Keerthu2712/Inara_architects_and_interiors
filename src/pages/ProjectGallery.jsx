import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { portfolioData } from "../../src/data/portfolioData";

const ProjectGallery = () => {
  const { category, projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const categoryData = portfolioData.find((c) => c.category === category);
  if (!categoryData) return <h2>Category not found</h2>;

  const project = categoryData.projects.find((p) => p.id === projectId);
  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="gallery-page zoom-out">
      <h1>{project.title}</h1>
      <div className="gallery-grid">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title}-${index}`}
            className="gallery-img"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

       {/* POPUP / LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
