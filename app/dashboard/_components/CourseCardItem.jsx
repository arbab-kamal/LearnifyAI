"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RefreshCw, ChevronRight, Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CourseCardItem({ course }) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div>
        <div className="flex justify-between items-center">
          <div className="relative">
            <Image
              src={"/knowledge.png"}
              alt="course icon"
              width={50}
              height={50}
              className="drop-shadow-sm"
            />
            <div className="absolute -top-1 -right-1">
              <Brain className="w-4 h-4 text-blue-500" />
            </div>
          </div>
          <h2 className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 border border-blue-300">
            20 Dec 2024
          </h2>
        </div>

        <h2 className="mt-4 font-medium text-lg text-gray-800">
          {course?.courseLayout?.course_title}
        </h2>

        <p className="text-sm line-clamp-2 text-gray-600 mt-2">
          {course?.courseLayout?.course_summary}
        </p>

        <div className="mt-4">
          <Progress value={0} className="h-1.5 bg-gray-200" />
        </div>

        <div className="mt-4 flex justify-end">
          {course?.status === "Generating" ? (
            <div className="text-sm px-3 py-1.5 flex gap-2 items-center rounded-full bg-gray-100 text-gray-600 border border-gray-300">
              <RefreshCw className="h-4 w-4 animate-spin" />
              Generating...
            </div>
          ) : (
            <Link href={"/course/" + course?.courseId}>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                View Course
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCardItem;
