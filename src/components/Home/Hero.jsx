import React from "react";
import Button from "../common/Button";
// import ParallaxImage from "../ParallaxImage/ParallaxImage";
import hero from "../../assets/bg-min.jpg";
import aze from '../../assets/illustrations/azeFlag.png'
import turkisg from '../../assets/illustrations/turkishFlag.png'
const Hero = () => {

  const scrollToCourses = () => {
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section 
      className="hero w-full h-screen mx-auto flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('${hero}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute bottom-4 left-4 ">
        <div className="flag w-20 flex gap-4">
          <img src={aze} className="w-full h-full object-cover" alt="Azerbaijan Flag" />
          <img src={turkisg} className="w-full h-full object-cover" alt="Turkish Flag" />
        </div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto bg-white px-8 py-12 rounded-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase mb-4  font-semibold">
            Learn with <span className="text-accent-500">Ophyrs</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 ">
          With Ophyrs, teachers organize interactive lessons, and students benefit from this unique experience. Learn physics, biology, and literature in a new and exciting way.          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button text="View Courses" onClick={scrollToCourses} />
            <Button text="Join as Teacher" href="/teacher/auth" />
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
