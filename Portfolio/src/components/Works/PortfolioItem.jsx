import React from "react";
import "./Styles.css";

const PortfolioItem = ({ title, description, imageUrl }) => {
  return (
    <div className="container-parent">
       <a href="">
        <div className="portfolioItem-img-container">
          <p>{title}</p>

          <img className="portfolio-item-img" src={imageUrl} alt={`A portfolio item image for ${title}`} />

          <p className="portfolio-item-description" >{description}</p>
        </div>
       </a>
    </div>
  );
};

export default PortfolioItem;