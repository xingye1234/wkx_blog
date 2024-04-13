'use client'
import React from "react";

interface IPorps {
  title: string;
  content: string | number;
}

export default function Card({ title, content }: IPorps) {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm min-w-52 px-2 py-2 text-center">
      <div className="flex p-4">
        {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">{content}</p>
    </div>
  );
}
