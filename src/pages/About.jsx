import React, { useEffect } from 'react'
import Transition from '../components/Transition'
import { Link } from 'react-router-dom'
import aboutImg from '../assets/illustrations/Exams-bro.png'
import Button from '../components/common/Button'

const About = () => {



  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'auto'
    });
  }, []);


  return (
    <div className="page max-w-[1920px] overflow-hidden mx-auto">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase">About <span className="text-accent-500">Ophyrs</span></h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Transforming education through interactive, gamified learning experiences that prepare students for real-world success.
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-16 left-1/4 w-64 h-64 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -top-16 right-1/4 w-64 h-64 bg-accent-100 rounded-full opacity-20 blur-3xl"></div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 overflow-hidden rounded-lg">
                <img 
                  src={aboutImg} 
                  alt="Our mission" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-600 -z-10"></div>
            </div>
            
            {/* Right side - Content */}
            <div className="w-full md:w-1/2 relative">
            {/* <div className="absolute -top-20 left-40 w-24 h-24 border-2 border-accent-500 -z-10"></div> */}

              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">Our Mission</h2>
              
              <p className="text-gray-700 mb-6">
                At Ophyrs, we believe education should be engaging, interactive, and tailored to the needs of modern learners. Our mission is to bridge the gap between traditional education and practical skills needed in today's rapidly evolving job market.
              </p>
              
              <p className="text-gray-700 mb-6">
                We've created a platform where teachers can design immersive learning experiences, and students can develop real-world skills through gamified courses, interactive simulations, and collaborative projects.
              </p>
              
              <p className="text-gray-700">
                By combining cutting-edge technology with proven educational methodologies, we're revolutionizing how knowledge is shared, absorbed, and applied in the real world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">What Makes Us Different</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform combines several innovative approaches to create a unique learning experience
            </p>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-primary-600"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-primary-600 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-primary-600">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Gamified Learning Experience</h3>
              <p className="text-gray-700 text-center">
                Students earn XP, coins, and badges while progressing through interactive courses and real-world simulations, making learning fun and engaging.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-accent-500 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-accent-500">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">AI-Powered Monitoring</h3>
              <p className="text-gray-700 text-center">
                Our platform uses advanced AI agents to track progress, detect fraud, and provide personalized insights for an optimized learning experience.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-primary-600 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-primary-600">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Career Simulation</h3>
              <p className="text-gray-700 text-center">
                Students advance through practical tasks that simulate real job roles, building skills that directly translate to professional success.
              </p>
            </div>
          </div>
        </div>
      </section>

   

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">What People Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from educators and students who have experienced the Ophyrs difference
            </p>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-primary-600"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 shadow-lg rounded-lg relative">
              <div className="text-4xl text-primary-200 absolute top-4 left-4">"</div>
              <p className="text-gray-700 mb-6 relative z-10 pt-6">
                Ophyrs has transformed how I teach physics. My students are more engaged than ever, and I can see their practical understanding improving with each interactive lesson.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                  <img 
                    src="/assets/testimonials/teacher1.jpg" 
                    alt="Teacher" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://randomuser.me/api/portraits/men/32.jpg";
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Dr. Robert Wilson</h4>
                  <p className="text-sm text-gray-500">Physics Teacher, Lincoln High School</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 shadow-lg rounded-lg relative">
              <div className="text-4xl text-primary-200 absolute top-4 left-4">"</div>
              <p className="text-gray-700 mb-6 relative z-10 pt-6">
                As a student who struggled with traditional learning methods, Ophyrs has been a game-changer. The gamified approach keeps me motivated, and I'm actually retaining what I learn.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                  <img 
                    src="/assets/testimonials/student1.jpg" 
                    alt="Student" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://randomuser.me/api/portraits/women/44.jpg";
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Jasmine Patel</h4>
                  <p className="text-sm text-gray-500">Computer Science Student</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 shadow-lg rounded-lg relative">
              <div className="text-4xl text-primary-200 absolute top-4 left-4">"</div>
              <p className="text-gray-700 mb-6 relative z-10 pt-6">
                Implementing Ophyrs across our district has led to measurable improvements in student engagement and knowledge retention. The data insights have been invaluable for our teachers.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                  <img 
                    src="/assets/testimonials/admin1.jpg" 
                    alt="Administrator" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://randomuser.me/api/portraits/women/68.jpg";
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Dr. Lisa Montgomery</h4>
                  <p className="text-sm text-gray-500">Education Director, Westfield School District</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase text-black">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-black">
            Join thousands of educators and students who are already using Ophyrs to revolutionize education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button text="Explore Courses" href="/" />
            <Button text="Contact Us" href="/contact" />
          </div>
        </div>
      </section>
    </div>
  )
}

const TransitionedAbout = Transition(About);
export default TransitionedAbout;
