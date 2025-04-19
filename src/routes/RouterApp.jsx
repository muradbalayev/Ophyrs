import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import { AnimatePresence } from "framer-motion";
import Contact from "../pages/Contact";
import AdminLayout from "../layout/AdminLayout";
import AdminInstructorsPage from "../pages/admin/AdminInstructorsPage";
import TeacherAuth from "../auth/TeacherAuth";

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
        </Route>

        <Route path="/teacher/auth" element={<TeacherAuth/>} />
        <Route path="/teacher/dashboard" element={<AdminLayout />}>
          <Route index element={<AdminInstructorsPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default RouterApp;
