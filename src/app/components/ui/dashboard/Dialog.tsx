"use client";
import React from "react";
import { Modal } from "@douyinfe/semi-ui";
import { IconExit } from "@douyinfe/semi-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dialog({ title }: { title: string }) {
  const [visible, setVisible] = React.useState(false);
  const router = useRouter();
  const showDialog = () => {
    setVisible(true);
  };
  const handleOk = async () => {
    await fetch("/api/login").then((res) => res.json());
    setVisible(false);
    router.push("/");
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Link
        href=""
        onClick={showDialog}
        className="animate-fade-right animate-duration-1000 animate-delay-100 flex mb-2 h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <IconExit />
        {title}
      </Link>
      <Modal
        title="Tips"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        closeOnEsc={true}
      >
        确定要退出登录吗？
      </Modal>
    </>
  );
}
