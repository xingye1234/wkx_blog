import React from "react";
import Card from "@/app/components/ui/dashboard/Card";

const cards = [
  { id: 1, title: "POSTS", content: 10 },
  { id: 2, title: "Build Tools", content: 8 },
  { id: 3, title: "TypeScript", content: 2 },
  { id: 4, title: "Node", content: 1 },
  { id: 5, title: "SQL", content: 0 },
];

export default async function page() {
  return (
    <div className="animate-fade-left animate-duration-1000 animate-delay-100">
      <div className="flex gap-3">
        {cards.map((_, index) => (
          <Card key={index} title={_.title} content={_.content} />
        ))}
      </div>
    </div>
  );
}
