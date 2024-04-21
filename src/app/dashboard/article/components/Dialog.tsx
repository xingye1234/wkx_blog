"use client";
import React from "react";
import { Modal } from "@douyinfe/semi-ui";
import Link from "next/link";
import AddLabelForm from "./AddLabelForm";

export default function Dialog({ title, inputProps }: { title: string; inputProps: string }) {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => {
    setVisible(true);
  };
  const handleOk = async () => {
    await fetch("/api/login").then((res) => res.json());
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Link
        href=""
        onClick={showDialog}
        className="flex mb-2 h-[28px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        {title}
      </Link>
      <Modal
        title="新增数据"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        closeOnEsc={true}
      >
        <AddLabelForm title={title} inputProps={inputProps} />
      </Modal>
    </>
  );
}
