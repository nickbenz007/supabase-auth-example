"use client";

import React from "react";
import { Button } from "./ui/button";
import { useUser } from "@/app/hook/useUser";
import { useRouter } from "next/navigation";
import { checkout } from "@/lib/actions/stripe";
import { loadStripe } from "@stripe/stripe-js";

export const Checkout = ({ priceId }: { priceId: string }) => {
  const { data: user } = useUser();
  const router = useRouter();

  const handleCheckout = async () => {
    try {
      if (user?.id) {
        const data = JSON.parse(await checkout(user.email, priceId, location.origin));
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
        const res = await stripe?.redirectToCheckout({ sessionId: data.id });

        if(res?.error){
          console.error(res?.error);
        }
      } else {
        router.push("/auth?redirectTo=" + location.origin);
      }
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };
  return (
    <div className="flex w-full items-center justify-center py-4">
      <Button
        onClick={handleCheckout}
        variant={"outline"}
        className={
          "w-full h-10 rounded-full text-sm font-sans font-bold uppercase dark:bg-white dark:hover:bg-slate-800 bg-slate-800 hover:bg-white text-gray-50 dark:text-gray-900 dark:hover:text-gray-50 hover:text-gray-900"
        }
      >
        Get Started
      </Button>
    </div>
  );
};
