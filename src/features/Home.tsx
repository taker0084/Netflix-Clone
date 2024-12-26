"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navber";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Billboard from "@/components/Billboard";

export default function HomePage() {
  const { data: user, error, isLoading } = useCurrentUser();
  // console.log(user);

  // if (isLoading) {
  //   return <div className="text-white">Loading...</div>;
  // }

  return (
    <div>
      <Navbar />
      <Billboard />
    </div>
  );
}
