import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import NavPill from '../components/NavPill';

const Home = () => {
  return (
    <>
      <NavPill />
      <div className="wrapper">
        <div className="container">
          <div className="header-text">
            <h1>
              Jimmy is a Product Designer at <a href="https://spatial.io" className="company-link" target="_blank" rel="noopener noreferrer">Spatial</a>, based in New York City. Previously, at <a href="https://pietrastudio.com" className="company-link" target="_blank" rel="noopener noreferrer">Pietra</a> and stealth startups.
            </h1>
            <h3>
              <span className="experience-text">4 years of experience</span> in areas like e-commerce, EU regulatory compliance, metaverse, and SaaS. Crafting emotive prototypes using tools like AE, Rive, and Cursor—I'm a prototyper at heart.
            </h3>
          </div>
          
          <div className="projects-grid">
            <div className="project-card project-featured" />
            <Link to="/self-custody" className="project-card" />
            <Link to="/dapp-workflow" className="project-card" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
