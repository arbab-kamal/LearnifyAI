"use client";
import { CourseCountContext } from "@/app/_context/CourseCountContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LayoutDashboard, Shield, UserCircle, Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

function SideBar() {
  const MenuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Upgrade Plan",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
    {
      name: "My Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];
  const { totalCourse, setTotalCourse } = useContext(CourseCountContext);
  const path = usePathname();

  return (
    <div className="h-screen bg-white p-6 text-gray-800 relative border-r border-gray-200">
      {/* Logo Section */}
      <div className="flex gap-3 items-center">
        <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        <h2 className="font-bold text-2xl text-gray-800">LearnifyAI</h2>
      </div>

      {/* Create New Button */}
      <div className="mt-10">
        <Link href={"/create"} className="w-full">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white border border-blue-600">
            <Brain className="w-4 h-4 mr-2" />
            Create with AI
          </Button>
        </Link>

        {/* Menu Items */}
        <div className="mt-8 space-y-2">
          {MenuList.map((menu, index) => (
            <Link href={menu.path} key={index}>
              <div
                className={`flex gap-4 items-center p-3 rounded-lg cursor-pointer mt-3
                                transition-all duration-200 
                                ${
                                  path === menu.path
                                    ? "bg-gray-100 border border-gray-300 shadow-sm"
                                    : "hover:bg-gray-200 border border-transparent"
                                }`}
              >
                <menu.icon
                  className={`w-5 h-5 ${
                    path === menu.path ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                <h2
                  className={
                    path === menu.path ? "text-blue-600" : "text-gray-600"
                  }
                >
                  {menu.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Credits Card */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="border border-gray-300 bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg text-gray-700">AI Credits</h2>
            <span className="text-lg font-semibold text-blue-600">
              {5 - totalCourse}
            </span>
          </div>
          <Progress
            value={(totalCourse / 5) * 100}
            className="bg-gray-200 h-2"
          />
          <h2 className="text-sm text-gray-500 mt-2">
            {totalCourse} out of 5 AI Credits Used
          </h2>
          <Link
            href={"/dashboard/upgrade"}
            className="mt-3 block text-sm text-blue-600 hover:underline transition-all"
          >
            ✨ Upgrade for unlimited AI access
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
