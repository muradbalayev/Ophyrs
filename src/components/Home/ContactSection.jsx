import React from "react";

const ContactSection = () => (
  <section className="py-24 max-w-[1920px] overflow-hidden mx-auto">
    <div className="container mx-auto px-4">
      {/* Header with decorative elements */}
      <div className="relative mb-16">
        <div className="text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase">Contact & Collaboration</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Want to partner, join our team, or organize a unique learning experience? Reach out and let's build the future of education together.
          </p>
        </div>
        {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 border-2 border-primary-600 rounded-full -z-10 opacity-20"></div> */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-primary-600"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left side - Contact Info */}
        <div className="w-full md:w-1/3">
          <div className="bg-white p-8 shadow-lg h-full">
            <h3 className="text-2xl font-bold mb-6 uppercase">Get In Touch</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Our Office</h4>
                <p className="text-gray-600">123 Education Avenue<br />Innovation District<br />San Francisco, CA 94103</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
                <p className="text-gray-600 mb-1">Email: hello@ophyrs.com</p>
                <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-300">
                    <span>FB</span>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-300">
                    <span>TW</span>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-300">
                    <span>IG</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Contact Form */}
        <div className="w-full md:w-2/3">
          <div className="bg-white p-8 shadow-lg relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent-500 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-600 -z-10"></div>
            
            <h3 className="text-2xl font-bold mb-6 uppercase">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full border-b-2 border-gray-300 py-2 focus:border-primary-600 focus:outline-none transition-colors" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full border-b-2 border-gray-300 py-2 focus:border-primary-600 focus:outline-none transition-colors" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  className="w-full border-b-2 border-gray-300 py-2 focus:border-primary-600 focus:outline-none transition-colors" 
                  placeholder="How can we help you?" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  className="w-full border-b-2 border-gray-300 py-2 focus:border-primary-600 focus:outline-none transition-colors" 
                  rows={4} 
                  placeholder="Your message here..." 
                  required 
                ></textarea>
              </div>
              
              <div className="pt-4">
                <div className="inline-block group relative">
                  <button 
                    type="submit" 
                    className="relative z-10 px-8 py-3 bg-white border border-primary-600 text-black uppercase font-medium transition-all duration-300 group-hover:px-10"
                  >
                    Send Message
                    <span className="absolute h-[2px] w-0 bg-primary-600 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  <div className="absolute top-0 left-0 w-full h-full bg-primary-600 transform translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
