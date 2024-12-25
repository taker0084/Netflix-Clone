"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navber";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { data: user, error, isLoading } = useCurrentUser();
  // console.log(user);
  // /api/currentにて,currentUserとしてjsonにしているため、アクセスするときはuser.currentUser.emailとしてアクセスする

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div>
      <Navbar />
    </div>
  );
}
