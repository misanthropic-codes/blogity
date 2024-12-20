"use client";

import React from "react";
import Link from "next/link";
import { Button as AuthButton } from "@/app/auth/Button";
import { SessionProvider } from "next-auth/react";

type Props = {};

const Header = (props: Props) => {
  return (
    <SessionProvider>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-black border-b border-white/10 relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.05),transparent_50%)]" />
            <div className="absolute w-full h-px bottom-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <Link
                href="/"
                className="text-2xl sm:text-4xl font-bold text-white relative group"
              >
                <span className="relative">
                  Blogity
                  <div className="absolute -inset-1 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </span>
              </Link>

              <div className="relative group">
                <div className="absolute -inset-2 rounded-full blur-sm bg-gradient-to-r from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative backdrop-blur-md bg-white/5 rounded-full p-1 border border-white/10">
                  <AuthButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 sm:h-20" />
    </SessionProvider>
  );
};

export default Header;
