"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@/app/hook/useUser";
import Image from "next/image";
import { createSupabaseBrowserClient } from "@/lib/subabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const Profile = () => {
  const { data: user } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createSupabaseBrowserClient();
    queryClient.clear();
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <div>
      {user ? (
        <div className="flex items-center justify-center gap-3">
          <span className="text-gray-50 font-sans font-semibold text-lg">
            {user.display_name}
          </span>
          <div>
            {user?.image_url ? (
              <Image
                className="rounded-full animate-fadeIn cursor-pointer"
                src={`${user.image_url || null}`}
                alt={`${user.display_name || null}`}
                width={50}
                height={50}
                onClick={handleSignOut}
              />
            ) : (
              <span
                onClick={handleSignOut}
                className="text-xl dark:text-gray-50 text-gray-900 font-sans font-bold uppercase cursor-pointer"
              >
                {user.email[0]}
              </span>
            )}
          </div>
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
