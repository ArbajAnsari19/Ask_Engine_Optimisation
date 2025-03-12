
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, company, index }) => {
  const delay = index * 150;
  
  return (
    <div 
      className="glass-card-dark rounded-xl p-6 transition-all duration-300 hover:border-chartreuse/30 flex flex-col h-full animated-entry"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-chartreuse">"</div>
      <p className="text-muted-foreground flex-1 mb-6">{quote}</p>
      <div>
        <p className="font-medium text-white">{name}</p>
        <p className="text-sm text-muted-foreground">{role}, {company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
