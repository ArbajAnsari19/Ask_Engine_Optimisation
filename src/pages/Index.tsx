
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Brain, PieChart, MessageSquare, Search, BarChart2, Layers, RefreshCw, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-First Optimization",
    description: "Our ML models understand how AI search engines process and select content for answers."
  },
  {
    icon: PieChart,
    title: "Content Analytics",
    description: "Detailed insights into how your content performs against AI-driven search criteria."
  },
  {
    icon: MessageSquare,
    title: "Query Intent Mapping",
    description: "Analyze and align your content with the questions your audience is asking."
  },
  {
    icon: Search,
    title: "Semantic Relevance",
    description: "Enhance your content's semantic structure for better AI comprehension."
  },
  {
    icon: BarChart2,
    title: "Competitive Analysis",
    description: "See how your content stacks up against competitors in AI search results."
  },
  {
    icon: Layers,
    title: "Content Structure",
    description: "Optimize your content layout and structure for maximum AI visibility."
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Our models continuously adapt to changes in AI search algorithms."
  },
  {
    icon: Zap,
    title: "Real-time Recommendations",
    description: "Get actionable suggestions to improve your content's visibility."
  }
];

const testimonials = [
  {
    quote: "AskOptimize transformed how we approach content creation. Our visibility in AI search results has increased by 215% in just three months.",
    name: "Sarah Johnson",
    role: "Head of Content",
    company: "TechScale Inc."
  },
  {
    quote: "The insights we gained about how AI processes our content were eye-opening. It's like having a crystal ball into the future of search.",
    name: "Michael Chen",
    role: "CEO",
    company: "DataDrive"
  },
  {
    quote: "Our content now consistently appears as the top result in AI-generated answers. The ROI on using AskOptimize has been incredible.",
    name: "Jessica Rodriguez",
    role: "Marketing Director",
    company: "GrowthLab"
  },
  {
    quote: "As search moves toward AI-generated answers, AskOptimize has been our secret weapon for staying ahead of the curve.",
    name: "David Kim",
    role: "SEO Strategist",
    company: "Visionary Media"
  }
];

const Index = () => {
  useEffect(() => {
    // Add custom class to body
    document.body.classList.add('gradient-bg');
    
    // Clean up
    return () => {
      document.body.classList.remove('gradient-bg');
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <HeroSection />
      
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-chartreuse/10 border border-chartreuse/20 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-chartreuse">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Features for AI-Optimized Content</h2>
            <p className="text-lg text-muted-foreground">
              Our platform leverages cutting-edge machine learning to help your content stand out in the age of AI-powered search.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <HowItWorks />
      
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-chartreuse/10 border border-chartreuse/20 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-chartreuse">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Companies are already seeing incredible results with AskOptimize's AI-powered content optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
