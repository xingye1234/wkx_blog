"use client";
import React from "react";
import { Card as Cards, Typography } from "@douyinfe/semi-ui";

export default function Card({
  title,
  link,
  content,
}: {
  title: string;
  link: string;
  content: any[];
}) {
  const { Text } = Typography;

  return (
    <Cards title={title} headerExtraContent={<Text link>{link}</Text>}>
      {content.map((_, index) => (
        <li
          draggable
          className="text-2xl px-2 py-2  transition-all rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-md border-soild border-gray-300 border"
          key={_.id}
        >
          <p>{_.title}</p>
        </li>
      ))}
    </Cards>
  );
}
