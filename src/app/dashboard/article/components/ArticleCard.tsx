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
    <div className="mt-6">
      <Cards title={title} headerExtraContent={<Text link>{link}</Text>}>
        {content.map((_, index) => (
          <li
            draggable
            className="text-2xl px-2 py-2 hover:shadow-md transition-all rounded-lg cursor-pointer hover:-translate-y-1 border-soild border-gray-300 border"
            key={_.id}
          >
            <p>{_.title}</p>
          </li>
        ))}
      </Cards>
    </div>
  );
}
