import React from 'react';
import NavPill from '../components/NavPill';

const About = () => {
  return (
    <>
      <NavPill />
      <div className="wrapper">
        <div className="container">
          <h1>About</h1>
          <div className="about-content">
            <img 
              src="/images/pfp.png" 
              alt="Jimmy Shan" 
              className="profile-image"
            />
            <div className="about-text">
              <p>
                I build tools that make complex things feel simple and approachable. Whether it's helping developers ship faster or making a novel product click for newcomers, I love turning tricky problems spaces into intuitive experiences.
              </p>
              <p>
                When I'm not designing, you'll find me at the gym, cooking for friends, or exploring national parks. I'm a big audiobook nerd (history and tech are my jam), and there's nothing better than a long walk in the sun to clear my head.
              </p>
              <p>
                My goal is to create tools that feel natural—like they've always been part of your workflow. I believe the best design is the kind you don't have to think about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 