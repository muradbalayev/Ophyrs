import React from "react";
// import ParallaxImage from "../ParallaxImage/ParallaxImage";
const Hero = () => {
  return (
    <section 
      className="hero w-full h-screen mx-auto flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/home/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto bg-white px-8 py-12 rounded-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase mb-4  font-semibold">
            Learn with <span className="text-accent-500">Ophyrs</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 ">
          With Ophyrs, teachers organize interactive lessons, and students benefit from this unique experience. Learn physics, biology, and literature in a new and exciting way.          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer px-6 py-3 bg-primary-600  border rounded-lg hover:bg-primary-700 transition duration-300 uppercase">
              View Courses
            </button>
            <button className="cursor-pointer px-6 py-3 border   rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300 uppercase">
              Join as Teacher
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent-100 rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default Hero;
