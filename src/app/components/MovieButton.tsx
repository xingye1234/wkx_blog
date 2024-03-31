"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorderDemo({
  setShowMainContent,
}: {
  setShowMainContent: (val:boolean) => void;
}) {
  return (
    <div>
      <Button
        onClick={() => setShowMainContent(true)}
        borderRadius="1.75rem"
        className="font-bold bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        About me
      </Button>
    </div>
  );
}
