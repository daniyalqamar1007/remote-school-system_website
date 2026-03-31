import React from "react";
import {
  Users,
  BookOpen,
  GraduationCap,
  Heart,
  Shield,
  Crown,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoleCard = ({ icon: Icon, title, description, bgGradient, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${bgGradient} rounded-2xl p-8 cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group`}
    >
      <div className="flex flex-col items-center text-center text-white">
        <div className="w-16 h-16 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-40 transition-all duration-300">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-sm text-white text-opacity-90 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const SelectRolePage = () => {
  const navigate = useNavigate();
  const roles = [
    {
      icon: Users,
      title: "Parent Login",
      description:
        "Access your child's grades, attendance, and communicate with teachers",
      bgGradient: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500",
    },
    {
      icon: BookOpen,
      title: "Student Login",
      description:
        "View assignments, grades, schedule, and school announcements",
      bgGradient: "bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600",
    },
    {
      icon: GraduationCap,
      title: "Teacher Login",
      description:
        "Manage classes, grades, attendance, and communicate with families",
      bgGradient: "bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-500",
    },
    {
      icon: Heart,
      title: "Nurse Login",
      description: "Access medical records, medications, and health incidents",
      bgGradient:
        "bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Admin Login",
      description: "School-level administration and reporting",
      bgGradient:
        "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500",
    },
    {
      icon: Crown,
      title: "Super Admin Login",
      description: "District-level management and system configuration",
      bgGradient: "bg-gradient-to-br from-green-400 via-green-500 to-green-600",
    },
  ];

  const handleRoleClick = (title) => {
    console.log(`Selected role: ${title}`);
    // Here you would navigate to the respective login page
  };

  const handleBackToHome = () => {
    navigate("/");
    console.log("Back to Home clicked");
    // Navigate to home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-1 mb-4">
            Select Your Role
          </h1>
          <p className="text-base sm:text-lg text-dark-2">
            Choose your portal to access your dashboard
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => (
            <RoleCard
              key={index}
              icon={role.icon}
              title={role.title}
              description={role.description}
              bgGradient={role.bgGradient}
              onClick={() => handleRoleClick(role.title)}
            />
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-dark-2 hover:text-blue-accent-1 font-medium text-sm transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectRolePage;
