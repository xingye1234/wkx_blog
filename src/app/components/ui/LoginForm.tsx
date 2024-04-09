"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { IconLock, IconUser } from "@douyinfe/semi-icons";
import { Form, Tooltip } from "@douyinfe/semi-ui";

type username = {
  username: string;
  password: string;
};
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<username>();
  const onSubmit: SubmitHandler<username> = (data) => {
    console.log(data);
  };

  return (
    <Form layout="vertical" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <IconUser size="extra-large" style={{ color: "white" }} />
        <input
          className="ml-2 align-[8px] border-b-2 border-solid outline-none focus:border-[#bef264] bg-gray-100/0 text-white italic"
          placeholder="请输入用户名"
          {...register("username", { required: true, maxLength: 20 })}
        />
        {errors.username ? <p className="text-white">This is required</p> : ""}
      </div>
      <div className="mt-2">
        <IconLock size="extra-large" style={{ color: "white" }} />
        <input
          type="password"
          className="ml-2 align-[8px] border-b-2 border-solid outline-none focus:border-[#bef264] bg-gray-100/0 text-white italic"
          placeholder="请输入用户名"
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
        />
        {errors.password ? <p className="text-white">This is required</p> : ""}
      </div>

      <input
        type="submit"
        defaultValue="登录"
        className="text-white bg-gray-100/50 py-1 px-6 cursor-pointer mt-2 rounded-md hover:bg-[#bef264]"
      />
    </Form>
  );
}
