"use client";
import React, { useState, forwardRef } from "react";
import Link from "next/link";
import {
  IconGithubLogo,
  IconMail,
  IconUserCardPhone,
} from "@douyinfe/semi-icons";
import { Popover, Button } from "@douyinfe/semi-ui";
export default function NavButton() {

  const ref = React.useRef(null);

  // 将props属性传递，绑定ref
  const Phone = forwardRef((props, ref) => {
    return (
      <span {...props} ref={ref}>
       <IconUserCardPhone size="extra-large" className="mr-4" />
      </span>
    );
  });
  const content = (
    <div className="h-6 leading-6">
      <span className="px-2.5">13635985831</span>
    </div>
  );

  // 将props属性传递，绑定ref
  const Mail = forwardRef((props, ref) => {
    return (
      <span {...props} ref={ref}>
        <IconMail size="extra-large" className="mr-4" />
      </span>
    );
  });
  const contentMail = (
    <div className="h-6 leading-6">
      <span className="px-2.5">1989163733@qq.com</span>
    </div>
  );


  return (
    <>
      <Link href="https://github.com/xingye1234" target="_blank">
        <IconGithubLogo size="extra-large" className="mr-4" />
      </Link>
      <Popover content={content}>
        <Phone ref={ref}/>
      </Popover>
      <Popover content={contentMail}>
        <Mail ref={ref}/>
      </Popover>
      
    </>
  );
}
