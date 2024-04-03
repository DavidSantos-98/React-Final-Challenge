import React from "react";
import PortfolioItem from "./PortfolioItem";
import "./Styles.css"


const Works = () => {
      return (
       <>
        <div className="parent">
          <h1>All Projects</h1>
            <div className="works-container">
              <PortfolioItem
                title="Project 1"
                description="This is my first project"
                imageUrl="./assets/image1.jpg"
              />
              <PortfolioItem
                title="Project 2"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imageUrl="./assets/image2.jpg"
              />
              <PortfolioItem
                title="Project 3"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
               imageUrl="./assets/image3.jpg"
              />
          </div>
        </div>
       </>
      );
    };
  
  export default Works;