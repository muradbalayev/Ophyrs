import React from "react";

const AboutSection = () => (
  <section className="py-24 max-w-[1920px] overflow-hidden mx-auto">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10 overflow-hidden">
            <img 
              src="/assets/about-image.jpg" 
              alt="Interactive learning experience" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
              }}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-600 -z-10"></div>
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent-500 -z-10"></div>
        </div>
        
        {/* Right side - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 uppercase">About Ophyrs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Gamified Learning Experience</h3>
              <p className="text-gray-700">
                EduQuest transforms education into an engaging journey where students earn XP, coins, and badges while progressing through interactive courses and real-world simulations.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Monitoring</h3>
              <p className="text-gray-700">
                Our platform uses advanced AI agents to track progress, detect fraud, and provide personalized insights, ensuring a fair and optimized learning experience for everyone.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Career Simulation</h3>
              <p className="text-gray-700">
                Students advance from Intern to Senior levels through practical tasks that simulate real job roles, building skills that directly translate to professional success.
              </p>
            </div>
          </div>
          
          <div className="mt-8 inline-block group relative">
            <button className="relative z-10 px-8 py-3 bg-white border border-primary-600 text-black uppercase font-medium transition-all duration-300 group-hover:px-10">
              Learn More
              <span className="absolute h-[2px] w-0 bg-primary-600 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div className="absolute top-0 left-0 w-full h-full bg-primary-600 transform translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
