import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import CaseStudySection from '../components/CaseStudySection';

const DappWorkflow = () => {
  return (
    <ProjectLayout>
      <section className="case-study-hero">
        <div className="hero-content">
          <h1>dApp Development Tool</h1>
          <h3>Visualizing the smart contract development workflow</h3>
          <div className="hero-frame">
            <div className="frame" />
          </div>
        </div>
      </section>

      <CaseStudySection
        title="The Problem"
        description="Smart contract development requires managing complex technical concepts across multiple tools. This fragmented workflow increases development time and potential for errors."
      />

      <CaseStudySection
        title="The Process"
        description="We mapped the development journey from contract creation to deployment, identifying opportunities to visualize complex operations and automate repetitive tasks."
      />

      <CaseStudySection
        title="The Solution"
        description="An integrated visual environment that unifies the development workflow. Developers can prototype, test, and deploy smart contracts with real-time feedback and built-in best practices."
      />
    </ProjectLayout>
  );
};

export default DappWorkflow; 