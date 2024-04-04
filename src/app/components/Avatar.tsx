"use client";
import React from "react";
import { Avatar } from "@douyinfe/semi-ui";
import Image from "next/image";

export default function Avator() {
  
  return (
    <Avatar size="default">
      <Image
        src={
          `${process.env.imgPath}/img/avatar.jpg`
        }
        alt="This is a art picture"
        width={30}
        height={30}
        priority={true}
      />
    </Avatar>
  );
}
