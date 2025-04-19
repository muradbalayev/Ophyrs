import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Transition from "../components/Transition";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { supabase } from "../supabase-client";

const TeacherAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
    isRemember: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, fullName } = formData;

    if (isLogin) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert("Login failed: " + error.message);
        return;
      }

      if (!data.session?.user.email_confirmed_at) {
        alert("Please verify your email before logging in.");
        return;
      }

      console.log("Login success:", data);
      navigate("/teacher/dashboard");
    } else {
      if (password !== formData.repeatPassword) {
        alert("Passwords don't match!");
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            fullName,
          },
        },
      });

      if (error) {
        alert("Signup failed: " + error.message);
        return;
      }

      alert("Check your email to verify your account.");
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-100 rounded-full opacity-50 blur-3xl"></div>

        <div className="relative z-10">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900 uppercase">
              {isLogin ? "Sign in to your account" : "Create new account"}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="cursor-pointer font-medium underline text-primary-600 hover:text-primary-500 transition-colors"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b-2 border-gray-300 py-2 focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="Murad Balazada"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b-2 border-gray-300 py-2 focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b-2 border-gray-300 py-2 focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Repeat Password
                  </label>
                  <input
                    name="repeatPassword"
                    type="password"
                    required
                    value={formData.repeatPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b-2 border-gray-300 py-2 focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="isRemember"
                    name="isRemember"
                    type="checkbox"
                    checked={formData.isRemember}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="isRemember"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block group relative w-full">
                <button
                  type="submit"
                  className="cursor-pointer relative z-10 w-full px-8 py-3 bg-white hover:bg-black hover:text-white border border-black hover:border-2 transition-all duration-300 group-hover:px-10 text-center"
                >
                  {isLogin ? "Sign in" : "Sign up"}
                  <span className="absolute h-[2px] w-0 bg-primary-600 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <div className="absolute top-0 left-0 w-full h-full bg-primary-600 transform translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const TransitionedTeacherAuth = Transition(TeacherAuth);
export default TransitionedTeacherAuth;
