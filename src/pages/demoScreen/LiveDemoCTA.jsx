import React from "react";
import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";

const LiveDemoCTA = () => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1128] to-[#081027] py-12 sm:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-cyan-500/10 blur-2xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-teal-500/20 via-cyan-500/15 to-blue-500/20 p-8 sm:p-10 lg:p-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-100 mb-4">
            <Calendar className="w-4 h-4" />
            Live Product Tour
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
            {t("demo.liveDemoTitle")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-100/95 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("demo.liveDemoSubtitle")}
          </p>
          <button className="bg-white text-cyan-700 px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base hover:bg-slate-100 transition-colors duration-300 shadow-md inline-flex items-center gap-2">
            {t("demo.scheduleLiveDemo")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoCTA;
