"use client";
import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { DataList, Link, Flex, Badge, Code } from "@radix-ui/themes";
import {
  IconMailStroked1,
  IconMapPin,
  IconUser,
  IconIdCard,
  IconLayers,
  IconArticle,
  IconReply,
} from "@douyinfe/semi-icons";

export function TabsContent({
  setShowMainContent,
}: {
  setShowMainContent: (val: boolean) => void;
}) {
  const tabs = [
    {
      title: "个人信息",
      value: "个人信息",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br dark:bg-[#3f3f46] bg-[#d1d5db] to-violet-900">
          <PersonInfo />
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
          <PersonDevelop />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:min-h-[38rem] [perspective:1000px] relative b flex flex-col max-w-5xl w-full  items-start justify-start mt-1">
      <Tabs tabs={tabs} />
        <IconReply
          size="extra-large"
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowMainContent(false)}
        />
    </div>
  );
}

//个人信息
const PersonInfo = () => {
  return (
    <DataList.Root>
      <DataList.Item align="center">
        <DataList.Label minWidth="88px">
          <IconUser size="large" />
          <span className="ml-1">Name</span>
        </DataList.Label>
        <DataList.Value>
          <Badge color="jade" variant="soft" radius="full">
            WangKeXing
          </Badge>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">
          <IconIdCard size="large" />
          <span className="ml-2">Age</span>
        </DataList.Label>
        <DataList.Value>
          <Flex align="center" gap="2">
            <Code variant="ghost">24</Code>
          </Flex>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">
          <IconMailStroked1 size="large" />
          <span className="ml-2">Email</span>
        </DataList.Label>
        <DataList.Value>
          <span>1989163733@qq.com</span>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">
          <IconMapPin size="large" />
          <span className="ml-2">Address</span>
        </DataList.Label>
        <DataList.Value>
          <span>江西南昌</span>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label minWidth="88px">
          <IconLayers size="large" /> <span className="ml-2">EDU</span>
        </DataList.Label>
        <DataList.Value>江西科技学院（本科）</DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label minWidth="88px">
          <IconArticle size="large" />
          <span className="ml-2">Subject</span>
        </DataList.Label>
        <DataList.Value>计算机科学与技术</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
};

//技术栈
const DummyContent = () => {
  return (
    <ul className="text-xl flex flex-col gap-5 ">
      <li>
        1、熟练掌握HTML、CSS、JavaScript 、TypeScript、ES6、Tailwindcss、
        Unocss等前端基础技术；
      </li>
      <li>2、熟悉React全家桶；</li>
      <li>3、熟练掌握Vue 全家桶；</li>
      <li>4、熟悉Node.js，熟悉Express、 Koa2等nodejs库；</li>
      <li>
        5、熟悉Webpack和Vite前端自动化构建工具，对Vite的性能优化有一定的了解；
      </li>
      <li>6、熟练掌握Echarts、前端可视化技术；</li>
      <li>8、熟练使用Element、Vant、Ant Design等主流前端UI库；</li>
      <li>9、了解java后端语言；</li>
    </ul>
  );
};

// 个人展望
const PersonDevelop = () => {
  return (
    <div className="flex justify-center h-full items-center italic text-[50px]">
      兢兢业业，踏踏实实
    </div>
  );
};
