import React from "react";
import { Form, Tooltip } from "@douyinfe/semi-ui";
import { IconHelpCircle } from "@douyinfe/semi-icons";

export default ({ title = "label", inputProps }: { title: string, inputProps: string }) => {
  const { Option } = Form.Select;

  return (
    <Form layout="vertical" onValueChange={(values) => console.log(values)}>
      <Form.Input field={inputProps} label={inputProps} />
    </Form>
  );
};
