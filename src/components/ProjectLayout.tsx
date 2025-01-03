import React from 'react';
import NavPill from './NavPill';

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <>
      <NavPill />
      <div className="wrapper">
        <div className="container project-container">
          {children}
        </div>
      </div>
    </>
  );
};

export default ProjectLayout; 