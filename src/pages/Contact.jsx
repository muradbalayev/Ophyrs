import React, { useEffect } from "react";
import Transition from "../components/Transition";
import { Link } from "react-router-dom";
import contactImg from "../assets/illustrations/Contact-us-bro.png";

const Contact = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className="page max-w-[1920px] overflow-hidden mx-auto">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase">
              Contact <span className="text-accent-500">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Have questions or want to collaborate? We'd love to hear from you!
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-16 left-1/4 w-64 h-64 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -top-16 right-1/4 w-64 h-64 bg-accent-100 rounded-full opacity-20 blur-3xl"></div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left side - Contact Info */}
            <div className="w-full md:w-1/3">
              <div className="bg-white p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-6 uppercase">
                  Get In Touch
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Our Office</h4>
                    <p className="text-gray-600">
                      Baku Congress Center
                      <br />
                      Baku, Azerbaijan 4051
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
                    <p className="text-gray-600 mb-1">
                      Email: hello@ophyrs.com
                    </p>
                    <p className="text-gray-600 mb-1">
                      Phone: +1 (555) 123-4567
                    </p>
                    <p className="text-gray-600">Support: support@ophyrs.com</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Business Hours
                    </h4>
                    <p className="text-gray-600 mb-1">
                      Monday - Friday: 9am - 6pm
                    </p>
                    <p className="text-gray-600">Saturday: 10am - 2pm</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                      >
                        <span>FB</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                      >
                        <span>TW</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                      >
                        <span>IG</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                      >
                        <span>LI</span>
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

                <h3 className="text-2xl font-bold mb-6 uppercase">
                  Send Us a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full border-b-2 border-gray-300 py-2 focus:border-primary-600 focus:outline-none transition-colors"
                        placeholder="Murad Balazada"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="w-full border-b-2 border-gray-300 py-2 focus:border-primary-600 focus:outline-none transition-colors"
                        placeholder="@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-gray-300 py-2 focus:border-primary-600 focus:outline-none transition-colors"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
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

      {/* Map and Illustration Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Map */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-lg h-[400px] bg-white">
                {/* Placeholder for map - in a real implementation, you would use Google Maps or another mapping service */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.2103553998923!2d49.86287181149566!3d40.397491471323555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d412c43d539%3A0x294c20fed11538be!2sBak%C3%BC%20Kongre%20Merkezi!5e1!3m2!1str!2saz!4v1745056620535!5m2!1str!2saz"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-600 -z-10"></div>
            </div>

            {/* Illustration */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 overflow-hidden">
                <img
                  src={contactImg}
                  alt="Contact us illustration"
                  className="max-w-[80%] mx-auto h-auto max-h-[500px] object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
                  }}
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent-500 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about Ophyrs
            </p>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-primary-600"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">
                  How do I sign up for Ophyrs?
                </h3>
                <p className="text-gray-700">
                  Signing up is easy! Click the "Get Started" button on our
                  homepage, fill out the registration form, and you'll be ready
                  to explore our interactive courses within minutes.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">
                  Is Ophyrs suitable for all age groups?
                </h3>
                <p className="text-gray-700">
                  Yes! We have courses designed for various age groups and skill
                  levels, from elementary school students to adult learners
                  seeking professional development.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">
                  How can teachers use Ophyrs in their classrooms?
                </h3>
                <p className="text-gray-700">
                  Teachers can create custom learning experiences, track student
                  progress, assign interactive homework, and access detailed
                  analytics to identify areas where students may need additional
                  support.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">
                  Do you offer institutional pricing?
                </h3>
                <p className="text-gray-700">
                  Yes, we offer special pricing for schools, districts, and
                  educational institutions. Please contact our sales team at
                  sales@ophyrs.com for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase text-black">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-black">
            Subscribe to our newsletter to receive the latest news, updates, and
            educational resources.
          </p>
          <div className="max-w-xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                className="flex-grow px-4 py-3 border text-black focus:outline-none"
                placeholder="Your email address"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-primary-600 uppercase font-medium hover:bg-gray-100 transition duration-300 text-black"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 text-black text-opacity-80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
const TransitionedContact = Transition(Contact);
export default TransitionedContact;
