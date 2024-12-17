"use client";

import React, { useEffect, useState } from "react";

const BlogLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" className="h-10">
    <defs>
      <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <text
      x="10"
      y="40"
      fontFamily="'Helvetica Neue', Arial, sans-serif"
      fontSize="36"
      fontWeight="900"
      fill="url(#techGradient)"
    >
      BLOGITY
    </text>
  </svg>
);

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode globally
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", String(newMode));
  };

  // Check saved dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        bg-white/80 dark:bg-gray-900/80 
        backdrop-blur-lg border-b border-gray-300/10
        shadow-lg dark:shadow-gray-800/50
        transition-all duration-300
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <BlogLogo />
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center space-x-6">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`
                p-2 rounded-full 
                shadow-[inset_0_3px_6px_rgba(255,255,255,0.5),0_4px_6px_rgba(0,0,0,0.1)] 
                ${
                  darkMode
                    ? "bg-gray-800 text-yellow-400 hover:shadow-yellow-500"
                    : "bg-gray-100 text-gray-600 hover:shadow-blue-300"
                }
                transition-all duration-300 transform hover:scale-110
                focus:outline-none focus:ring-2 focus:ring-offset-2
              `}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Write Post Button */}
            <button
              className={`
                px-5 py-2.5 rounded-lg
                font-semibold uppercase text-sm tracking-wider
                bg-gradient-to-r from-blue-500 to-blue-600 
                text-white shadow-lg shadow-blue-400/30
                hover:from-blue-600 hover:to-blue-700 hover:shadow-blue-500/40
                transition-all duration-300 ease-in-out
                transform hover:-translate-y-1 active:translate-y-0
              `}
            >
              Write
            </button>

            {/* Sign In Button */}
            <button
              className={`
                px-5 py-2.5 rounded-lg
                font-semibold uppercase text-sm tracking-wider
                bg-gradient-to-r from-purple-500 to-purple-600 
                text-white shadow-lg shadow-purple-400/30
                hover:from-purple-600 hover:to-purple-700 hover:shadow-purple-500/40
                transition-all duration-300 ease-in-out
                transform hover:-translate-y-1 active:translate-y-0
              `}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
