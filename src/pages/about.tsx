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
                I design tools that help people take charge of their lives—whether they're building something new, learning a skill, or just trying to make things a little easier. I'm all about making complex systems feel approachable and intuitive, turning technical ideas into experiences that anyone can connect with. I've worked on tools for developers, creators, and everyday users, focusing on bringing innovation to life in a way that feels simple and natural.
              </p>
              <p>
                Outside of work, I'm usually lifting weights or trying out new recipes for friends—it's my favorite way to unwind and connect with people. I'm also a huge fan of audiobooks, especially ones about history or technology, because they help me think differently about the world. When I'm not cooking or reading, you'll find me soaking up the sun on a long walk or exploring national parks. There's something about being in nature that reminds me why balance and simplicity matter so much, both in life and in design.
              </p>
              <p>
                At the end of the day, I want the things I create to feel effortless for the people who use them—whether it's helping a developer build faster or making a complex process feel doable for someone new. I believe good design should feel human, like a tool you've always known how to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 