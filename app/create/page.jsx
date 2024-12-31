"use client";
import React, { useState } from "react";
import SelectOption from "./_components/SelectOption";
import { Button } from "@/components/ui/button";
import TopicInput from "./_components/TopicInput";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader } from "lucide-react";

function Create() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    studyType: "",
    topic: "",
    difficultyLevel: "",
  });
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const generateCourseOutline = async () => {
    setLoading(true);
    const courseId = uuidv4();

    const requestData = {
      courseId,
      ...formData,
      createdBy: user.primaryEmailAddress.emailAddress,
    };

    await axios.post("/api/generate-course-outline", requestData);
    setLoading(false);
    router.replace("/dashboard");
    toast("Your course content is generating. Click on the Refresh button.");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md">
        <h1 className="text-center font-extrabold text-3xl sm:text-4xl">
          Build Your AI-Powered Study Material
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center p-6 md:px-16 lg:px-24 mt-12 w-full">
        {/* Step Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
          {step === 0 ? "Choose Your Study Type" : "Customize Your Study Plan"}
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          {step === 0
            ? "Select the type of study material you need."
            : "Enter your topic and choose a difficulty level."}
        </p>

        {/* Step Content */}
        <div className="mt-8 w-full max-w-3xl p-6 rounded-lg shadow-lg bg-gray-50">
          {step === 0 ? (
            <SelectOption
              selectedStudyType={(value) => handleUserInput("studyType", value)}
            />
          ) : (
            <TopicInput
              setTopic={(value) => handleUserInput("topic", value)}
              setDifficultyLevel={(value) =>
                handleUserInput("difficultyLevel", value)
              }
            />
          )}
        </div>

        {/* Step Navigation */}
        <div className="flex justify-between w-full max-w-3xl mt-12">
          {step !== 0 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Previous
            </Button>
          )}
          {step === 0 ? (
            <Button
              onClick={() => setStep(step + 1)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md hover:from-purple-400 hover:to-blue-400"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={generateCourseOutline}
              disabled={loading}
              className="bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-md hover:from-teal-400 hover:to-green-400 min-w-[120px] flex items-center justify-center"
            >
              {loading ? <Loader className="animate-spin" /> : "Generate"}
            </Button>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 w-full py-4 bg-gray-100 text-center text-sm text-gray-500">
        <p>&copy; 2024 AI Learning Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Create;
