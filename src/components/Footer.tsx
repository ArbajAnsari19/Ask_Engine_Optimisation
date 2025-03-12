
import React from 'react';
import { MousePointerClick, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10">
      <div className="container px-6 md:px-12 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#" className="flex items-center space-x-2 mb-4">
              <MousePointerClick className="h-6 w-6 text-chartreuse" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-chartreuse to-chartreuse-light">AskOptimize</span>
            </a>
            <p className="text-muted-foreground mb-6">
              Optimizing content for the age of AI-driven search. Get more visibility, more clicks, and better answers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-chartreuse transition-colors duration-200">Data Processing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AskOptimize. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-chartreuse transition-colors duration-200">
              YC W23
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
