'use client'
import React from "react";
import { ArrowUp } from "lucide-react";
import { SOCIAL_LINKS2 } from "@/data/Raw";
import Link from "next/link";

export default function Footer() {

  return (
    <div
      className="relative h-[400px] w-full bg-gray-100 dark:bg-[#333333]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed space-y-6 p-12 bottom-0 h-[400px] w-full">
        <div className="flex pl-3 justify-between items-center">
          <span>Ⓒ 2025</span>
          <div className="flex items-center gap-4">
            <span>BACK TO TOP</span>
            <button onClick={() => scrollTo({top:0,behavior:"smooth"})} className="bg-black p-4 rounded-full cursor-pointer">
              <ArrowUp className="text-white" />
            </button>
          </div>
        </div>

        <div className="text-center md:text-left">
          <span className="pl-3">HAVE A PROJECT IN MIND?</span>
          <h1 className="text-7xl md:text-9xl opacity-10 md:font-bold">LET'S TALK</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="pl-3 flex space-x-4">
            {SOCIAL_LINKS2.map(({ href, label }) => (
              <Link
                className="border border-gray-500 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out dark:hover:bg-white dark:hover:text-black py-2 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                aria-label={label}
                key={label}
              >
                {label}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-gray-400 pt-2 md:p-0 font-light">
              Development by{" "}
              <span className="dark:text-white text-black font-normal">
                Saurav KC
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
