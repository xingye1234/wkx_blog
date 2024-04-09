"use client";
import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsContent() {
  const tabs = [
    {
      title: "个人信息",
      value: "个人信息",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br dark:bg-[#3f3f46] bg-[#d1d5db] to-violet-900">
          
          <DummyContent />
        </div>
      ),
    },
    {
      title: "技术栈",
      value: "技术栈",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br dark:bg-[#3f3f46] bg-[#d1d5db] to-violet-900">
          
          <DummyContent />
        </div>
      ),
    },
    {
      title: "工作经历",
      value: "工作经历",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br dark:bg-[#3f3f46] bg-[#d1d5db]  to-violet-900">
          
          <DummyContent />
        </div>
      ),
    },
    {
      title: "项目经验",
      value: "项目经验",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br dark:bg-[#3f3f46] bg-[#d1d5db]  to-violet-900">
         
          <DummyContent />
        </div>
      ),
    },
    {
      title: "个人展望",
      value: "个人展望",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br dark:bg-[#3f3f46] bg-[#d1d5db] to-violet-900">
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[38rem] [perspective:1000px] relative b flex flex-col max-w-5xl w-full  items-start justify-start mt-1">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div>
        内容
    </div>
  );
};
