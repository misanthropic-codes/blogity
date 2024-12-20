"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Button = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="bg-gray-700/80 rounded-lg p-4 text-gray-600">
        Loading...
      </div>
    );
  }

  const buttonClass =
    "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  return session ? (
    <div className="flex items-center gap-4">
      {/* Write a Post Button */}
      <Link href="/blog/new" className="group">
        <button
          className={`${buttonClass} bg-gray-800 text-gray-200 border-2 border-transparent hover:border-gray-500 hover:bg-gray-700`}
        >
          ✍️ Write a Post
        </button>
      </Link>

      {/* Sign Out Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
        className={`${buttonClass} bg-gray-800 text-gray-200 border-2 border-transparent hover:border-gray-500 hover:bg-gray-700`}
      >
        Sign Out
      </button>
    </div>
  ) : (
    <button
      onClick={() => signIn()}
      className={`${buttonClass} bg-gray-800 text-gray-200 border-2 border-transparent hover:border-gray-500 hover:bg-gray-700`}
    >
      Sign In
    </button>
  );
};
