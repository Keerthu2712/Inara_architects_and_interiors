import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../../src/data/portfolioData";

const ProjectCard = ({ project, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div className="project-card" onClick={() => navigate(navigateTo)}>
      <img src={project.coverImage} alt={project.title} />
      <h3>{project.title}</h3>
    </div>
  );
};

const CategoryProjects = () => {
  const { category } = useParams();
  const categoryData = portfolioData.find((c) => c.category === category);

  if (!categoryData || !categoryData.projects) {
    return <h2 style={{ padding: "150px" }}>No projects found for {category}</h2>;
  }

  return (
    <div className="category-page zoom-out">
      <h1>{category}</h1>
      <div className="project-grid">
        {categoryData.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            navigateTo={`/portfolio/${category}/${project.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProjects;
