"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BreadCrumb = () => {
  const pathName = usePathname() || '/';
  const pathSegment = pathName.split("/").filter(Boolean);

  if (pathSegment.length === 0) {
    return (
      <div className="flex gap-2 bg-green-500">
        <span className="text-gray-50 text-sm font-sans font-medium">Home</span>
      </div>
    );
  }

  return (
    <div className="flex gap-2 bg-gray-500">
      <Link href="/" className="text-gray-50 text-sm font-sans font-medium">
        Home
      </Link>
      {pathSegment.map((segment, index) => {
        const path = "/" + pathSegment.slice(0, index + 1).join("/");
        const isLast = index === pathSegment.length - 1;
        return isLast ? (
          <span
            key={index}
            className="text-gray-50 text-sm font-sans font-medium"
          >
            {segment}
          </span>
        ) : (
          <Link
            href={path}
            key={index}
            className="text-gray-50 text-sm font-sans font-medium"
          >
            {segment}
          </Link>
        );
      })}
    </div>
  );
};
