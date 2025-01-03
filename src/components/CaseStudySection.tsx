import React from 'react';

interface CaseStudySectionProps {
  title: string;
  description: string;
}

const CaseStudySection = ({ title, description }: CaseStudySectionProps) => {
  return (
    <section className="case-study-section">
      <div className="section-content">
        <div className="section-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="section-visual" />
      </div>
    </section>
  );
};

export default CaseStudySection; 