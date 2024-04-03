import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className='home-img'>
        <img src="./assets/Home.jpg" alt="" />
      </div>
       <div className="home-text">
        <h1>Hello World!</h1>
        <h6>My name is David Santos. </h6>
        <p>
          Introducing my portfolio, a showcase of my skills, experiences, and projects. 
          This page serves as your gateway to discovering more about me and what I have to offer. 
        </p>
       </div>
    </div>
  );
};

export default Home;