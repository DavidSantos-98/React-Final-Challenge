import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';



const NavigationBar = () => {
  const data = {
    home: 'Home',
    about: 'About',
    works: 'Works',
    contact: 'Contact',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a href="#Home">
        <NavLink className="navbar-brand">
          David Santos
        </NavLink>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {Object.entries(data).map(([key, value]) => (
              <li key={key} className="nav-item">
                <NavLink className="nav-link" exact to={`/${key}`}>
                  {value}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
