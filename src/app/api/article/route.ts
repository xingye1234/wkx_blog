import {prisma} from "@/data/index"
import { NextResponse } from "next/server";
export async function GET(req:Request, res:Response) {
    const data = await prisma.label.findMany();
    const data1 = await prisma.article.findMany();
    return Response.json({
        code:200,
        msg:"获取成功",
        data:{
            label:data,
            article:data1
        }
    })
}

export async function POST(req:Request, res:Response) {

}

export async function PUT(req:Request, res:Response) {

}

export async function DELETE(req:Request, res:Response) {

}