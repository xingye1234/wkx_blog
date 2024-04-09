"use client";
import React, { useEffect } from "react";
import { Avatar } from "@douyinfe/semi-ui";
import Image from "next/image";
import Link from "next/link";

export default function Avator() {
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user === "wkx") {
      setShow(true);
    }
  });

  return (
    <Link href={show ? "/dashboard" : ""} className="animate-fade-right animate-duration-1000 animate-delay-100">
      <Avatar size="default">
        <Image
          src={`${process.env.imgPath}/img/avatar.jpg`}
          alt="This is a art picture"
          width={30}
          height={30}
          priority={true}
        />
      </Avatar>
    </Link>
  );
}
