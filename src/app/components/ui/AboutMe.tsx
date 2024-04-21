"use client";
import React from "react";
import { Heading, Text } from "@radix-ui/themes";
import { IconReply } from "@douyinfe/semi-icons";

export default function AboutMe({
  setShowMainContent,
}: {
  setShowMainContent: (val: boolean) => void;
}) {
  return (
    <div className="w-4/5 min-h-screen px-10 pt-24">
      <Heading size="8" className="mt-5 flex justify-between">
        Wang kexing
        <IconReply
          size="extra-large"
          className="cursor-pointer z-999 relative hover:text-blue-600"
          onClick={() => setShowMainContent(false)}
        />
      </Heading>
      <div className="mt-10">
        <Text size={"4"}>Hey, my name is Wang KeXing!</Text>
        <br />
        <div className="mt-5">
          <Text size={"4"}>
            I am a front-end developer. I have been in front-end since 2020, and
            I am still a rookie.
          </Text>
        </div>

        <div className="mt-5">
          <Text size={"4"}>
            I am well aware of my shortcomings and am working hard to make up
            for them.
          </Text>
        </div>
        <div className="mt-5">
          <Text size={"4"}>
            This website is mainly to record some problems encountered in
            learning and some interesting things, and provide some help for
            subsequent deep learning.
          </Text>
        </div>
      </div>
    </div>
  );
}
