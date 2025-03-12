
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  const delay = index * 100;
  
  return (
    <div 
      className="glass-card-dark rounded-xl p-6 transition-all duration-300 hover:border-chartreuse/50 group animated-entry"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 w-12 h-12 rounded-lg bg-chartreuse/10 flex items-center justify-center group-hover:bg-chartreuse/20 transition-colors duration-300">
        <Icon className="h-6 w-6 text-chartreuse" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-chartreuse transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
