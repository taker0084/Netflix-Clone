"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function ClientHome() {
  const { data: user, error, isLoading } = useCurrentUser();
  // console.log(user);
  // /api/currentにて,currentUserとしてjsonにしているため、アクセスするときはuser.currentUser.emailとしてアクセスする

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl text-green-500">Netflix Clone</h1>
      <p className="text-white">Logged in as {user.currentUser.email}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        LogOut!
      </button>
    </div>
  );
}
