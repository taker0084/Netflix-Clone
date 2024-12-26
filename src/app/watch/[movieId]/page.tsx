"use client";
import React from "react";
import useMovie from "@/hooks/useMovie";
import { useParams, useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

const watch = () => {
  const router = useRouter();
  const params = useParams<{ movieId: string }>();
  const movieId = params.movieId;

  const { data } = useMovie(movieId as string);
  return (
    <div className="h-screen w-screen bg-black">
      <nav
        className="
        fixed
        w-full
        p-4
        z-10
        flex
        flex-row
        items-center
        gap-8
        bg-black
        bg-opacity-70
      "
      >
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white"
          size={40}
        />
        <p className="text-white text-1xl md;text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full"
        src={data?.videoUrl}
      ></video>
    </div>
  );
};
export default watch;
