import React from "react";
import { useTranslation } from "react-i18next";
import { Calendar, Users, Zap, CheckCircle } from "lucide-react";

const CTASection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-[#0a1128] via-[#1a1f3a] to-[#0a1128]">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/15 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite 1s" }} />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite 0.5s" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,184,166,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 leading-tight drop-shadow-lg">
          Ready to Transform <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">Your School?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-semibold">
          {t("cta.subtitle")}
        </p>

        {/* Quick stats before CTA */}
        <div className="grid md:grid-cols-3 gap-4 mb-12 py-6 border-y-2 border-white/20">
          <div className="group flex items-center justify-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 cursor-pointer">
            <Zap className="w-5 h-5 text-teal-300 group-hover:text-teal-200 drop-shadow-lg transition-colors" />
            <div className="text-left">
              <div className="text-white/60 font-semibold text-xs">Fast Deployment</div>
              <div className="text-lg font-black text-white drop-shadow-md">30 mins</div>
            </div>
          </div>
          <div className="group flex items-center justify-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 cursor-pointer">
            <Users className="w-5 h-5 text-cyan-300 group-hover:text-cyan-200 drop-shadow-lg transition-colors" />
            <div className="text-left">
              <div className="text-white/60 font-semibold text-xs">Active Users</div>
              <div className="text-lg font-black text-white drop-shadow-md">10K+</div>
            </div>
          </div>
          <div className="group flex items-center justify-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 cursor-pointer">
            <Calendar className="w-5 h-5 text-teal-300 group-hover:text-teal-200 drop-shadow-lg transition-colors" />
            <div className="text-left">
              <div className="text-white/60 font-semibold text-xs">24/7 Support</div>
              <div className="text-lg font-black text-white drop-shadow-md">Always On</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/20" />

        {/* Trust indicators */}
        <div className="space-y-3">
          <p className="text-white/80 text-sm font-semibold drop-shadow-md">Trusted by leading educational institutions worldwide</p>
          <div className="flex items-center justify-center gap-4 flex-wrap justify-center">
            <div className="group flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/30 transition-all cursor-pointer transform hover:scale-105">
              <div className="text-yellow-300 text-sm">⭐</div>
              <span className="text-white font-bold text-xs">4.9/5 Rating</span>
            </div>
            <div className="group flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/30 transition-all cursor-pointer transform hover:scale-105">
              <CheckCircle className="w-4 h-4 text-teal-300" />
              <span className="text-white font-bold text-xs">99.9% Uptime SLA</span>
            </div>
            <div className="group flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/30 transition-all cursor-pointer transform hover:scale-105">
              <Zap className="w-4 h-4 text-cyan-300" />
              <span className="text-white font-bold text-xs">SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
