import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaTrophy,
  FaArrowRight,
  FaRedo,
} from "react-icons/fa";
import Transition from "../../components/Transition";
import { quizData, categories } from "../../data/quizData";

function QuizComponent() {
  // State variables for quiz functionality

  // State
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuizzes, setCurrentQuizzes] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userData, setUserData] = useState(null);
  const [quizHistory, setQuizHistory] = useState([]);

  // Load user data from localStorage
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    const storedQuizHistory = localStorage.getItem("quizHistory");
    if (storedQuizHistory) {
      setQuizHistory(JSON.parse(storedQuizHistory));
    }
  }, []);

  // Save quiz history to localStorage
  useEffect(() => {
    if (quizHistory.length > 0) {
      localStorage.setItem("quizHistory", JSON.stringify(quizHistory));
    }
  }, [quizHistory]);

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentQuizzes(quizData[categoryId]);
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
  };

  // Handle option selection
  const handleOptionSelect = (optionIndex) => {
    if (isAnswered) return;

    setSelectedOption(optionIndex);
    setIsAnswered(true);

    const currentQuiz = currentQuizzes[currentQuizIndex];
    if (optionIndex === currentQuiz.correctAnswer) {
      setScore(score + currentQuiz.points);
    }
  };

  // Handle next question
  const handleNextQuestion = () => {
    if (currentQuizIndex < currentQuizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Quiz completed
      setQuizCompleted(true);

      // Save quiz result to history
      const newQuizResult = {
        id: Date.now(),
        category: selectedCategory,
        categoryName: categories.find((cat) => cat.id === selectedCategory)
          ?.name,
        score,
        totalQuestions: currentQuizzes.length,
        date: new Date().toISOString(),
      };

      setQuizHistory([newQuizResult, ...quizHistory]);

      // Update user data - add points and update task progress
      if (userData) {
        const updatedUserData = {
          ...userData,
          points: userData.points + score,
          tasks: userData.tasks.map((task) => {
            if (task.id === 1 && task.progress < task.total) {
              const newProgress = Math.min(task.progress + 1, task.total);
              return {
                ...task,
                progress: newProgress,
                completed: newProgress >= task.total,
              };
            }
            return task;
          }),
        };

        // Update points task
        const pointsEarnedTask = updatedUserData.tasks.find(
          (task) => task.id === 3
        ); // Earn points task
        if (pointsEarnedTask) {
          const totalPointsEarned = Math.min(
            updatedUserData.points,
            pointsEarnedTask.total
          );
          const updatedTasks = updatedUserData.tasks.map((task) => {
            if (task.id === 3) {
              return {
                ...task,
                progress: totalPointsEarned,
                completed: totalPointsEarned >= task.total,
              };
            }
            return task;
          });
          updatedUserData.tasks = updatedTasks;
        }

        localStorage.setItem("userData", JSON.stringify(updatedUserData));
        setUserData(updatedUserData);
      }
    }
  };

  // Reset quiz
  const handleResetQuiz = () => {
    setSelectedCategory(null);
    setCurrentQuizzes([]);
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
  };

  // Get current quiz
  const currentQuiz = currentQuizzes[currentQuizIndex];

  return (
    <div className="page min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-blue-600 rounded-xl shadow-md p-6 mb-8 text-white">
          <h1 className="text-2xl font-bold mb-2">Knowledge Quizzes</h1>
          <p className="opacity-90">Test your knowledge and earn points</p>
        </div>

        {!selectedCategory ? (
          <>
            {/* Category selection */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Select a Category
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="bg-white border-2 border-blue-100 hover:border-blue-300 rounded-xl p-4 transition-all duration-300 flex flex-col items-center"
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    <span className="text-4xl mb-2">{category.icon}</span>
                    <span className="font-medium text-gray-800">
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-500 mt-1">
                      {quizData[category.id].length} questions
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quiz history */}
            {quizHistory.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Recent Quiz Results
                </h2>

                <div className="divide-y divide-gray-200">
                  {quizHistory.slice(0, 5).map((result) => (
                    <div
                      key={result.id}
                      className="py-4 flex justify-between items-center"
                    >
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {result.categoryName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(result.date).toLocaleDateString()} •{" "}
                          {result.totalQuestions} questions
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600">
                          {result.score} points
                        </p>
                        <p className="text-sm text-gray-500">
                          {Math.round(
                            (result.score / (result.totalQuestions * 10)) * 100
                          )}
                          % correct
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : quizCompleted ? (
          // Quiz results
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FaTrophy className="text-blue-600 text-3xl" />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Quiz Completed!
            </h2>
            <p className="text-gray-600 mb-6">
              You scored {score} out of{" "}
              {currentQuizzes.reduce((total, quiz) => total + quiz.points, 0)}{" "}
              points
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-8">
              <p className="font-medium text-blue-800">
                {score >=
                currentQuizzes.reduce((total, quiz) => total + quiz.points, 0) *
                  0.8
                  ? "Excellent! You're a master of this subject!"
                  : score >=
                    currentQuizzes.reduce(
                      (total, quiz) => total + quiz.points,
                      0
                    ) *
                      0.6
                  ? "Great job! You have a good understanding of this topic."
                  : "Good effort! Keep learning to improve your score."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                onClick={handleResetQuiz}
              >
                <FaRedo className="mr-2" /> Try Another Category
              </button>
              <button
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                onClick={() => handleCategorySelect(selectedCategory)}
              >
                <FaRedo className="mr-2" /> Retry This Quiz
              </button>
            </div>
          </div>
        ) : (
          // Quiz questions
          <div className="bg-white rounded-xl shadow-md p-6">
            {/* Progress indicator */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>
                  Question {currentQuizIndex + 1} of {currentQuizzes.length}
                </span>
                <span>Score: {score}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{
                    width: `${
                      (currentQuizIndex / currentQuizzes.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {currentQuiz.question}
              </h2>
              <p className="text-sm text-gray-500">
                {currentQuiz.points} points
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {currentQuiz.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    isAnswered
                      ? index === currentQuiz.correctAnswer
                        ? "bg-green-50 border-green-500"
                        : index === selectedOption
                        ? "bg-red-50 border-red-500"
                        : "border-gray-200"
                      : selectedOption === index
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isAnswered &&
                      (index === currentQuiz.correctAnswer ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : index === selectedOption ? (
                        <FaTimesCircle className="text-red-500" />
                      ) : null)}
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <div></div> {/* Empty div for spacing */}
              <button
                className={`px-6 py-3 rounded-lg flex items-center ${
                  isAnswered
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                onClick={handleNextQuestion}
                disabled={!isAnswered}
              >
                {currentQuizIndex < currentQuizzes.length - 1
                  ? "Next Question"
                  : "Finish Quiz"}{" "}
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Named export for better Fast Refresh support
const Quiz = Transition(QuizComponent);
export default Quiz;
