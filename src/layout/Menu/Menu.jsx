import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Menu.css";

import gsap from "gsap";
import { User } from "lucide-react";

const Menu = ({ isOpen, setIsOpen, isDark }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const menuColsRef = useRef([]);
  const menuOverlayRef = useRef(null);
  const menuItemsRef = useRef([]);
  const menuCloseRef = useRef(null);
  const menuFooterRef = useRef(null);
  const menuPatternRef = useRef(null);
  const menuBgRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const navigationTimeoutRef = useRef(null);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }

    navigationTimeoutRef.current = setTimeout(() => {
      gsap.set(menuColsRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });
      gsap.set(menuOverlayRef.current, {
        pointerEvents: "none",
      });
      gsap.set(
        [menuCloseRef.current, ...menuItemsRef.current, menuFooterRef.current],
        {
          opacity: 0,
        }
      );
      gsap.set(menuPatternRef.current, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      });
      gsap.set(menuBgRef.current, {
        xPercent: -10,
        opacity: 0,
      });
      setIsOpen(false);
    }, 750);

    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [location.pathname, setIsOpen]);

  const handleMenuOpen = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const timeline = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    timeline
      .to(menuColsRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        stagger: 0.125,
        ease: "power4.inOut",
      })
      .set(menuOverlayRef.current, {
        pointerEvents: "all",
      })
      .to(
        menuBgRef.current,
        {
          xPercent: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        menuPatternRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power4.inOut",
        },
        "-=2"
      )

      .to(
        [menuCloseRef.current, ...menuItemsRef.current, menuFooterRef.current],
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.075,
          ease: "power2.out",
        },
        "-=1.5"
      );

    setIsOpen(true);
  };

  const handleMenuClose = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const timeline = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    timeline
      .to(
        [menuCloseRef.current, ...menuItemsRef.current, menuFooterRef.current],
        {
          opacity: 0,
          duration: 0.5,
          stagger: 0.075,
          ease: "power2.in",
        }
      )
      .set(menuOverlayRef.current, {
        pointerEvents: "none",
      })
      .to(
        menuPatternRef.current,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          duration: 1,
          ease: "power4.inOut",
        },
        "-=0.5"
      )
      .to(
        menuBgRef.current,
        {
          xPercent: -10,
          opacity: 0,
          duration: 1.2,
          ease: "power3.in",
        },
        "-=1"
      )
      .to(
        menuColsRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.125,
          ease: "power4.inOut",
        },
        "-=0.8"
      );

    setIsOpen(false);
  };

  const handleNavigation = (to) => (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate(to);
    }, 0);
  };

  const addToRefs = (el) => {
    if (el && !menuColsRef.current.includes(el)) {
      menuColsRef.current.push(el);
    }
  };

  const addToMenuItemsRef = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  return (
    <div className={`menu ${isDark ? "dark" : ""}`}>
      <div className="menu-bar p-4">
        <div className="">
          <Link
            className={`px-4 py-2 rounded-full ${
              !isHomePage ? "text-black" : "text-white"
            }`}
            to="/"
            onClick={handleNavigation("/")}
          >
            A4TB
          </Link>
        </div>

        <div  className="flex gap-2 items-center">
          <Link to="/profile" className={`p-3 rounded-full overflow-hidden cursor-pointer ${
            !isHomePage ? " bg-black" : " bg-white"
          }`}>
            <User size={28} className={` ${
              !isHomePage ? "text-white" : "text-black"
            }`}
            />
          </Link>
          <p
            onClick={handleMenuOpen}
            className={` px-4 py-2 rounded-full ${
              !isHomePage ? "text-white bg-black" : "text-black bg-white"
            }`}
          >
            Menu
          </p>
        </div>
      </div>

      <div className="menu-overlay" ref={menuOverlayRef}>
        <div className="menu-col" ref={addToRefs}>
          <div className="menu-bg" ref={menuBgRef}>
            <img src="/menu/menu-bg-2.jpg" alt="Menu Background" />
          </div>
          {/* <div className="menu-pattern" ref={menuPatternRef}>
            <img src="/menu/menu-pattern.png" alt="" />
          </div> */}
        </div>
        <div className="menu-col" ref={addToRefs}>
          <div
            className="menu-close px-4 py-2"
            ref={menuCloseRef}
            onClick={handleMenuClose}
          >
            <p>Close</p>
          </div>

          <div className="menu-items ">
            <div className="menu-item" ref={addToMenuItemsRef}>
              <p>
                <Link to="/" onClick={handleNavigation("/")}>
                  Home
                </Link>
              </p>
            </div>
            <div className="menu-item" ref={addToMenuItemsRef}>
              <p>
                <Link to="/about" onClick={handleNavigation("/about")}>
                  About Us
                </Link>
              </p>
            </div>
            <div className="menu-item" ref={addToMenuItemsRef}>
              <p>
                <Link to="/contact" onClick={handleNavigation("/contact")}>
                  Contact
                </Link>
              </p>
            </div>
          </div>

          <div className="menu-footer" ref={menuFooterRef}>
            <p className="primary">
              Empowering Education. Inspiring Innovation.
            </p>
            <p>Building the Future of Learning with Ophyrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
