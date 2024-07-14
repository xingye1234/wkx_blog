"use client";
import { Tabs } from "./ui/tabs";
import {
  Heading,
  DataList,
  Box,
  Flex,
  Badge,
  Text,
  Code,
  ScrollArea,
} from "@radix-ui/themes";
import {
  IconMailStroked1,
  IconMapPin,
  IconUser,
  IconIdCard,
  IconLayers,
  IconArticle,
} from "@douyinfe/semi-icons";

export function TabsContent() {
  const tabs = [
    {
      title: "个人信息",
      value: "个人信息",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br dark:bg-[#3f3f46] bg-[#cbd5e1] to-violet-900">
          <PersonInfo />
        </div>
      ),
    },
    {
      title: "技术栈",
      value: "技术栈",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br dark:bg-[#3f3f46] bg-[#cbd5e1] to-violet-900">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "项目经验",
      value: "项目经验",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br dark:bg-[#3f3f46] bg-[#cbd5e1]  to-violet-900">
          <ProjectHistory />
        </div>
      ),
    },
    {
      title: "个人展望",
      value: "个人展望",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br dark:bg-[#3f3f46] bg-[#cbd5e1] to-violet-900">
          <PersonDevelop />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-[20rem] [perspective:1000px] relative b flex flex-col w-full  items-start justify-start mt-1">
      <Tabs tabs={tabs}/>
    </div>
  );
}

//个人信息
const PersonInfo = () => {
  return (
    <div className="w-full">
      <div className="flex my-3 md:my-0">
        <div className="w-28 text-[gray]">
          <IconUser size="large" className="align-[-2px]" />
          <span className="ml-1 text-lg">Name</span>
        </div>
        <div className="ml-4">
          <span className="text-xl">WangKeXing</span>
        </div>
      </div>

      <div className="flex my-3 md:my-0">
        <div className="w-28 text-[gray]">
          <IconIdCard size="large" className="align-[-2px]" />
          <span className="ml-1 text-lg">Age</span>
        </div>
        <div className="ml-4">
          <span className="text-xl">24</span>
        </div>
      </div>

      <div className="flex my-3 md:my-0">
        <div className="w-28 text-[gray]">
          <IconMailStroked1 size="large" className="align-[-2px]" />
          <span className="ml-1 text-lg">Email</span>
        </div>
        <div className="ml-4">
          <span className="text-xl">1989163733@qq.com</span>
        </div>
      </div>

      <div className="flex my-3 md:my-0">
        <div className="w-28 text-[gray]">
          <IconMapPin size="large" className="align-[-2px]" />
          <span className="ml-1 text-lg">Address</span>
        </div>
        <div className="ml-4">
          <span className="text-xl">江西南昌</span>
        </div>
      </div>

      <div className="flex my-3 md:my-0">
        <div className="w-28 text-[gray]">
          <IconLayers size="large" className="align-[-2px]" />
          <span className="ml-1 text-lg">EDU</span>
        </div>
        <div className="ml-4">
          <span className="text-xl">江西科技学院（本科）</span>
        </div>
      </div>

      <div className="flex my-3 md:my-0">
        <div className="w-28 text-[gray]">
          <IconArticle size="large" className="align-[-2px]" />
          <span className="ml-1 text-lg">Subject</span>
        </div>
        <div className="ml-4">
          <span className="text-xl">计算机科学与技术</span>
        </div>
      </div>
    </div>
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

//项目经验
const ProjectHistory = () => {
  return (
    <ScrollArea type="always" scrollbars="vertical">
      <div className="p-2 pr-8 mt-4">
        <p className="text-2xl">XX大屏可视化</p>
        <div className="flex flex-col">
          <p className="text-base my-2">
            <span className="font-bold text-lg">项目介绍</span>
            :该项目将各项数据可视化处理，直观展示了各项计划进度、产品作废率和成品率以及车间各项数据变化，更加方便于领导管理
          </p>

          <div className="text-base">
            <span className="font-bold text-lg">项目描述</span>:
            1.采用Vue3+Vite+Typescript+vue-router+element plus构建。
            <p>2.接入海康威视视频，实时显示生产车间情况画面。</p>
            <p>3.对高频使用组件以及公共方法进行封装。</p>
            <p> 4.实现大屏各项适配。</p>
            <p>5.对重复使用业务逻辑方法进行hooks封装。</p>
            <p>
              6.实现打包文件的gzip压缩，组件的懒加载，实现对首页加载速度的提升。
            </p>
          </div>
        </div>
      </div>

      <div className="p-2 pr-8 mt-4">
        <p className="text-2xl">xx中心管理系统</p>

        <div className="mt-4 flex flex-col">
          <p className="text-base">
            <span className="font-bold text-lg">项目介绍</span>
            :该管理系统集成xx大屏系统管理、xx报表管理
          </p>

          <div className="text-base">
            <span className="font-bold text-lg">项目描述</span>:
            1.采用Vue3+Vite+vue-router+element plus构建。
            <p>
              2.实现对大屏可视化的公共数据配置，例如滚动数据列表的滚动速度以及页面数据更新频率。
            </p>
            <p>3.完成报表数据的增删改查。</p>
          </div>
        </div>
      </div>

      <div className="p-2 pr-8 mt-4">
        <p className="text-2xl">xx美术馆数字藏品库与管理系统</p>

        <div className="mt-4 flex flex-col">
          <p className="text-base">
            <span className="font-bold text-lg">项目介绍</span>
            :主要用于展示美术馆藏品以及藏品细节查看
          </p>

          <div className="text-base">
            <span className="font-bold text-lg">项目描述</span>:
            1.采用Vue3+Vite+Typescript+Unocss+vue-router+element plus构建。
            <p>2.实现网站的响应式布局，实现不同设备上的藏品完美展示。</p>
            <p>3.实现图像金字塔，用户可以查看到藏品更加高清细节。</p>
            <p>4.针对pc端和移动端搜索做不同的行为处理。</p>
            <p>
              5.实现藏品的瀑布流以及图片懒加载，提高页面加载速度和用户体验。
            </p>
            <p>6.实现藏品的标签、专题、藏品管理。</p>
            <p>7.实现藏品的大文件切片上传。</p>
            <p>8.实现大文件图片压缩预览图。</p>
          </div>
          <div className="text-base">
            <span className="font-bold text-lg">项目难点</span>
            :主要用于展示美术馆藏品以及藏品细节查看
            <p>1.如何实现大文件的压缩以及处理多种文件的转换。</p>
            <p>2.如何实现藏品文件的图像金字塔，并在web中展示效果。</p>
          </div>
        </div>
      </div>
    </ScrollArea>
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
