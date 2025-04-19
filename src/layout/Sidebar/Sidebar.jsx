import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { motion } from "framer-motion";
import "./Sidebar.css";
import {
  FileEdit,
  Home,
  Settings,
  BookOpen,
  Users,
  GraduationCap,
  Layout,
  BarChart2
} from "lucide-react";

const Sidebar = ({ isMobileOpen, setIsMobileOpen, menuButtonRef }) => {
  const mobileSidebarRef = useRef(null);
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  const handleClickOutside = useCallback(
    (event) => {
      if (
        mobileSidebarRef.current &&
        !mobileSidebarRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMobileOpen(false);
      }
    },
    [setIsMobileOpen, menuButtonRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const SIDEBARITEMS = [
    {
      id: 1,
      title: "Dashboard",
      icon: <Layout size={20} />,
      path: "/teacher/dashboard",
    },
    {
      id: 2,
      title: "Courses",
      icon: <BookOpen size={20} />,
      path: "/teacher/dashboard/courses",
    },
    {
      id: 3,
      title: "Students",
      icon: <Users size={20} />,
      path: "/teacher/dashboard/students",
    },
    {
      id: 4,
      title: "Analytics",
      icon: <BarChart2 size={20} />,
      path: "/teacher/dashboard/analytics",
    },
    {
      id: 5,
      title: "Materials",
      icon: <FileEdit size={20} />,
      path: "/teacher/dashboard/materials",
    },
  ];

  return (
    <>
      <div className="sidebar md:min-w-64 sm:min-w-52 sm:flex hidden relative">
        <div className="sidebar-inner w-full">
          <button 
            title="Home" 
            className="home-button" 
            onClick={() => navigate("/")}
          >
            <Home size={22} />
          </button>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="profile-container"
          >
            <div className="profile-image">
              <FaUser className="profile-icon" />
            </div>
            <h3 className="profile-title">Teacher Dashboard</h3>
          </motion.div>

          <nav className="sidebar-nav">
            {SIDEBARITEMS.map((item) => (
              <NavLink
                key={item.id}
                className={({ isActive }) => `sidebar-link border ${isActive ? 'active' : ''}`}
                to={item.path}
                end
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            ))}
          </nav>

          <motion.div
            className="logout-container"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="logout-button">
              <BiLogOut />
              <span>Log Out</span>
            </button>
          </motion.div>
        </div>
      </div>

      <div
        ref={mobileSidebarRef}
        className={`mobile-sidebar ${isMobileOpen ? "open" : ""}`}
      >
        <div className="mobile-header">
          <button className="settings-button" onClick={() => setShowSettings(true)}>
            <Settings size={22} />
          </button>
          <button title="Home" className="home-button" onClick={() => navigate("/")}>
            <Home size={22} />
          </button>
        </div>
        
        <div className="mobile-profile">
          <div className="profile-image">
            <FaUser className="profile-icon" />
          </div>
          <h3 className="profile-title">Teacher Dashboard</h3>
        </div>
        
        <nav className="mobile-nav">
          {SIDEBARITEMS.map((item) => (
            <NavLink
              key={item.id}
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              end
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

        <motion.div
          className="mobile-logout"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button className="logout-button">
            <BiLogOut />
            <span>Log Out</span>
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
