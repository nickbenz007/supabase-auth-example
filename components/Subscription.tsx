"use client";
import React from "react";
import dummy_data from "@/dummy_data.json";
import { SubscriptionType } from "@/types";
import { BadgeCheck } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const Subscription = () => {
  const subscription = dummy_data as SubscriptionType[];
  return (
    <div className="flex w-2/3 items-center justify-center py-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">
        {subscription.map((item, index: number) => {
          const populatedCard = index === 1;
          return (
            <div
              key={index}
              className={cn(
                "flex flex-col w-80 h-auto justify-between border-2 border-sky-500 rounded-xl p-8 space-y-4 bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl shadow-cyan-800",
                { "border-green-500": populatedCard }
              )}
            >
              <div className="flex flex-col space-y-3">
                <h1 className="text-gray-900 dark:text-gray-50 font-sans font-semibold text-xl">
                  {item.Title}{" "}
                </h1>
                <span className="text-gray-900 dark:text-gray-50 text-2xl font-sans font-extrabold">
                  $ {item.Price}
                </span>
              </div>
              <div className="flex w-full space-y-3">
                <span className="text-gray-900 dark:text-gray-50 text-md font-sans font-normal">
                  {item.Description}
                </span>
              </div>
              <div className="flex flex-col w-full space-y-3">
                {item.Benefits.map((ben: string, index: number) => (
                  <ol key={index} className="list-none">
                    <li className="flex items-center gap-2">
                      <BadgeCheck />
                      {ben}
                    </li>
                  </ol>
                ))}
              </div>
              <div className="flex w-full items-center justify-center">
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full h-10 rounded-full text-lg font-sans font-bold uppercase",
                    { "border-green-500": populatedCard }
                  )}
                >
                  Get Started
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
