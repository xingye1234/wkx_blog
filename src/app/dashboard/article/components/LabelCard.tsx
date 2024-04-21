"use client";
import React, { useState, useEffect } from "react";
import { Card as Cards, Typography } from "@douyinfe/semi-ui";
import { IconDelete } from "@douyinfe/semi-icons";
import Dialog from "./Dialog";

export default function Card({ title, link }: { title: string; link: string }) {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    (async () => {
      const result = await fetch(`/api/${title}`).then((res) => res.json());
      setData(result.data);
    })();
  }, [title]);

  const handleDelLabel = (id: number) => () => {
    alert(id);
  };

  return (
    <div className="my-4">
      <Cards title={title} headerExtraContent={<Dialog title={link} inputProps={title} />}>
        {data?.map((_, index) => (
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
