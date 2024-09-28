"use client";
import { useUser } from "./hook/useUser";
import { Prices } from "@/components/Prices";

export default function Home() {
  const { data: user } = useUser();
  return (
    <div className="items-center justify-center min-h-screen pt-20 font-[family-name:var(--font-geist-sans)] dark:bg-gradient-to-t dark:from-slate-700 dark:to-gray-900 bg-gradient-to-b from-slate-400 to-gray-100">
      {/* Main Content */}
      {user ? (
        <main className="flex flex-col w-full gap-4 items-center justify-center">
          <div className="flex flex-col w-2/3 items-center justify-center">
            <div className="w-96 h-auto p-4 items-center justify-center text-center rounded-xl">
              <h1 className="text-2xl dark:text-gray-50 text-gray-900 font-sans font-semibold">
                Welcome to Precise Tech.!
              </h1>
              <p className="text-sm dark:text-gray-50 text-gray-900 font-sans font-normal">
                Enjoy your stay and learn modern technologies.
              </p>
            </div>
          </div>
          <Prices />
        </main>
      ) : (
        <div className="flex w-full items-center justify-center py-8">
          <h1 className="text-gray-900 dark:text-gray-50 font-sans font-semibold text-xl">
            Subscribe now to get the Best performance ever.!
          </h1>
        </div>
      )}
      {/* Main Content */}
    </div>
  );
}
