"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@/app/hook/useUser";
import Image from "next/image";

export const Profile = () => {
  const { data: user } = useUser();
  return (
    <div>
      {user ? (
        <div className="flex items-center justify-center gap-3">
          <span className="dark:text-gray-50 text-gray-900 font-sans font-semibold text-lg">
            {user.display_name}
          </span>
          <Image
            className="rounded-full"
            src={`${user.image_url || null}`}
            alt={`${user.display_name || null}`}
            width={50}
            height={50}
          />
        </div>
      ) : (
        <Link
          href={"/auth"}
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-100 text-md font-sans font-normal"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};
