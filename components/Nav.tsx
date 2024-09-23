"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@/app/hook/useUser";
import { Profile } from "./Profile";

export const Nav = () => {
  const { data: user } = useUser();
  console.log(user);
  return (
    <nav className="fixed top-0 left-0 flex w-full justify-center gap-4 px-4 py-3 bg-slate-900 z-50 shadow-lg">
      <div className="flex w-3/5 items-center justify-between">
        <Link
          href={"/"}
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-100 text-md font-sans font-normal"
        >
          Precise Tech
        </Link>
        <Profile />
      </div>
    </nav>
  );
};
