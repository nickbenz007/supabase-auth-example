"use client";
import React from "react";
import {prices} from '@/components/subscripton/price'
import { SubscriptionType } from "@/types";
import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkout } from "./Checkout";

export const Prices = () => {
  const subscription = prices as SubscriptionType[];
  return (
    <div className="flex 2xl:w-2/3 xl:w-4/5 lg:w-2/1 w-full items-center justify-center py-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full items-center justify-center justify-items-center">
        {subscription.map((item, index: number) => {
          const populatedCard0 = index === 0;
          const populatedCard1 = index === 1;
          const populatedCard2 = index === 2;
          return (
            <div
              key={index}
              className={cn(
                "flex flex-col w-80 h-auto justify-between rounded-3xl p-8 space-y-4 shadow-lg dark:shadow-sky-600 shadow-gray-300",
                {
                  "dark:bg-gradient-radial dark:from-cyan-500 dark:via-teal-600 dark:to-green-700 bg-gradient-radial from-cyan-100 via-teal-400 to-green-500":
                    populatedCard1,
                },
                {
                  "dark:bg-gradient-radial dark:from-gray-400 dark:via-slate-400 dark:to-gray-300 bg-gradient-radial from-gray-100 via-slate-100 to-gray-100":
                    populatedCard0,
                },
                {
                  "dark:bg-gradient-radial dark:from-gray-400 dark:via-cyan-500 dark:to-cyan-700 bg-gradient-radial from-gray-100 via-cyan-200 to-cyan-300":
                    populatedCard2,
                }
              )}
            >
              <div className="flex flex-col space-y-3">
                <h1 className="text-gray-900 dark:text-gray-50 font-sans font-semibold text-xl">
                  {item.title}{" "}
                </h1>
                <span className="text-gray-900 dark:text-gray-50 text-5xl font-sans font-extrabold">
                  $ {item.price}
                </span>
              </div>
              <div className="flex w-full space-y-3">
                <span className="text-gray-900 dark:text-gray-50 text-md font-sans font-semibold">
                  {item.description}
                </span>
              </div>
              <div className="flex flex-col w-full space-y-3 py-4">
                {item.benefits.map((ben: string, index: number) => (
                  <ol key={index} className="list-none">
                    <li className="flex items-center gap-2 font-sans font-medium text-gray-900 dark:text-gray-50">
                      <BadgeCheck size={22} className="text-gray-600 dark:text-gray-700" />
                      {ben}
                    </li>
                  </ol>
                ))}
              </div>
              <Checkout priceId={item.priceId} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
