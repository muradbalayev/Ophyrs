import React, { useState, useEffect } from 'react';
import { FaPlay, FaCheck, FaClock, FaAward } from 'react-icons/fa';
import Transition from '../../components/Transition';

const WatchVideosComponent = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      description: 'Learn the fundamentals of machine learning and how it is transforming industries.',
      duration: '12:45',
      thumbnail: '/events/ai.jpg',
      category: 'Technology',
      points: 30,
      watched: false,
      url: 'https://www.youtube.com/embed/ukzFI9rgwfU'
    },
    {
      id: 2,
      title: 'The Science of Learning',
      description: 'Discover how our brains process information and the most effective study techniques.',
      duration: '15:20',
      thumbnail: '/events/data-science.jpg',
      category: 'Education',
      points: 30,
      watched: false,
      url: 'https://www.youtube.com/embed/V-UvSKe8jW4'
    },
    {
      id: 3,
      title: 'Python for Beginners',
      description: 'Start your programming journey with this beginner-friendly Python tutorial.',
      duration: '18:30',
      thumbnail: '/events/python.jpg',
      category: 'Programming',
      points: 30,
      watched: false,
      url: 'https://www.youtube.com/embed/kqtD5dpn9C8'
    },
    {
      id: 4,
      title: 'Web Development Essentials',
      description: 'Learn the core technologies that power the modern web.',
      duration: '14:15',
      thumbnail: '/events/web-dev.jpg',
      category: 'Programming',
      points: 30,
      watched: false,
      url: 'https://www.youtube.com/embed/gQojMIhELvM'
    },
    {
      id: 5,
      title: 'Cybersecurity Fundamentals',
      description: 'Understand the basics of protecting digital systems and networks.',
      duration: '16:50',
      thumbnail: '/events/cybersecurity.jpg',
      category: 'Technology',
      points: 30,
      watched: false,
      url: 'https://www.youtube.com/embed/inWWhr5tnEA'
    },
    {
      id: 6,
      title: 'Blockchain Technology Explained',
      description: 'A comprehensive overview of blockchain and its applications beyond cryptocurrency.',
      duration: '20:10',
      thumbnail: '/events/blockchain.jpg',
      category: 'Technology',
      points: 30,
      watched: false,
      url: 'https://www.youtube.com/embed/SSo_EIwHSd4'
    },
  ]);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [userData, setUserData] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'unwatched', 'watched'

  // Load user data and video watch status from localStorage
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    const storedVideos = localStorage.getItem('watchedVideos');
    if (storedVideos) {
      setVideos(JSON.parse(storedVideos));
    }
  }, []);

  // Save video watch status to localStorage
  useEffect(() => {
    localStorage.setItem('watchedVideos', JSON.stringify(videos));
  }, [videos]);

  // Handle video selection
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  // Handle video completion
  const handleVideoComplete = () => {
    if (!selectedVideo || selectedVideo.watched) return;

    // Update video watched status
    const updatedVideos = videos.map(video => {
      if (video.id === selectedVideo.id) {
        return { ...video, watched: true };
      }
      return video;
    });
    setVideos(updatedVideos);
    setSelectedVideo({ ...selectedVideo, watched: true });

    // Update user data - add points and update task progress
    if (userData) {
      const watchVideoTask = userData.tasks.find(task => task.id === 2); // Watch video task
      
      const updatedUserData = {
        ...userData,
        points: userData.points + selectedVideo.points,
        tasks: userData.tasks.map(task => {
          if (task.id === 2 && task.progress < task.total) {
            const newProgress = task.progress + 1;
            return { 
              ...task, 
              progress: newProgress,
              completed: newProgress >= task.total
            };
          }
          return task;
        })
      };
      
      // Update points task
      const pointsEarnedTask = updatedUserData.tasks.find(task => task.id === 3); // Earn points task
      if (pointsEarnedTask) {
        const totalPointsEarned = Math.min(updatedUserData.points, pointsEarnedTask.total);
        const updatedTasks = updatedUserData.tasks.map(task => {
          if (task.id === 3) {
            return { 
              ...task, 
              progress: totalPointsEarned,
              completed: totalPointsEarned >= task.total
            };
          }
          return task;
        });
        updatedUserData.tasks = updatedTasks;
      }
      
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
      setUserData(updatedUserData);
    }
  };

  // Filter videos based on selected filter
  const filteredVideos = videos.filter(video => {
    if (filter === 'all') return true;
    if (filter === 'unwatched') return !video.watched;
    if (filter === 'watched') return video.watched;
    return true;
  });

  // Calculate watched videos count
  const watchedCount = videos.filter(video => video.watched).length;
  const totalVideos = videos.length;

  return (
    <div className="page min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-purple-600 rounded-xl shadow-md p-6 mb-8 text-white">
          <h1 className="text-2xl font-bold mb-2">Educational Videos</h1>
          <p className="opacity-90 mb-4">Watch videos to learn and earn points</p>
          
          {userData && (
            <div className="flex flex-col sm:flex-row justify-between items-center bg-purple-700 rounded-lg p-4">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="bg-purple-500 rounded-full p-3 mr-4">
                  <FaPlay className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-medium">Videos Watched</p>
                  <p className="text-2xl font-bold">{watchedCount}/{totalVideos}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-500 rounded-full p-3 mr-4">
                  <FaAward className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-medium">Points Earned</p>
                  <p className="text-2xl font-bold">{watchedCount * 30}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Video list */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">Video Library</h2>
                  
                  <div className="flex">
                    {['all', 'unwatched', 'watched'].map((option) => (
                      <button
                        key={option}
                        className={`px-3 py-1 text-sm rounded-full mr-2 ${filter === option ? 'bg-purple-100 text-purple-700 font-medium' : 'text-gray-500 hover:bg-gray-100'}`}
                        onClick={() => setFilter(option)}
                      >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                {filteredVideos.map((video) => (
                  <div 
                    key={video.id} 
                    className={`p-4 hover:bg-gray-50 cursor-pointer ${selectedVideo?.id === video.id ? 'bg-purple-50' : ''}`}
                    onClick={() => handleVideoSelect(video)}
                  >
                    <div className="flex">
                      <div className="flex-shrink-0 relative w-24 h-16 rounded overflow-hidden">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
                          }}
                        />
                        {video.watched && (
                          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <FaCheck className="text-white text-xl" />
                          </div>
                        )}
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-gray-900">{video.title}</h3>
                          <span className="text-xs text-gray-500 flex items-center">
                            <FaClock className="mr-1" /> {video.duration}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-1">{video.description}</p>
                        <div className="mt-1 flex justify-between items-center">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                            {video.category}
                          </span>
                          <span className="text-xs font-medium text-purple-600">
                            {video.points} points
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Video player */}
          <div className="w-full lg:w-1/2">
            {selectedVideo ? (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={selectedVideo.url} 
                    title={selectedVideo.title}
                    className="w-full h-[300px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedVideo.title}</h2>
                  <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2">
                        {selectedVideo.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <FaClock className="mr-1" /> {selectedVideo.duration}
                      </span>
                    </div>
                    
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {selectedVideo.points} points
                    </span>
                  </div>
                  
                  <div className="mt-6">
                    <button 
                      className={`w-full py-2 px-4 rounded-lg font-medium ${selectedVideo.watched ? 'bg-green-100 text-green-800' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
                      onClick={handleVideoComplete}
                      disabled={selectedVideo.watched}
                    >
                      {selectedVideo.watched ? (
                        <span className="flex items-center justify-center">
                          <FaCheck className="mr-2" /> Completed
                        </span>
                      ) : (
                        'Mark as Watched & Earn Points'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-purple-100 rounded-full p-6 mb-4">
                  <FaPlay className="text-purple-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Select a Video</h3>
                <p className="text-gray-600">Choose a video from the library to start learning</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(WatchVideosComponent);
