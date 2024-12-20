"use client";

import React, { useState } from "react";

type SelectOption = {
  id: number;
  name: string;
};

type Props = {
  list: SelectOption[];
  selected: number | null;
  setSelected: (select: number) => void;
};

const CategoryDropdown = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const selectOption = (id: number) => {
    props.setSelected(id);
    setOpen(false);
  };

  const currSelection = props.list.find(
    (item) => item.id === props.selected
  ) || { name: "Select a category" };

  return (
    <div className="relative my-6">
      <button
        type="button"
        onClick={toggleOpen}
        className="w-full px-5 py-3 bg-gray-800 text-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-700 transition-all duration-300"
      >
        {currSelection.name}
      </button>

      {open && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
          {props.list.map((item) => (
            <div
              className="px-5 py-3 text-gray-800 hover:bg-indigo-100 cursor-pointer transition-all duration-200"
              key={item.id}
              onClick={() => selectOption(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
