"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { IconLock, IconUser } from "@douyinfe/semi-icons";
import { useRouter } from "next/navigation";
import { Toast } from '@douyinfe/semi-ui';

interface LoginFormData {
  username: string;
  password: string;
}

interface ApiResponse {
  code: number;
  msg: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const result = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json() as Promise<ApiResponse>);

    if (result.code == 200) {
      router.replace("/dashboard");
    } else {
      Toast.error(result.msg)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <IconUser size="extra-large" style={{ color: "white" }} />
        <input
          className="ml-2 align-[8px] border-b-2 border-solid outline-none focus:border-[#2563eb] bg-gray-100/0 text-white italic"
          placeholder="请输入用户名"
          {...register("username", { required: true, maxLength: 20 })}
        />
        {errors.username ? <p className="text-white">This is required</p> : ""}
      </div>
      <div className="mt-2">
        <IconLock size="extra-large" style={{ color: "white" }} />
        <input
          type="password"
          className="ml-2 align-[8px] border-b-2 border-solid outline-none focus:border-[#2563eb] bg-gray-100/0 text-white italic"
          placeholder="请输入密码"
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
        className="text-white bg-gray-100/50 py-1 px-6 cursor-pointer mt-2 rounded-md hover:bg-[#2563eb]"
      />
    </form>
  );
}
