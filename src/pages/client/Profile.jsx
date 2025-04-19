/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaVideo, FaBook, FaCheck, FaCalendarAlt } from 'react-icons/fa';
import Transition from '../../components/Transition';

const Profile = () => {
  // State for user data
  const [userData, setUserData] = useState({
    name: 'User',
    level: 1,
    points: 0,
    streak: 0,
    pointsToNextLevel: 100,
    tasks: [
      { id: 1, title: 'Complete 3 Tests', description: 'Take and complete at least 3 tests today', points: 50, progress: 0, total: 3, completed: false },
      { id: 2, title: 'Watch 2 Video Summaries', description: 'Watch at least 2 educational videos', points: 30, progress: 0, total: 2, completed: false },
      { id: 3, title: 'Earn 100 Points', description: 'Accumulate 100 points through learning activities', points: 20, progress: 0, total: 100, completed: false },
      { id: 4, title: 'Visit Leaderboard', description: 'Check your ranking on the leaderboard', points: 10, progress: 0, total: 1, completed: false },
    ],
  });

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      // Initialize with default data if nothing exists
      const defaultData = {
        name: 'Rzayev Niyyat',
        level: 1,
        points: 0,
        streak: 0,
        pointsToNextLevel: 100,
        tasks: [
          { id: 1, title: 'Complete 3 Tests', description: 'Take and complete at least 3 tests today', points: 50, progress: 0, total: 3, completed: false },
          { id: 2, title: 'Watch 2 Video Summaries', description: 'Watch at least 2 educational videos', points: 30, progress: 0, total: 2, completed: false },
          { id: 3, title: 'Earn 100 Points', description: 'Accumulate 100 points through learning activities', points: 20, progress: 0, total: 100, completed: false },
          { id: 4, title: 'Visit Leaderboard', description: 'Check your ranking on the leaderboard', points: 10, progress: 0, total: 1, completed: false },
        ],
      };
      localStorage.setItem('userData', JSON.stringify(defaultData));
      setUserData(defaultData);
    }
  }, []);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  // Calculate completed tasks
  const completedTasks = userData.tasks.filter(task => task.completed).length;
  const totalTasks = userData.tasks.length;

  // Function to calculate progress percentage
  const calculateProgress = (progress, total) => {
    return Math.min(100, Math.round((progress / total) * 100));
  };

  
    useEffect(() => {
      window.scroll({
        top: 0,
        behavior: 'auto'
      });
    }, []);
  

  return (
    <div className="page min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* User profile header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-24 h-24 relative">
              <div className="w-full h-full bg-black rounded-full bg-primary-600 flex items-center justify-center text-white text-2xl font-bold">
                {userData.name.charAt(0)}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                {userData.level}
              </div>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <p className="text-2xl font-bold text-gray-800">{userData.name}</p>
                <p className="text-2xl font-bold text-gray-800">Welcome back!</p>
                <div className="flex items-center justify-center sm:justify-start">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <FaCalendarAlt className="mr-1" /> {userData.streak} day streak
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Level {userData.level}</span>
                  <span className="text-sm font-medium">{userData.points} points to level {userData.level + 1}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${calculateProgress(userData.points, userData.pointsToNextLevel)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick action cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/quiz" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md p-6 transition-all duration-300 flex flex-col items-center text-center">
            <FaBook className="text-4xl mb-4" />
            <h2 className="text-xl font-bold mb-2">Take a Quiz</h2>
            <p className="text-sm opacity-90">Earn points and badges</p>
          </Link>
          
          <Link to="/watch-videos" className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md p-6 transition-all duration-300 flex flex-col items-center text-center">
            <FaVideo className="text-4xl mb-4" />
            <h2 className="text-xl font-bold mb-2">Watch Videos</h2>
            <p className="text-sm opacity-90">Learn and earn rewards</p>
          </Link>
          
          <Link to="/leaderboard" className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md p-6 transition-all duration-300 flex flex-col items-center text-center">
            <FaTrophy className="text-4xl mb-4" />
            <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
            <p className="text-sm opacity-90">See how you rank</p>
          </Link>
        </div>

        {/* Daily tasks section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Daily Tasks</h2>
            <span className="text-sm font-medium text-gray-500">{completedTasks}/{totalTasks} completed</span>
          </div>
          
          <div className="space-y-6">
            {userData.tasks.map((task) => (
              <div key={task.id} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-gray-800">{task.title}</h3>
                    <p className="text-sm text-gray-500">{task.description}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {task.points} points
                  </span>
                </div>
                
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{task.progress}/{task.total}</span>
                    {task.completed && <span className="text-green-500 flex items-center"><FaCheck className="mr-1" /> Completed</span>}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full ${task.completed ? 'bg-green-500' : 'bg-blue-500'}`}
                      style={{ width: `${calculateProgress(task.progress, task.total)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TransitionedProfile = Transition(Profile);

export default TransitionedProfile;
