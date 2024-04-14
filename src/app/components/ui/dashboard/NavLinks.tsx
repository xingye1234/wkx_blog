"use client";
import React from "react";
import Link from "next/link";
import { IconUserCircle, IconArticle, IconHome } from "@douyinfe/semi-icons";
import clsx from "clsx";
import { usePathname, useParams } from "next/navigation";

const links = [
  { id: 1, name: "首页", path: "/dashboard", icon: <IconHome /> },
  {
    id: 2,
    name: "个人中心",
    path: "/dashboard/account",
    icon: <IconUserCircle />,
  },
  {
    id: 3,
    name: "文章管理",
    path: "/dashboard/article",
    icon: <IconArticle />,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          className={
            clsx("flex mb-2 h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{
              "bg-sky-100 text-blue-600": pathname === link.path
            })
          }
        >
          {link.icon}
          {link.name}
        </Link>
      ))}
    </>
  );
}
