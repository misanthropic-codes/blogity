"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

type Props = {};

export const Button = (props: Props) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="bg-white/80 rounded-lg p-4 text-gray-600">Loading...</div>
    );
  }

  if (session) {
    return (
      <div className="flex items-stretch gap-4">
        <Link href="/blog/new" className="relative overflow-hidden group">
          <div className="relative flex items-center bg-white/80 rounded-lg px-5 py-2.5 text-gray-700">
            ✍️ Write a Post
          </div>
          <div className="absolute inset-[-1px] bg-[linear-gradient(to_right,transparent,white,transparent)] opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500" />
        </Link>

        <button
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
          className="relative overflow-hidden group"
        >
          <div className="relative bg-white/80 rounded-lg px-5 py-2.5 text-gray-700">
            Sign Out
          </div>
          <div className="absolute inset-[-1px] bg-[linear-gradient(to_right,transparent,white,transparent)] opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500" />
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn()} className="relative overflow-hidden group">
      <div className="relative bg-white/80 rounded-lg px-5 py-2.5 text-gray-700">
        Sign In
      </div>
      <div className="absolute inset-[-1px] bg-[linear-gradient(to_right,transparent,white,transparent)] opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500" />
    </button>
  );
};
