import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const currentUser = await serverAuth();
    // console.log(currentUser.name);
    return NextResponse.json({ currentUser }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 400 });
  }
}
