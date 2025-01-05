import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import NavPill from '../components/NavPill';
import Ripple from '../components/Ripple';

const Home = () => {
  return (
    <>
      <NavPill />
      <div className="wrapper min-h-screen">
        <div className="container">
          <div className="header-text">
            <h1>
              Jimmy is a Product Designer at <a href="https://spatial.io" className="company-link" target="_blank" rel="noopener noreferrer">Spatial</a>, based in New York City. Previously, at <a href="https://pietrastudio.com" className="company-link" target="_blank" rel="noopener noreferrer">Pietra</a> and stealth startups.
            </h1>
            <h3>
              I'm a prototyper at heart, with <span className="experience-text">4 years of experience</span> in areas like e-commerce, EU regulatory compliance, metaverse, and SaaS.
            </h3>
          </div>
          
          <div className="projects-grid">
            <div className="project-card project-featured">
              <Ripple />
            </div>
            <Link to="/self-custody" className="project-card">
              <Ripple />
            </Link>
            <Link to="/dapp-workflow" className="project-card">
              <Ripple />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
