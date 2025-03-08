import { RiAccountCircleLine, RiAtLine, RiHome8Line, RiMacbookLine } from "@remixicon/react";
import React from "react";

const BottomNav = () => {
  return (
    <div className="flex items-center justify-center fixed bottom-5 w-full z-50">
      <div className="w-full max-w-[80%] sm:max-w-md  mx-auto">
        <div className="bg-[var(--nav-bg)] shadow-lg rounded-2xl">
          <div className="flex">
            <div className="flex-1 group">
              <a
                href="#"
                className="flex items-end justify-center text-center mx-auto pt-2 w-full text-gray-400 group-hover:text-indigo-500"
              >
                <span className="flex flex-col justify-center items-center px-1 pt-1 pb-1">
                  <RiHome8Line className="text-2xl pt-1 mb-1 block" />
                  <span className="block text-xs pb-2">Home</span>
                  <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                </span>
              </a>
            </div>
            <div className="flex-1 group">
              <a
                href="#"
                className="flex items-end justify-center text-center mx-auto pt-2 w-full text-gray-400 group-hover:text-indigo-500"
              >
                <span className="flex flex-col justify-center items-center px-1 pt-1 pb-1">
                  <RiAccountCircleLine className="text-2xl pt-1 mb-1 block" />
                  <span className="block text-xs pb-2">About</span>
                  <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                </span>
              </a>
            </div>
            <div className="flex-1 group">
              <a
                href="#"
                className="flex items-end justify-center text-center mx-auto pt-2 w-full text-gray-400 group-hover:text-indigo-500"
              >
                <span className="flex flex-col justify-center items-center px-1 pt-1 pb-1">
                  <RiMacbookLine className="text-2xl pt-1 mb-1 block" />
                  <span className="block text-xs pb-2">Projects</span>
                  <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                </span>
              </a>
            </div>
            <div className="flex-1 group">
              <a
                href="#"
                className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
              >
                <span className="flex flex-col justify-center items-center px-1 pt-1 pb-1">
                  <RiAtLine className="text-2xl pt-1 mb-1 block" />
                  <span className="block text-xs pb-2">Contact</span>
                  <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
