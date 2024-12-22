"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Define types for our data structures
interface Author {
  name: string | null;
  image: string | null;
}

interface Post {
  id: number;
  title: string;
  content: string;
  imgURL: string | null;
  author: Author | null;
}

// Get post ID from pathname
const getPostIdFromPath = (pathname: string): number => {
  const id = pathname.split("/").pop();
  return id ? parseInt(id) : 0;
};

export default function BlogPostPage() {
  const pathname = usePathname();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const postId = getPostIdFromPath(pathname);

        if (isNaN(postId) || postId === 0) {
          setError("Invalid post ID");
          return;
        }

        const response = await fetch(`/api/posts/${postId}`);
        if (!response.ok) {
          throw new Error("Post not found");
        }

        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load post");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [pathname]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Post not found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="relative">
        <article className="container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
              {post.imgURL && (
                <div className="flex justify-center my-6">
                  <img
                    src={post.imgURL}
                    alt={post.title}
                    className="max-w-full h-auto rounded-xl border border-white/10"
                  />
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
                {post.title}
              </h1>

              <div className="flex items-center mb-6">
                <span className="text-sm text-gray-400">By</span>
                {post.author?.image && (
                  <div
                    className="w-8 h-8 ml-3 mr-2 rounded-full bg-contain border border-white/10"
                    style={{ backgroundImage: `url(${post.author.image})` }}
                    role="img"
                    aria-label={`${post.author.name}'s profile picture`}
                  />
                )}
                <span className="text-sm text-gray-300">
                  {post.author?.name || "Unknown"}
                </span>
              </div>

              <div className="text-lg text-gray-300 prose prose-invert max-w-none">
                {post.content}
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
