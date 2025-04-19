import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import { AnimatePresence } from "framer-motion";
import Contact from "../pages/Contact";
import AdminLayout from "../layout/AdminLayout";
import TeacherAuth from "../auth/TeacherAuth";
import Course from "../pages/client/Course";
import WatchVideos from "../pages/client/WatchVideos";
import Leaderboard from "../pages/client/Leaderboard";
import Profile from "../pages/client/Profile";
import Quiz from "../pages/client/Quiz";
import AdminCoursesPage from "../pages/admin/AdminCoursesPage";
import StudentAuth from "../auth/StudentAuth";

const RouterApp = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          element={
            <div className={``}>
              <div className="bg-[#e3e3db] min-h-screen relative">
                {/* Main content */}
                <div className="relative z-10">
                  <UserLayout />
                </div>
              </div>
            </div>
          }
        >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course/:slug" element={<Course/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/watch-videos" element={<WatchVideos/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
        </Route>

        <Route path="/teacher/auth" element={<TeacherAuth/>} />
        <Route path="/student/auth" element={<StudentAuth/>} />
        <Route path="/teacher/dashboard" element={<AdminLayout />}>
          <Route index element={<AdminCoursesPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default RouterApp;
