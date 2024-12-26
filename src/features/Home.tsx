"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navber";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";

export default function HomePage() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  return (
    <div>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </div>
  );
}
