"use client";

import React, { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "Write an untangled blog out of your tangled mind";
  const [index, setIndex] = useState(0);

  // Typewriter Effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      className={`relative min-h-screen bg-white dark:bg-black 
                  text-gray-900 dark:text-white flex items-center justify-center
                  px-6 sm:px-10 lg:px-20 overflow-hidden transition-all duration-300`}
    >
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-blue-500 opacity-20 blur-3xl lg:w-72 lg:h-72"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 opacity-20 blur-3xl lg:w-72 lg:h-72"></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-[1200px] w-full">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight 
                        bg-clip-text text-transparent bg-gradient-to-r 
                        from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 
                        dark:shadow-purple-500/30"
          >
            Welcome to Blogity
          </h1>

          {/* Typewriter Effect */}
          <p
            className={`text-lg sm:text-xl font-medium tracking-wide 
                        text-gray-700 dark:text-gray-300 h-10 sm:h-auto`}
          >
            {text}
            <span className="animate-pulse">|</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 
                        text-white font-bold shadow-[0px_5px_0px_0px_#3B82F6] 
                        active:shadow-none active:translate-y-1 
                        transition-transform duration-200 hover:scale-105"
            >
              Get Started
            </button>
            <button
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 
                        text-white font-bold shadow-[0px_5px_0px_0px_#8B5CF6] 
                        active:shadow-none active:translate-y-1 
                        transition-transform duration-200 hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/image.svg"
            alt="Hero Illustration"
            className="w-[90%] max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] 
                       transform hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
