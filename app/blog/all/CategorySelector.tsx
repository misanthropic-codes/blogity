import React from "react";
import type { Category } from "@prisma/client";

export type CategorySelectorProps = {
  categories: Category[];
};

type CategorySelectorPropsWithState = CategorySelectorProps & {
  selectCategory: (id: number | null) => void;
  selectedCategoryId: number | null;
};

export const CategorySelector = (props: CategorySelectorPropsWithState) => {
  const bgClasses = ["bg-pink-500", "bg-blue-500", "bg-yellow-500"];

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4 mb-6">
      {props.categories.map((category, index) => (
        <button
          key={category.id}
          onClick={() => props.selectCategory(category.id)}
          className={`px-4 py-2 rounded-full text-white font-medium ${
            bgClasses[index % bgClasses.length]
          } ${
            props.selectedCategoryId === category.id
              ? "shadow-md ring-2 ring-offset-2 ring-indigo-500"
              : ""
          }`}
        >
          {category.name}
        </button>
      ))}
      {props.selectedCategoryId !== null && (
        <button
          onClick={() => props.selectCategory(null)}
          className="underline text-indigo-400 mt-3"
        >
          Remove Selection
        </button>
      )}
    </div>
  );
};
