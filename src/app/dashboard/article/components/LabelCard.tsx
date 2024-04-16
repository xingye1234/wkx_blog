"use client";
import React from "react";
import { Card as Cards, Typography } from "@douyinfe/semi-ui";
import { IconDelete } from "@douyinfe/semi-icons";
import Dialog from "./Dialog";

export default function Card({
  title,
  link,
  content,
}: {
  title: string;
  link: string;
  content: any[];
}) {
  const handleDelLabel = (id: number) => () => {
    alert(id);
  };

  return (
    <div className="my-4">
      <Cards title={title} headerExtraContent={<Dialog title={link} />}>
      {content.map((_, index) => (
        <li
          draggable
          className="flex justify-between text-xl px-3 py-2  transition-all rounded-lg cursor-pointer hover:shadow-md border-soild border-gray-300 border"
          key={_.id}
        >
          <p>{_.title}</p>
          <IconDelete
            size="extra-large"
            className="hover:text-red-500"
            onClick={handleDelLabel(_.id)}
          />
        </li>
      ))}
    </Cards>
    </div>
  );
}
