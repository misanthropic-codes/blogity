import React from "react";
import { PrismaClient } from "@prisma/client";
import PostCard from "./PostCard";

const prisma = new PrismaClient();

type Props = {};

const Posts = async (props: Props) => {
  const posts = await prisma.post.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Trending Articles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => (
                <div key={post.id} className="group relative">
                  <div className="absolute -inset-0.5 bg-white/5 rounded-xl blur opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative h-full">
                    <PostCard post={post} className="h-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
