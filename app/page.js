"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import {
  CheckIcon,
  ArrowRight,
  Star,
  BookOpen,
  Brain,
  Code,
  Zap,
  Target,
  Users,
  Trophy,
  ChevronRight,
  Play,
  Sparkles,
  GraduationCap,
  BarChart,
  Clock,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    image: "/sophia.jpg",
    content:
      "Learnify AI has transformed how I approach learning. The personalized study paths are incredible!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    image: "/michael.jpg",
    content:
      "The AI-powered quizzes adapt perfectly to my knowledge gaps. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Student",
    image: "/elena.jpg",
    content:
      "Finally found a learning platform that understands my needs. The smart flashcards are amazing!",
    rating: 5,
  },
];

const TestimonialCard = ({ review }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-2xl shadow-xl"
  >
    <div className="flex items-center mb-4">
      <Image
        src={review.image}
        alt={review.name}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="ml-4">
        <h4 className="font-semibold">{review.name}</h4>
        <p className="text-gray-600 text-sm">{review.role}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-4">{review.content}</p>
    <div className="flex text-yellow-400">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  </motion.div>
);

const FeatureShowcase = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 rounded-2xl bg-white shadow-xl border border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 transform -skew-y-12 group-hover:skew-y-12 transition-transform" />
        <div className="relative z-10">
          <feature.icon className="w-12 h-12 mb-4 text-blue-600" />
          <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4"
            >
              <Button variant="outline" className="group">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const VideoModal = ({ isOpen, onClose }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-[800px]">
      <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
        <img
          src="/api/placeholder/800/450"
          alt="Demo video placeholder"
          className="rounded-lg"
        />
      </div>
    </DialogContent>
  </Dialog>
);

const LearningPathCard = ({ path }) => (
  <Card className="p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-lg bg-blue-100">
        <path.icon className="w-6 h-6 text-blue-600" />
      </div>
      <h4 className="ml-3 font-semibold">{path.title}</h4>
    </div>
    <p className="text-gray-600 mb-4">{path.description}</p>
    <div className="flex items-center text-sm text-gray-500">
      <Clock className="w-4 h-4 mr-1" />
      <span>{path.duration}</span>
    </div>
  </Card>
);

const PricingCard = ({ plan }) => (
  <Card className="p-8 relative hover:shadow-xl transition-all duration-300">
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </span>
      </div>
    )}
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-gray-600 mb-4">{plan.description}</p>
      <div className="mb-4">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="text-gray-600">/month</span>
      </div>
    </div>
    <ul className="space-y-4 mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="w-5 h-5 text-green-500 mr-2" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      className={`w-full ${
        plan.popular
          ? "bg-blue-600 hover:bg-blue-700"
          : "bg-gray-800 hover:bg-gray-900"
      }`}
    >
      Get Started
    </Button>
  </Card>
);

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning Paths",
      description:
        "Customized learning journeys that adapt to your pace and style",
    },
    {
      icon: Target,
      title: "Smart Assessment",
      description: "Real-time feedback and personalized recommendations",
    },
    {
      icon: Sparkles,
      title: "Interactive Exercises",
      description: "Engaging practice sessions with instant AI feedback",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Connect with peers and learn together effectively",
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Gamified learning experience with rewards and badges",
    },
    {
      icon: BarChart,
      title: "Progress Analytics",
      description: "Detailed insights into your learning journey",
    },
  ];

  const learningPaths = [
    {
      icon: Code,
      title: "Programming Fundamentals",
      description: "Master the basics of coding with hands-on projects",
      duration: "8 weeks",
    },
    {
      icon: GraduationCap,
      title: "Data Science Essentials",
      description: "Learn data analysis and machine learning",
      duration: "12 weeks",
    },
    {
      icon: BookOpen,
      title: "Language Learning",
      description: "Accelerate your language acquisition",
      duration: "10 weeks",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "0",
      description: "Perfect for beginners",
      features: [
        "Access to basic courses",
        "Limited AI assessments",
        "Community support",
        "Basic progress tracking",
      ],
    },
    {
      name: "Pro",
      price: "29",
      description: "For serious learners",
      popular: true,
      features: [
        "Unlimited access to all courses",
        "Advanced AI-powered learning",
        "Priority support",
        "Detailed analytics",
        "Custom learning paths",
        "Interview preparation",
      ],
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team management",
        "Custom content creation",
        "API access",
        "Dedicated support",
        "Advanced reporting",
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="backdrop-blur-lg bg-white/80 fixed w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/dashboard" className="flex items-center gap-3">
            <Image alt="logo" width="40" height="40" src="/logo.svg" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Learnify AI
            </span>
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6">
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
              <a href="#paths" className="text-gray-600 hover:text-blue-600">
                Learning Paths
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">
                Pricing
              </a>
            </nav>
            <UserButton afterSignOutUrl="/" />
            <a href="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Alert className="mb-6 max-w-lg mx-auto">
            <Zap className="h-4 w-4" />
            <AlertDescription>
              New: AI-powered interview preparation now available!
            </AlertDescription>
          </Alert>

          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
            Transform Your Learning Journey with AI
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Experience personalized learning powered by advanced AI. Master new
            skills faster with adaptive courses, smart assessments, and
            real-time feedback.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Start Learning Now
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Features</h2>
            <p className="text-xl text-gray-600">
              Discover how AI transforms your learning experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureShowcase key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Learning Paths Section */}
      <div id="paths" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Learning Paths</h2>
            <p className="text-xl text-gray-600">
              Choose your journey and start learning today
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <LearningPathCard key={index} path={path} />
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div
        id="pricing"
        className="py-20 px-6 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your learning journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">
              Hear how Learnify AI has transformed learning journeys
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-lg">
              <AnimatePresence mode="wait">
                <TestimonialCard
                  key={activeTestimonial}
                  review={reviews[activeTestimonial]}
                />
              </AnimatePresence>
              <div className="flex justify-center gap-2 mt-6">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      activeTestimonial === index
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-12 px-6 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Learnify AI</h3>
            <p className="text-gray-400">
              Revolutionizing education with cutting-edge AI technology. Join
              the learning revolution today!
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400">
              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#paths" className="hover:text-white">
                  Learning Paths
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:support@learnify.ai"
                className="text-blue-400 hover:underline"
              >
                support@learnify.ai
              </a>
            </p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Learnify AI. All rights reserved.
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  );
}
