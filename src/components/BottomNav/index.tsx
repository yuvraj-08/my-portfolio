"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiHome8Line,
  RiAccountCircleLine,
  RiMacbookLine,
  RiAtLine,
} from "@remixicon/react";

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const BottomNav: React.FC = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      path: "/",
      label: "Home",
      icon: <RiHome8Line className="text-2xl pt-1 mb-1 block" />,
    },
    {
      path: "/about",
      label: "About",
      icon: <RiAccountCircleLine className="text-2xl pt-1 mb-1 block" />,
    },
    {
      path: "/projects",
      label: "Projects",
      icon: <RiMacbookLine className="text-2xl pt-1 mb-1 block" />,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <RiAtLine className="text-2xl pt-1 mb-1 block" />,
    },
  ];

  return (
    <div className="flex items-center justify-center fixed bottom-5 w-full z-50">
      <div className="w-full max-w-[80%] sm:max-w-md mx-auto">
        <div className="bg-slate-800/80 backdrop-blur-sm shadow-lg rounded-2xl border border-slate-700">
          <div className="flex">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <div key={item.path} className="flex-1 group">
                  <Link
                    href={item.path}
                    className={`flex items-end justify-center text-center mx-auto pt-2 w-full ${
                      isActive
                        ? "text-purple-400"
                        : "text-slate-400 group-hover:text-purple-400"
                    }`}
                  >
                    <span className="flex flex-col justify-center items-center px-1 pt-1 pb-1">
                      {item.icon}
                      <span className="block text-xs pb-2">{item.label}</span>
                      <span
                        className={`block w-5 mx-auto h-1 rounded-full ${
                          isActive
                            ? "bg-gradient-to-r from-purple-500 to-blue-500"
                            : "group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500"
                        }`}
                      />
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
