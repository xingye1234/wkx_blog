import React from "react";
import LabelCard from "./components/LabelCard";

export default async function page() {
  const {data:{label,article}} = await fetch("http://localhost:3000/api/article").then(res => res.json())
  return (
    <div className="animate-fade-left animate-duration-1000 animate-delay-100">
      <div>
        <LabelCard title="Label" link="新增标签" content={label}>
        </LabelCard>
      </div>
      <div>
        <LabelCard title="Article" link="新增文章" content={article}>
        </LabelCard>
      </div>
    </div>
  );
}
