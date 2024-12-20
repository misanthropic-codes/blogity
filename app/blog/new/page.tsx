import React from "react";
import NewBlogForm from "./NewBlogForm";
import { getCategories } from "@/app/utils/GetCategories";

const page = async () => {
  const categories = await getCategories();

  return (
    <div>
      <NewBlogForm blogCategories={categories} />
    </div>
  );
};

export default page;
