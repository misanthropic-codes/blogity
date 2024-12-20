import React from "react";
import { Github, Twitter } from "lucide-react"; // Import icons from Lucide
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-gray-300 py-12 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex flex-col mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-white mb-2">Blogity</h1>
            <p className="text-sm text-gray-400">
              © 2025 Blogity. All rights reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/misanthropic-codes/blogity"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10 transition hover:bg-white/10"
            >
              <Github className="text-gray-300" size={24} />
            </a>
            <a
              href="https://twitter.com/misanthropic_12"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10 transition hover:bg-white/10"
            >
              <Twitter className="text-gray-300" size={24} />
            </a>
          </div>

          {/* Built by Abhishek */}
          <div className="text-sm text-gray-400">
            <span>Built by </span>
            <Link
              href="https://www.misanthropic.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              Abhishek
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
