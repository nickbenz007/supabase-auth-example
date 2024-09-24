"use client";
import Link from "next/link";
import { useUser } from "./hook/useUser";
import { Subscription } from "@/components/Subscription";

export default function Home() {
  const { data: user } = useUser();
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main Content */}
      {user ? (
        <main className="flex flex-col w-full gap-4 items-center justify-center">
          <div className="w-96 h-auto items-center justify-center text-center p-8 border border-gray-500 rounded-xl">
            <h1 className="text-2xl dark:text-gray-50 text-gray-900 font-sans font-semibold">
              Welcome to Precise Tech.!
            </h1>
            <p className="text-sm dark:text-gray-50 text-gray-900 font-sans font-normal">
              Enjoy your stay and learn modern technologies.
            </p>
          </div>
          <div className="flex items-center justify-start gap-4">
            <Link
              href={"/dashboard"}
              className="dark:text-gray-50 text-gray-900 text-lg font-sans font-font-normal hover:underline"
            >
              Dasboard
            </Link>
            <Link
              href={"/account"}
              className="dark:text-gray-50 text-gray-900 text-lg font-sans font-font-normal hover:underline"
            >
              Account
            </Link>
          </div>
          <Subscription />
        </main>
      ) : (
        <div className="flex w-full items-center justify-center">
          <h1 className="text-gray-900 dark:text-gray-50 font-sans font-semibold text-xl">
            Please login for subscription
          </h1>
        </div>
      )}
      {/* Main Content */}
    </div>
  );
}
