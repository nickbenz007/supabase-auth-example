"use client";
import Image from "next/image";
import React from "react";
import { useUser } from "../hook/useUser";

const Account = () => {
  const { data: user } = useUser();

  return (
    <div className="flex w-full min-h-screen items-center justify-center pt-20 dark:bg-gradient-to-r dark:from-gray-950 dark:to-slate-800 bg-gradient-to-b from-slate-400 to-gray-100">
      <div className="flex flex-col w-96 items-start justify-center rounded-2xl shadow-inner dark:bg-gradient-to-r dark:from-gray-950 dark:to-slate-800 bg-gradient-to-r from-slate-50 to-cyan-100 shadow-gray-800 p-16 space-y-4 my-8">
        <Image
          src={`${user?.image_url}`}
          alt={`${user?.display_name}`}
          width={200}
          height={200}
          className="rounded-2xl p-2 border dark:bg-gray-700 bg-gray-400"
        />
        <h1 className="dark:text-gray-50 text-gray-900 text-xl font-sans font-semibold">
          Profile:
        </h1>
        <span className="dark:text-gray-50 text-gray-950 text-xl font-sans font-semibold">
          Title: {user ? user.display_name?.toUpperCase() : "User"}
        </span>
        <span className="dark:text-gray-50 text-gray-950 text-lg font-sans font-normal">
          Email: {user ? user.email : "Email:"}
        </span>
        <span className="dark:text-gray-50 text-gray-950 text-md font-sans font-normal">
          Created on Date: {user ? user.created_at : "Created At: "}
        </span>
      </div>
    </div>
  );
};

export default Account;
