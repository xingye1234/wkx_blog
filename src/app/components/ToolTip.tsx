"use client";
import React from "react";
import  {AnimatedTooltip}  from "./ui/animated-tooltip";
import {
    IconGithubLogo,
    IconMail,
    IconUserCardPhone,
  } from "@douyinfe/semi-icons";

const people = [
  {
    id: 1,
    name: "Click me",
    designation: "Go to Github",
    type:'link',
    icon:<IconGithubLogo size="extra-large"/>
    },
  {
    id: 2,
    name: "Mail",
    designation: "1989163733@qq.com",
    icon:<IconMail size="extra-large"/>
    },
  {
    id: 3,
    name: "Phone",
    designation: "13635985831",
    icon:<IconUserCardPhone size="extra-large"/>
    }
];

export function ToolTip() {
  return (
    <div className="flex items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
