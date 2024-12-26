import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await serverAuth();
    const url = new URL(req.url);
    const movieId = url.pathname.split("/").pop(); // URLの最後の部分を取得
    console.log(movieId);

    if (typeof movieId !== "string") {
      throw new Error("Invalid ID");
    }
    if (!movieId) {
      throw new Error("Invalid ID");
    }
    const movies = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movies) {
      throw new Error("Invalid ID");
    }
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Error", { status: 400 });
  }
}
