
import React from "react";
import NavLinks from "./NavLinks";
import Dialog from "./Dialog";



export default function SideNav() {
  return (
    <div className="w-full text-center h-full animate-fade-right animate-duration-1000 animate-delay-100">
      <h1 className="py-4 text-3xl font-bold bg-[#2563eb] mb-2 text-white">
        后台管理
      </h1>
      <div>
        
        <NavLinks/>
        <Dialog title="退出登录"/>
      </div>
    </div>
  );
}
