import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  // Fake data array for courses/events
  const eventsData = [
    {
      id: 1,
      slug: "phyton",
      image: '/events/python.jpg',
      title: 'Introduction to Python Programming',
      description: 'Learn the fundamentals of Python programming in this interactive course designed for beginners.',
      teacherName: 'Dr. Alan Smith',
      topic: 'Programming',
      progress: 75
    },
    {
      id: 2,
      slug: "data-science",
      image: '/events/data-science.jpg',
      title: 'Data Science Fundamentals',
      description: 'Explore the world of data science through practical exercises and real-world applications.',
      teacherName: 'Prof. Sarah Johnson',
      topic: 'Data Science',
      progress: 45
    },
    {
      id: 3,
      slug: "ai",
      image: '/events/ai.jpg',
      title: 'Artificial Intelligence Basics',
      description: 'Understand the core concepts of AI and how its transforming industries today.',
      teacherName: 'Dr. Michael Chen',
      topic: 'Artificial Intelligence',
      progress: 90
    },
    {
      id: 4,
      slug: "web-development",
      image: '/events/web-dev.jpg',
      title: 'Web Development Bootcamp',
      description: 'A comprehensive course covering HTML, CSS, JavaScript and modern frameworks.',
      teacherName: 'Jessica Williams',
      topic: 'Web Development',
      progress: 30
    },
    {
      id: 5,
      slug: "cybersecurity",
      image: '/events/cybersecurity.jpg',
      title: 'Cybersecurity Essentials',
      description: 'Learn how to protect systems and networks from digital attacks in this hands-on course.',
      teacherName: 'Robert Taylor',
      topic: 'Cybersecurity',
      progress: 60
    },
    {
      id: 6,
      slug: "blockchain",
      image: '/events/blockchain.jpg',
      title: 'Blockchain Technology',
      description: 'Discover how blockchain works and its applications beyond cryptocurrency.',
      teacherName: 'Emma Davis',
      topic: 'Blockchain',
      progress: 15
    }
  ];

  // Function to determine progress color based on completion percentage
  const getProgressColor = (progress) => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <section className="py-24 max-w-[1920px] overflow-hidden mx-auto">
      <div className="container mx-auto px-4">
        {/* Header with decorative elements */}
        <div className="relative mb-16">
          <div className="text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase">Ongoing Lessons</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our interactive courses and advance your career with Ophyrs' gamified learning experience
            </p>
          </div>
          {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 border-2 border-primary-600 rounded-full -z-10 opacity-20"></div> */}
          {/* <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-primary-600"></div> */}
        </div>

        {/* Featured course - larger highlight */}
        <div className="mb-16">
          <div className="bg-white shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <img 
                  src="/events/featured-course.jpg" 
                  alt="Featured Course" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white py-1 px-3 uppercase text-xs font-bold">
                  Featured
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="bg-primary-600 text-black text-xs uppercase font-bold px-3 py-1">
                    Advanced Course
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Machine Learning Specialization</h3>
                <p className="text-gray-600 mb-6">
                  Master the essentials of machine learning and deploy models to solve real-world problems. This comprehensive course covers algorithms, neural networks, and practical applications.
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">A</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium">Dr. Andrew Wilson</span>
                    <span className="block text-xs text-gray-500">AI Research Director</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2.5">
                    <div className="h-2.5 bg-yellow-500" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div className="inline-block group relative">
                  <button className="relative z-10 px-8 py-3 bg-white border border-primary-600 text-black uppercase font-medium transition-all duration-300 group-hover:px-10">
                    Continue Course
                    <span className="absolute h-[2px] w-0 bg-primary-600 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  <div className="absolute top-0 left-0 w-full h-full bg-primary-600 transform translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.slice(0, 6).map((event) => (
            <div key={event.id} className="bg-white overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
                  }}
                />
                <div className="absolute top-0 right-0 bg-white py-1 px-3 text-sm uppercase font-bold rounded-bl-md">
                  {event.topic}
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-100">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-5 line-clamp-2">{event.description}</p>
                
                <div className="flex items-center mb-5">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">{event.teacherName.charAt(0)}</span>
                  </div>
                  <span className="text-sm text-gray-700">{event.teacherName}</span>
                </div>
                
                {/* Progress indicator */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-medium">{event.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5">
                    <div 
                      className={`h-1.5 ${getProgressColor(event.progress)}`} 
                      style={{ width: `${event.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <Link to={`/course/${event.slug}`} className="w-full py-2 px-4 border border-primary-600 text-black uppercase text-sm font-medium hover:bg-primary-50 transition duration-300">
                  Continue Learning
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block group relative">
            <button className="relative z-10 px-8 py-3 bg-white border border-primary-600 text-black uppercase font-medium transition-all duration-300 group-hover:px-10">
              View All Courses
              <span className="absolute h-[2px] w-0 bg-primary-600 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div className="absolute top-0 left-0 w-full h-full bg-primary-600 transform translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
