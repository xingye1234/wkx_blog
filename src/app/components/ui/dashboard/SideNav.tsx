import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { IconHome } from "@douyinfe/semi-icons";

export default function SideNav() {
  return (
    <div className="w-full text-center">
      <h1 className="py-4 text-3xl font-bold">后台管理</h1>
      <div>
        <Link
          href="/dashboard"
          className="animate-fade-right animate-duration-1000 animate-delay-100 flex mb-2 h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <IconHome />
          首页
        </Link>
      </div>
      <div className="flex flex-col">
        <NavLinks />
      </div>
    </div>
  );
}
