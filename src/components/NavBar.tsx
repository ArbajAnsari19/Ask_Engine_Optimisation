
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, MousePointerClick } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled 
          ? "py-3 bg-black/80 backdrop-blur-lg border-b border-chartreuse/20 shadow-lg" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <MousePointerClick className="h-6 w-6 text-chartreuse animate-pulse-glow" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-chartreuse to-chartreuse-light">AskOptimize</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-chartreuse transition-colors duration-200">Features</a>
          <a href="#how-it-works" className="text-foreground hover:text-chartreuse transition-colors duration-200">How It Works</a>
          <a href="#testimonials" className="text-foreground hover:text-chartreuse transition-colors duration-200">Testimonials</a>
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-md btn-glow"
          >
            Get Started
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground hover:text-chartreuse"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-chartreuse/20">
          <div className="flex flex-col space-y-4 p-6">
            <a 
              href="#features" 
              className="text-foreground hover:text-chartreuse transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-foreground hover:text-chartreuse transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-chartreuse transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2 rounded-md btn-glow w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
