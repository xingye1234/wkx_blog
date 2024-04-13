import React from "react";
import LoginForm from "@/app/components/ui/LoginForm";

export default function page() {
  return (
    <div style={{backgroundImage: `url("${process.env.imgPath}/login-bg.jpg")`}} className='animate-fade-right animate-duration-1000 animate-delay-100 w-full h-screen bg-cover flex justify-center items-center items-center'>
      <div className="bg-gray-100/35 py-10 px-6 text-center rounded-lg w-[32rem]">
        <h1 className="text-3xl font-bold italic text-white mb-10">SignIn</h1>
        <div className="">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
