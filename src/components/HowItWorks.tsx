
import React, { useRef, useEffect } from 'react';
import { ArrowRight, Search, BarChart2, Cpu, Zap } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Data Collection",
    description: "Our AI crawls and analyzes millions of search queries and results to understand patterns in question-answer relationships."
  },
  {
    icon: Cpu,
    title: "ML Processing",
    description: "Advanced machine learning models identify the key factors that make content likely to be selected by AI search engines."
  },
  {
    icon: BarChart2,
    title: "Content Analysis",
    description: "We analyze your content against our dataset to identify opportunities for optimization and enhancement."
  },
  {
    icon: Zap,
    title: "Optimization",
    description: "Receive actionable recommendations to restructure your content for maximum visibility in AI-based search results."
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = sectionRef.current?.querySelectorAll('.step-item');
          elements?.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-fade-up');
            }, index * 200);
          });
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="how-it-works" className="py-24 relative overflow-hidden gradient-bg">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div ref={sectionRef} className="container px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-chartreuse/10 border border-chartreuse/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-chartreuse">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How AskOptimize Works</h2>
          <p className="text-lg text-muted-foreground">
            Our machine learning pipeline optimizes your content specifically for AI-driven search engines and large language models.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div key={index} className="step-item opacity-0">
                <div className="glass-card-dark rounded-xl p-6 h-full border border-chartreuse/20 hover:border-chartreuse/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-chartreuse/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-chartreuse" />
                    </div>
                    <div className="ml-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="ml-2 hidden lg:block">
                        <ArrowRight className="h-4 w-4 text-chartreuse" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-md btn-glow inline-flex items-center gap-2"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
