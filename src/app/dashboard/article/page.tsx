import React from "react";
import LabelCard from "./components/LabelCard";

export default async function page() {
 
  return (
    <div className="animate-fade-left animate-duration-1000 animate-delay-100">
      <div>
        <LabelCard title="label" link="新增标签">
        </LabelCard>
      </div>
      <div>
        <LabelCard title="article" link="新增文章">
        </LabelCard>
      </div>
    </div>
  );
}
