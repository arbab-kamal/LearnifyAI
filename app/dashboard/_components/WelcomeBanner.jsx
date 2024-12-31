"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { Sparkles } from "lucide-react";

function WelcomeBanner() {
  const { user } = useUser();

  return (
    <div
      className="p-8 bg-white w-full text-gray-800 rounded-xl 
      shadow-lg border border-gray-200"
    >
      <div className="flex items-center gap-8">
        <div className="relative">
          <Image
            src={"/laptop.png"}
            alt="laptop"
            width={120}
            height={120}
            className="drop-shadow-md"
          />
          <div className="absolute -top-2 -right-2 animate-pulse">
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-3xl bg-gradient-to-r from-gray-800 to-gray-600 inline-block text-transparent bg-clip-text">
              Hello, {user?.fullName}
            </h2>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full border border-gray-300">
              AI Student
            </span>
          </div>
          <p className="text-gray-600">
            Ready to enhance your learning journey with AI-powered study
            materials?
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
