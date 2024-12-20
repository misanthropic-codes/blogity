import React from "react";
import { prisma } from "@/lib/prisma";

const Page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      author: true,
    },
  });
  console.log(post);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="relative">
        <section className="container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
              {post ? (
                <div>
                  {/* Image */}
                  {post.imgURL && (
                    <div className="flex justify-center my-6">
                      <img
                        src={post.imgURL}
                        alt={post.title}
                        className="max-w-full rounded-xl border border-white/10"
                      />
                    </div>
                  )}
                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
                    {post.title}
                  </h1>
                  {/* Author */}
                  <div className="flex items-center mb-6">
                    <p className="text-sm text-gray-400">By</p>
                    <div
                      className="w-8 h-8 ml-3 mr-2 rounded-full bg-contain border border-white/10"
                      style={{ backgroundImage: `url(${post.author.image})` }}
                    ></div>
                    <p className="text-sm text-gray-300">{post.author.name}</p>
                  </div>
                  {/* Content */}
                  <p className="text-lg text-gray-300">{post.content}</p>
                </div>
              ) : (
                <p className="text-gray-400 text-center">
                  Post not found or loading...
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
