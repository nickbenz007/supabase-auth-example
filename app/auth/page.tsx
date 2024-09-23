"use client";
import React, { SyntheticEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, KeyRound, Loader } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/subabase/client";

const Auth = () => {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");

  const router = useRouter();

  const toggleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (userName === "User" && userPassword === "Password") {
        alert("Login Successfull.!");
        setErr("");
        setLoading(false);
        router.push("/");
      } else {
        setLoading(false);
        setErr(
          "Invalid credentials, Please enter the correct Username / Password"
        );
        setUserName("");
        setUserPassword("");
      }
    }, 1000);
  };

  const handleSignInWithOAuth = async (provider: "google" | "github") => {
    const getUrl = () => {
      let url =
        process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
        process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
        "http://localhost:3000/"; // Default to localhost in development.

      //  Checking part of the path Start & Ends with e.g http, https & /
      url = url.startsWith("http") ? url : `https://${url}`;
      url = url.endsWith("/") ? url : `${url}/`;

      return url;
    };
    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: getUrl(), // Redirecting dynamically while on dev and production environment
      },
    });

    if (error) {
      console.log(error.message, "Unepected error occurred while logging");
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">
      {/* Gradient Container */}
      <div className="relative flex w-96 rounded-xl">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_#78716c,_#1e1b4b,_#2563eb,_#0ea5e9)] opacity-30 blur-xl"></div>
        </div>
        <div className="relative z-10 w-96 items-center justify-center rounded-xl bg-transparent border border-gray-700 p-8 space-y-4 shadow-xl dark:shadow-gray-800 shadow-gray-300">
          <div className="flex w-full items-center justify-start">
            <article className="text-lg dark:text-gray-300 text-gray-900 font-sans font-normal">
              {" "}
              Welccome back.!
            </article>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center py-4">
            <KeyRound />
            <h1 className="text-2xl text-gray-50 font-bold font-sans">
              {" "}
              Sign In
            </h1>
          </div>
          {/* Form Start */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full items-center justify-center gap-6"
          >
            <input
              type="text"
              placeholder="User Name @example: John Doe"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-2 py-3 dark:text-gray-900 text-sm font-sans text-gray-900 bg-slate-100 dark:bg-gray-100 rounded-lg"
            />
            <div className="relative flex w-full items-center justify-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password @example: @#$123"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="w-full px-2 py-3 dark:text-gray-900 text-sm font-sans text-gray-900 bg-slate-100 dark:bg-gray-100 rounded-lg"
              />

              {/* Toggling Password Icon */}
              <div
                onClick={toggleShowPass}
                className="absolute right-4 cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff color="black" />
                ) : (
                  <Eye color="black" />
                )}
              </div>
              {/* Toggling Password Icon */}
            </div>
            <Button
              size={"lg"}
              className="transition duration-100 delay-100 ease-in-out hover:scale-105 hover:bg-gradient-to-t from-gray-600 to-green-500 text-lg font-sans font-semibold rounded-xl"
            >
              {loading ? (
                <Loader
                  className="animate-spin"
                  size={20}
                  textRendering={"Loading"}
                />
              ) : (
                "Sign In"
              )}
            </Button>
            {err && (
              <div className="flex w-full items-center justify-center text-center">
                <p className="text-red-500 text-sm font-sans font-normal">
                  <span className="text-red-500 text-lg font-sans font-semibold">
                    Error:{" "}
                  </span>
                  {err}
                </p>
              </div>
            )}
            <div className="relative flex w-full h-[1px] my-3 items-center justify-center dark:bg-gray-500 bg-gray-900">
              <div className="absolute -top-3 px-3 dark:bg-gray-500 bg-white rounded-full">
                <span className="dark:text-gray-100 text-gray-900 text-sm font-sans font-semibold">
                  Or
                </span>
              </div>
            </div>
            <p className="dark:text-gray-200 text-gray-800 text-sm font-sans font-normal">
              Sign in with your google account
            </p>
          </form>
          {/* Form End */}
          <div className="flex w-full gap-2 items-center justify-center">
            <Button
              onClick={() => handleSignInWithOAuth("google")}
              className="flex w-14 h-14 rounded-xl"
              variant={"outline"}
            >
              <FcGoogle size={40} />
            </Button>
            <Button
              onClick={() => handleSignInWithOAuth("github")}
              className="flex w-14 h-14 rounded-xl"
              variant={"outline"}
            >
              <FaGithub size={40} />
            </Button>
          </div>
        </div>
      </div>
      {/* Gradient Container */}
    </div>
  );
};

export default Auth;
