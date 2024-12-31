"use client";
import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";

function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Add a subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="transform hover:-translate-y-1 transition-transform duration-300">
          <WelcomeBanner />
        </div>

        {/* Courses Section */}
        <div className="bg-gray-50 rounded-xl border border-gray-300 p-6 shadow-md">
          <CourseList />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-0 right-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
    </div>
  );
}

export default Dashboard;
