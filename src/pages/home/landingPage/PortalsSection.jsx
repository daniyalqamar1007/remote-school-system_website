import React from "react";
import { useTranslation } from "react-i18next";
import { Users, BookOpen, GraduationCap, Heart, Shield, DollarSign, School, Crown, ArrowRight } from "lucide-react";

const PortalCard = ({ icon: Icon, title, bgGradient, textColor, index }) => {
  return (
    <div className="group relative h-full cursor-pointer">
      {/* Animated glow effect */}
      <div className={`absolute -inset-0.5 ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-lg`} />
      
      {/* Card */}
      <div className={`relative h-full ${bgGradient} rounded-lg p-4 sm:p-5 flex flex-col items-center justify-center text-white transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2 hover:shadow-lg min-h-[120px] sm:min-h-[140px]`}>
        <div className="p-3 rounded-lg bg-white/20 mb-2 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
          <Icon className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
        <h3 className="text-xs sm:text-sm font-bold text-center leading-snug text-white drop-shadow-md">{title}</h3>
        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5">
          <div className="flex items-center gap-1 text-white/80 group-hover:text-white font-semibold text-xs">
            Explore
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PortalsSection = () => {
  const { t } = useTranslation();
  const portalsRow1 = [
    { icon: Users, titleKey: "portals.parentPortal", bgGradient: "bg-gradient-to-br from-pink-500 via-pink-600 to-rose-700" },
    { icon: BookOpen, titleKey: "portals.studentPortal", bgGradient: "bg-gradient-to-br from-orange-500 via-orange-600 to-red-700" },
    { icon: GraduationCap, titleKey: "portals.teacherPortal", bgGradient: "bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-700" },
    { icon: Heart, titleKey: "portals.nursePortal", bgGradient: "bg-gradient-to-br from-red-500 via-pink-600 to-rose-700" },
    { icon: Shield, titleKey: "portals.athletePortal", bgGradient: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700" },
    { icon: DollarSign, titleKey: "portals.clubsHonorRoll", bgGradient: "bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-700" },
    { icon: School, titleKey: "portals.adminPortal", bgGradient: "bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700" },
    { icon: Crown, titleKey: "portals.superAdmin", bgGradient: "bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#1a1f3a] to-[#0a1128] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite 1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-lg">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Multiple Portals
            </span>
            <br/>
            <span className="text-white">One Powerful Platform</span>
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto drop-shadow-md font-semibold">
            Tailored dashboards for every role in your institution
          </p>
        </div>

        {/* Portal cards grid */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {portalsRow1.map((portal, index) => (
              <PortalCard
                key={index}
                icon={portal.icon}
                title={t(portal.titleKey)}
                bgGradient={portal.bgGradient}
                index={index}
              />
            ))}
          </div>

          {/* Special SIS Core Card */}
          <div className="group relative mt-6 cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 via-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />
            <div className="relative bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-700 rounded-2xl p-8 flex flex-col items-center justify-center text-white transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2 min-h-[140px] hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <School className="w-8 h-8 text-white drop-shadow-lg" />
                <h3 className="text-2xl font-bold drop-shadow-md">{t("portals.sisCore")}</h3>
              </div>
              <p className="text-white/90 text-center font-semibold drop-shadow-md">
                {t("portals.sisCoreDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-14">
          <button className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 hover:from-teal-300 hover:via-cyan-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 text-lg shadow-2xl hover:shadow-teal-500/50 drop-shadow-lg">
            Explore All Features
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortalsSection;
