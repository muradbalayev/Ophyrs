import React, { useState, useEffect } from 'react';
import { FaCrown, FaMedal, FaTrophy } from 'react-icons/fa';
import Transition from '../../components/Transition';

const LeaderboardComponent = () => {
  // Sample leaderboard data
  const [leaderboardData, setLeaderboardData] = useState([
    { id: 1, name: 'Alex Johnson', points: 2130, level: 8, avatar: 'AJ' },
    { id: 2, name: 'Maria Garcia', points: 1950, level: 7, avatar: 'MG' },
    { id: 3, name: 'David Kim', points: 1840, level: 7, avatar: 'DK' },
    { id: 4, name: 'Sarah Williams', points: 1720, level: 6, avatar: 'SW' },
    { id: 5, name: 'James Brown', points: 1650, level: 6, avatar: 'JB' },
    { id: 6, name: 'Emma Davis', points: 1520, level: 5, avatar: 'ED' },
    { id: 7, name: 'Michael Wilson', points: 1480, level: 5, avatar: 'MW' },
    { id: 8, name: 'Sophia Martinez', points: 1350, level: 4, avatar: 'SM' },
    { id: 9, name: 'Daniel Lee', points: 1200, level: 4, avatar: 'DL' },
    { id: 10, name: 'Olivia Taylor', points: 1100, level: 3, avatar: 'OT' },
  ]);

  const [userData, setUserData] = useState(null);
  const [userRank, setUserRank] = useState(null);
  const [timeframe, setTimeframe] = useState('weekly'); // 'weekly', 'monthly', 'allTime'

  // Load user data from localStorage
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
      
      // Mark the "Visit Leaderboard" task as completed
      const updatedUserData = {
        ...parsedUserData,
        tasks: parsedUserData.tasks.map(task => {
          if (task.id === 4) { // Visit Leaderboard task
            return { ...task, progress: 1, completed: true };
          }
          return task;
        })
      };
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
      
      // Calculate user's rank
      const userPoints = parsedUserData.points;
      const rank = leaderboardData.findIndex(user => userPoints > user.points) + 1;
      setUserRank(rank > 0 ? rank : leaderboardData.length + 1);
    }
  }, []);

  // Get medal icon based on rank
  const getMedalIcon = (index) => {
    switch (index) {
      case 0:
        return <FaCrown className="text-yellow-400 text-xl" />;
      case 1:
        return <FaMedal className="text-gray-400 text-xl" />;
      case 2:
        return <FaMedal className="text-amber-700 text-xl" />;
      default:
        return <span className="font-bold text-gray-500">{index + 1}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">Leaderboard</h1>
            <p className="opacity-90">See how you rank against other learners</p>
            
            {userData && (
              <div className="mt-4 bg-indigo-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                      {userData.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">Your Rank: #{userRank}</p>
                      <p className="text-sm opacity-80">{userData.points} points</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Level {userData.level}</p>
                    <p className="text-sm opacity-80">{userData.pointsToNextLevel - userData.points} points to next level</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Timeframe selector */}
          <div className="border-b">
            <div className="flex">
              {['weekly', 'monthly', 'allTime'].map((period) => (
                <button
                  key={period}
                  className={`px-4 py-3 font-medium text-sm flex-1 text-center ${timeframe === period ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setTimeframe(period)}
                >
                  {period === 'weekly' ? 'This Week' : period === 'monthly' ? 'This Month' : 'All Time'}
                </button>
              ))}
            </div>
          </div>
          
          {/* Leaderboard list */}
          <div className="divide-y divide-gray-200">
            {leaderboardData.map((user, index) => (
              <div 
                key={user.id} 
                className={`flex items-center p-4 ${index < 3 ? 'bg-gray-50' : ''}`}
              >
                <div className="flex-shrink-0 w-10 flex items-center justify-center">
                  {getMedalIcon(index)}
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium">
                    {user.avatar}
                  </div>
                </div>
                
                <div className="ml-4 flex-1">
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">Level {user.level}</p>
                </div>
                
                <div className="flex-shrink-0 text-right">
                  <p className="font-bold text-indigo-600">{user.points.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">points</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tips section */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">How to Earn More Points</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaTrophy className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
              <span>Complete daily quizzes to earn up to 50 points per quiz</span>
            </li>
            <li className="flex items-start">
              <FaTrophy className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
              <span>Watch educational videos for 30 points each</span>
            </li>
            <li className="flex items-start">
              <FaTrophy className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
              <span>Maintain your daily streak for bonus points</span>
            </li>
            <li className="flex items-start">
              <FaTrophy className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
              <span>Complete courses to earn achievement badges and extra points</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const TransitionedLeaderboard = Transition(LeaderboardComponent);
export default TransitionedLeaderboard;
