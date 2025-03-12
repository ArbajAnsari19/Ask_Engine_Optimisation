
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <div id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-chartreuse/30 to-chartreuse/10 rounded-2xl blur-xl opacity-70"></div>
            <div className="glass-card-dark rounded-2xl p-8 md:p-12 relative overflow-hidden border border-chartreuse/30">
              <div className="absolute -right-24 -top-24 w-64 h-64 bg-chartreuse/5 rounded-full filter blur-3xl"></div>
              <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-chartreuse/10 rounded-full filter blur-3xl"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to optimize your content for the AI era?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Join forward-thinking companies already using AskOptimize to get more visibility in AI-powered search results.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-chartreuse/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-chartreuse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p>Free consultation and content audit</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-chartreuse/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-chartreuse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p>No credit card required</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-chartreuse/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-chartreuse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p>Cancel anytime</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-6">Get Started Today</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 rounded-md bg-black/50 border border-white/10 focus:border-chartreuse/50 focus:outline-none focus:ring-1 focus:ring-chartreuse/30 transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 rounded-md bg-black/50 border border-white/10 focus:border-chartreuse/50 focus:outline-none focus:ring-1 focus:ring-chartreuse/30 transition-colors duration-200"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        className="w-full px-4 py-2 rounded-md bg-black/50 border border-white/10 focus:border-chartreuse/50 focus:outline-none focus:ring-1 focus:ring-chartreuse/30 transition-colors duration-200"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={3}
                        className="w-full px-4 py-2 rounded-md bg-black/50 border border-white/10 focus:border-chartreuse/50 focus:outline-none focus:ring-1 focus:ring-chartreuse/30 transition-colors duration-200"
                        placeholder="Tell us a bit about your content needs..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full px-6 py-3 rounded-md btn-glow flex items-center justify-center gap-2"
                    >
                      Request Demo <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
