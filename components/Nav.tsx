"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@/app/hook/useUser";
import { Profile } from "./Profile";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";

export const Nav = () => {
  const { isLoading } = useUser();

  return (
    <nav className="fixed top-0 left-0 flex w-full justify-center gap-4 px-4 py-4 dark:bg-gradient-to-r dark:from-gray-950 dark:to-slate-800 bg-gradient-to-b from-gray-300 to-slate-700 z-50 shadow-lg">
      <div className="flex md:w-3/5 w-full items-center justify-between">
        <div>
          <Link href={"/auth"}>
            <Button
              variant={"outline"}
              className="rounded-r-2xl text-gray-100 text-md font-sans font-semibold"
            >
              Precise Tech
            </Button>
          </Link>
        </div>
        {isLoading ? (
          <Loader
            size={30}
            className="animate-spin dark:text-green-500 text-sky-600"
          />
        ) : (
          <Profile />
        )}
      </div>
    </nav>
  );
};
