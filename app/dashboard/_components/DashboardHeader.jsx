"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function DashboardHeader() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Force redirect to home page after signout
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="p-4 border-b border-gray-200 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">AI Learning Dashboard</h1>
      <div className="flex items-center gap-6">
        <a href="/dashboard">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-2 rounded-md shadow">
            Dashboard
          </Button>
        </a>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-10 h-10 border-2 border-gray-300 shadow-sm",
            },
          }}
          signOutCallback={handleSignOut}
        />
      </div>
    </header>
  );
}

export default DashboardHeader;
