"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@/app/hook/useUser";
import { Profile } from "./Profile";
import { Loader } from "lucide-react";

export const Nav = () => {
  const { isLoading } = useUser();
  return (
    <nav className="fixed top-0 left-0 flex w-full justify-center gap-4 px-4 py-3 bg-slate-900 z-50 shadow-lg">
      <div className="flex w-3/5 items-center justify-between">
        <div>
          <Link
            href={"/"}
            className="px-4 py-2 rounded-lg bg-gray-700 text-gray-100 text-lg font-sans font-font-semibold"
          >
            Precise Tech
          </Link>
        </div>
        {isLoading ? (
          <Loader
            size={30}
            className="animate-spin dark:text-yellow-600 text-gray-900"
          />
        ) : (
          <Profile />
        )}
      </div>
    </nav>
  );
};
