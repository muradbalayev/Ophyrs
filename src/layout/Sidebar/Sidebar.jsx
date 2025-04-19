import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiBriefcase, BiLogOut, BiSolidShoppingBag } from "react-icons/bi";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Sidebar.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import {
  Eye,
  EyeOff,
  FileEdit,
  Home,
  LucideFileSpreadsheet,
  Settings,
  X,
} from "lucide-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Sidebar = ({ isMobileOpen, setIsMobileOpen, menuButtonRef }) => {
  const mobileSidebarRef = useRef(null);
  const navigate = useNavigate();

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    repeat: false,
  });

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
      title: "Courses",
      icon: <FileEdit size={20} />,
      path: "/teacher/dashboard",
    },
    // {
    //   id: 2,
    //   title: "Graduates",
    //   icon: <FaUserGraduate size={20} />,
    //   path: "/teacher/dashboard/graduates",
    // },
    // {
    //   id: 3,
    //   title: "Courses",
    //   icon: <FileEdit size={20} />,
    //   path: "/teacher/dashboard",
    // },
  ];

  return (
    <>
      <div className="sidebar md:min-w-52 sm:min-w-40 sm:flex hidden relative bg-gray-900">
        <button title="Home" className="z-10" onClick={() => navigate("/")}>
          <Home
            size={25}
            className="text-gray-300 absolute top-3 left-3 transition-opacity"
          />
        </button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center py-6"
        >
          <div
            onClick={() => setShowChangePassword(true)}
            className="p-3 cursor-pointer bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl mb-3"
          >
            <FaUser className="text-white text-4xl" />
          </div>
          <h3 className="text-sm font-semibold text-white">Admin Panel</h3>
        </motion.div>
        <nav className="links z-0 overflow-auto mb-4 px-3">
          {SIDEBARITEMS.map((item) => (
            <NavLink
              key={item.id}
              className={({ isActive }) => `
                flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all
                text-sm font-medium
                ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }
              `}
              to={item.path}
              end
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

        <motion.div
          className="px-3 pb-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            // onClick={logout}
            className="w-full flex items-center justify-center p-3 rounded-xl
          bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
          >
            <BiLogOut className="mr-2 text-lg" />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </motion.div>
      </div>

      <div
        ref={mobileSidebarRef}
        className={`mobile-sidebar bg-gray-900 w-[80%] z-10 sm:hidden fixed ${
          isMobileOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="w-full flex flex-col gap-3 items-center justify-start mt-6">
          <button className="z-10" onClick={() => setShowSettings(true)}>
            <Settings
              size={25}
              className="text-gray-300 absolute top-3 right-3 transition-opacity"
            />
          </button>
          <button title="Home" className="z-10" onClick={() => navigate("/")}>
            <Home
              size={25}
              className="text-gray-300 absolute top-3 left-3 transition-opacity"
            />
          </button>
          <div className="profile-img flex bg-gray-800 rounded-full transition duration-300 sm:p-5 p-3">
            <FaUser className="text-gray-300" size={50} />
          </div>
          <h3 className="text-sm text-white text-center">Admin Panel</h3>
        </div>
        <nav className="links w-full mt-10 overflow-auto mb-4 px-3">
          {SIDEBARITEMS.map((item) => (
            <NavLink
              key={item.id}
              className={({ isActive }) => `
                flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all
                text-sm font-medium
                ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }
              `}
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
          className="px-3 py-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        ></motion.div>
      </div>
    </>
  );
};

export default Sidebar;
