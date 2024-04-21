import {prisma} from "@/data/index"
import { NextResponse } from "next/server";
export async function GET(req:Request, res:Response) {
    const data = await prisma.article.findMany();
    return Response.json({
        code:200,
        msg:"获取成功",
        data
    })
}