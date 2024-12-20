"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button as AuthButton } from "@/app/auth/Button";
import { SessionProvider } from "next-auth/react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Detect scroll to add blur effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SessionProvider>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          isScrolled ? "bg-black bg-opacity-80 backdrop-blur-md" : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              href="/"
              className="text-2xl sm:text-4xl font-bold text-white"
            >
              Blogity
            </Link>

            <div className="relative">
              <div className="relative backdrop-blur-md bg-transparent rounded-full p-1 border-2 border-transparent">
                <AuthButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 sm:h-20" /> {/* This space pushes content below */}
    </SessionProvider>
  );
};

export default Header;
