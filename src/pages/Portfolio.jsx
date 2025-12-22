import React from "react";
import { useNavigate } from "react-router-dom";
import { portfolioData } from "../../src/data/portfolioData";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div
      className="category-card"
      onClick={() => navigate(`/portfolio/${category}`)}
    >
      <h3>{category}</h3>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio-page zoom-in">
      <h1>Our Works</h1>
      <div className="portfolio-grid">
        {portfolioData.map((cat) => (
          <CategoryCard key={cat.category} category={cat.category} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
