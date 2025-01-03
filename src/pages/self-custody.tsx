import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import CaseStudySection from '../components/CaseStudySection';

const SelfCustody = () => {
  return (
    <ProjectLayout>
      <section className="case-study-hero">
        <div className="hero-content">
          <h1>Self-Custody Education</h1>
          <h3>Making complex blockchain concepts accessible through interactive learning</h3>
          <div className="hero-frame">
            <div className="frame" />
          </div>
        </div>
      </section>

      <CaseStudySection
        title="The Problem"
        description="Most users avoid self-custody due to fear of making mistakes. Current educational resources are text-heavy and lack hands-on practice, leading to low confidence and adoption."
      />

      <CaseStudySection
        title="The Process"
        description="Research revealed users learn best by doing. We prototyped an interactive environment where users could practice wallet operations safely, with real-time guidance and feedback."
      />

      <CaseStudySection
        title="The Solution"
        description="A practice-based learning tool that simulates real wallet interactions. Users can experiment freely, make mistakes safely, and build confidence through hands-on experience."
      />
    </ProjectLayout>
  );
};

export default SelfCustody; 