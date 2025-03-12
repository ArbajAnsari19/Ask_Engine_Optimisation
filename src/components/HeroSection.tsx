
import React, { useEffect, useRef } from 'react';
import { ArrowRight, BarChart2, Brain, Zap } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden"
      style={{ 
        '--mouse-x': '0.5', 
        '--mouse-y': '0.5'
      } as React.CSSProperties}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] left-[10%] w-32 h-32 bg-chartreuse/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-[20%] right-[15%] w-64 h-64 bg-chartreuse/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[60%] left-[40%] w-48 h-48 bg-chartreuse/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-chartreuse/10 border border-chartreuse/20 backdrop-blur-sm animated-entry">
              <span className="text-sm font-medium text-chartreuse flex items-center gap-2">
                <Zap className="h-4 w-4" /> ML-Powered Ask Engine Optimization
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animated-entry delay-100">
              Optimize Your <span className="gradient-text">Content</span> for the Age of AI
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground animated-entry delay-200">
              Our machine learning algorithms help you optimize your content for next-generation AI-driven search. Get more visibility, more clicks, and better answers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animated-entry delay-300">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-md btn-glow flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="#how-it-works" 
                className="px-6 py-3 rounded-md border border-chartreuse/30 hover:border-chartreuse/50 text-foreground transition-all duration-300 flex items-center justify-center gap-2"
              >
                How It Works
              </a>
            </div>
            
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 animated-entry delay-400">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-chartreuse/10 flex items-center justify-center">
                  <BarChart2 className="h-6 w-6 text-chartreuse" />
                </div>
                <div>
                  <p className="font-medium">98%</p>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-chartreuse/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-chartreuse" />
                </div>
                <div>
                  <p className="font-medium">2.5x</p>
                  <p className="text-sm text-muted-foreground">Better Results</p>
                </div>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="w-12 h-12 rounded-full bg-chartreuse/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-chartreuse" />
                </div>
                <div>
                  <p className="font-medium">10M+</p>
                  <p className="text-sm text-muted-foreground">Queries Analyzed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block animated-entry delay-500">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-chartreuse/20 to-chartreuse rounded-2xl blur-2xl opacity-50 animate-pulse-glow"></div>
              <div className="glass-card-dark rounded-2xl p-6 relative overflow-hidden h-[500px]">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-chartreuse/10 rounded-full filter blur-xl"></div>
                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-chartreuse/10 rounded-full filter blur-xl"></div>
                
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs text-gray-400">AskOptimize ML Engine</div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="w-full h-8 bg-black/60 rounded-md border border-chartreuse/20 flex items-center px-3">
                      <div className="w-4 h-4 rounded-full bg-chartreuse/80 mr-2"></div>
                      <div className="text-sm text-chartreuse/80">Analyzing content structure...</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="w-full h-4 bg-black/40 rounded-md"></div>
                      <div className="w-3/4 h-4 bg-black/40 rounded-md"></div>
                      <div className="w-5/6 h-4 bg-black/40 rounded-md"></div>
                    </div>
                    
                    <div className="p-4 rounded-md bg-chartreuse/10 border border-chartreuse/30">
                      <div className="text-xs text-chartreuse mb-2">CONTENT OPTIMIZATION SCORE</div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-white">78/100</div>
                        <div className="w-16 h-16 rounded-full border-4 border-chartreuse flex items-center justify-center">
                          <span className="text-chartreuse font-bold">78%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Relevance</span>
                        <span className="text-chartreuse">92%</span>
                      </div>
                      <div className="w-full bg-black/40 rounded-full h-1.5">
                        <div className="bg-chartreuse h-1.5 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Clarity</span>
                        <span className="text-chartreuse">85%</span>
                      </div>
                      <div className="w-full bg-black/40 rounded-full h-1.5">
                        <div className="bg-chartreuse h-1.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Structure</span>
                        <span className="text-chartreuse">68%</span>
                      </div>
                      <div className="w-full bg-black/40 rounded-full h-1.5">
                        <div className="bg-chartreuse h-1.5 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <div className="px-3 py-1.5 rounded-md bg-chartreuse text-black text-xs font-medium">Optimize</div>
                      <div className="px-3 py-1.5 rounded-md bg-black/40 border border-white/10 text-white text-xs">View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
