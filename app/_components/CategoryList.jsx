import Image from "next/image";
import React from "react";

function CategoryList({ categoryLsit }) {
  return (
    <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {categoryLsit.length > 0
        ? categoryLsit.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center gap-2 bg-purple-50 p-5 rounded-lg cursor-pointer hover:scale-110 hover:transition-all ease-in-out`}
            >
              <Image
                src={category.icon.url}
                alt="icon"
                width={35}
                height={35}
              />
              <h2 className="text-primary">{category.name}</h2>
            </div>
          ))
        : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
            ></div>
          ))}
    </div>
  );
}
export default CategoryList;