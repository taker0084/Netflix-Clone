import bcrypt from "bcrypt";
// import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // ここでリクエストボディをJSONとして解析
    const { email, name, password } = body; // 解析したボディからプロパティを取得
    console.log(email, name, password);
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json({ error: "Email taken" }, { status: 422 });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return NextResponse.json(user, { status: 200 });
    // return NextResponse.json({ text: "success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 400 });
  }
}
