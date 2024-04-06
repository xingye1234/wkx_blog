import React from "react";
import Link from "next/link";
import {IconUserCircle, IconArticle} from "@douyinfe/semi-icons"

export default function NavLinks() {
  return (
    <>
      <Link
        href="/dashboard/account"
        className="flex mb-2 h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <IconUserCircle />个人中心
      </Link>
      <Link
        href="/dashboard/article"
        className="flex mb-2 h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <IconArticle />文章管理
      </Link>
    </>
  );
}
