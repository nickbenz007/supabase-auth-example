"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@/app/hook/useUser";
import Image from "next/image";
import { createSupabaseBrowserClient } from "@/lib/subabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export const Profile = () => {
  const { data: user } = useUser();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleSignOut = async () => {
    const supabase = createSupabaseBrowserClient();

    queryClient.clear();
    await supabase.auth.signOut();
    router.refresh();
    router.push(`/auth?redirectTo=${currentPath}`);
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center justify-center gap-3">
          <Button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            size={"sm"}
            variant={"outline"}
            className="rounded-full text-xl font-sans cursor-pointer border-none"
          >
            {currentTheme === "dark" ? "🌙" : "☀️"}
          </Button>
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
        <Link href={"/auth"}>
          <Button
            variant={"outline"}
            className="rounded-full text-gray-100 text-md font-sans font-semibold"
          >
            Sign In
          </Button>
        </Link>
      )}
    </div>
  );
};
