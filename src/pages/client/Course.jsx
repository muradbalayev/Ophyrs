import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FaLock, FaCheck, FaPlay } from 'react-icons/fa';
import Transition from '../../components/Transition';
import coursesData from '../../data/coursesData';

const CourseComponent = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [currentTopicId, setCurrentTopicId] = useState(1);
  const [topics, setTopics] = useState([]);
  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  // Find the course based on the slug
  useEffect(() => {
    const foundCourse = coursesData.find(course => course.slug === slug);
    if (foundCourse) {
      setCourse(foundCourse);
      setTopics(foundCourse.topics);
    }
  }, [slug]);

  // Get the current topic
  const currentTopic = topics.find(topic => topic.id === currentTopicId);

  // Handle next topic
  const handleNextTopic = () => {
    // Mark current topic as finished
    const updatedTopics = topics.map(topic => {
      if (topic.id === currentTopicId) {
        return { ...topic, isFinished: true };
      }
      return topic;
    });
    
    setTopics(updatedTopics);
    
    // Find the next topic
    const nextTopic = topics.find(topic => topic.id > currentTopicId);
    if (nextTopic) {
      setCurrentTopicId(nextTopic.id);
    }
  };

  // Check if a topic can be accessed
  const canAccessTopic = (topicId) => {
    if (topicId === 1) return true;
    
    // Check if previous topic is finished
    const previousTopic = topics.find(topic => topic.id === topicId - 1);
    return previousTopic?.isFinished;
  };

  // Handle topic selection
  const handleTopicSelect = (topicId) => {
    if (canAccessTopic(topicId)) {
      setCurrentTopicId(topicId);
    }
  };

  if (!course) {
    return <div className="flex items-center justify-center h-screen">Loading course...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-20 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Course Header */}
          <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 h-full flex flex-col justify-center px-8 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h1>
              <p className="text-lg md:text-xl opacity-90">{course.description}</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Sidebar with topics */}
            <div className="w-full md:w-1/4 bg-gray-100 p-4">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Course Content</h2>
              <ul className="space-y-2">
                {topics.map((topic) => (
                  <li 
                    key={topic.id} 
                    className={`
                      p-3 rounded-lg cursor-pointer transition-all duration-300
                      ${currentTopicId === topic.id ? 'bg-blue-100 border-l-4 border-blue-500' : 'hover:bg-gray-200'}
                      ${!canAccessTopic(topic.id) ? 'opacity-70' : ''}
                    `}
                    onClick={() => handleTopicSelect(topic.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{topic.name}</span>
                      </div>
                      <div>
                        {topic.isFinished ? (
                          <span className="text-green-500"><FaCheck /></span>
                        ) : !canAccessTopic(topic.id) ? (
                          <span className="text-gray-500"><FaLock /></span>
                        ) : (
                          <span className="text-blue-500"><FaPlay size={12} /></span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Main content area */}
            <div className="w-full md:w-3/4 p-6">
              {currentTopic && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentTopic.name}</h2>
                    <div className="prose max-w-none">
                      <p className="text-gray-700">{currentTopic.content}</p>
                    </div>
                  </div>
                  
                  {/* Video section */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Video Lesson</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                      <iframe 
                        src={currentTopic.url} 
                        title={currentTopic.name}
                        className="w-full h-[400px] rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  
                  {/* Navigation buttons */}
                  <div className="flex justify-between mt-8">
  {currentTopicId !== 1 && (
    <button 
      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
      onClick={() => {
        const prevTopic = topics.find(topic => topic.id === currentTopicId - 1);
        if (prevTopic) setCurrentTopicId(prevTopic.id);
      }}
    >
      Previous
    </button>
  )}
  <button 
    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    onClick={handleNextTopic}
  >
    {currentTopicId === topics.length ? 'Finish Course' : 'Mark as Complete & Continue'}
  </button>
</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transition(CourseComponent)
