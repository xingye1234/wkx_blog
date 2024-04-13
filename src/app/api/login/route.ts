import { prisma } from "@/data/index";
import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";
import { cookies } from "next/headers";
import { signToken } from "@/app/utils/jwt";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const users = await prisma.users.findMany({
    where: {
      name: username,
      password: password,
    },
  });

  let resData;
  if (users.length !== 0) {
    const token = signToken(username);
    // console.log('------->',token);
    cookies().set("token", token);

    resData = {
      code: 200,
      msg: "登录成功",
    };

    // try {
    //   await signIn("credentials", {username, password});
    // } catch (error) {
    //   if (error instanceof AuthError) {
    //     switch (error.type) {
    //       case "CredentialsSignin":
    //         return { msg: "Invalid credentials", status: "error" };
    //       case "CredentialsSignin":
    //         throw error;
    //       default:
    //         return { msg: "Something went wrong", status: "error" };
    //     }
    //   }
    // }
  } else {
    resData = {
      code: 400,
      msg: "用户名或密码错误",
    };
  }
  return Response.json(resData);
}

export async function GET(req: Request) {
  cookies().delete("token");
  return Response.json({ code: 200 });
}
