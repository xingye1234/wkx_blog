import {prisma} from "@/data/index"
import { NextResponse } from "next/server";
export async function GET(req:Request, res:Response) {
    const query = req.url;
    const data = await prisma.label.findMany();
    return Response.json({
        code:200,
        msg:"获取成功",
        data
    })
}