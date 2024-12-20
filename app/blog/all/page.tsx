import React from "react";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import AllPosts from "./AllPosts";

const page = async () => {
  type PostWithCategories = Prisma.PostGetPayload<{
    include: { categories: true };
  }>;

  const posts: PostWithCategories[] = await prisma.post.findMany({
    include: {
      categories: true,
    },
  });

  const categories = await prisma.category.findMany();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-8">All Articles</h2>
        <AllPosts categories={categories} posts={posts} />
      </div>
    </div>
  );
};

export default page;
