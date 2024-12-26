"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navber";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";

export default function HomePage() {
  const { data: user, error, isLoading } = useCurrentUser();
  const { data: movies = [] } = useMovieList();

  return (
    <div>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
    </div>
  );
}
