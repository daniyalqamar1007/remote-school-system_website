import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a1128] via-[#1a1f3a] to-[#0f1729] overflow-hidden flex items-center">
      {/* Animated vibrant gradient orbs - Optimized */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-300 rounded-full blur-2xl -z-10 opacity-15" style={{ animation: "pulse 4s ease-in-out infinite" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400 to-blue-300 rounded-full blur-2xl -z-10 opacity-15" style={{ animation: "pulse 4s ease-in-out infinite 1s" }} />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-300 rounded-full blur-2xl -z-10 opacity-10" style={{ animation: "pulse 4s ease-in-out infinite 0.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-auto lg:min-h-[500px]">
          {/* Left Content */}
          <div className="space-y-5 order-1 lg:order-1">
            {/* Badge - Interactive */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-2 border-teal-400/60 rounded-full px-5 py-3 w-fit hover:from-teal-500/30 hover:to-cyan-500/30 hover:border-teal-300/80 transition-all duration-300 cursor-pointer transform hover:scale-105 group">
              <Sparkles className="w-5 h-5 text-teal-300 group-hover:text-teal-200 transition-colors" />
              <span className="text-sm font-semibold text-teal-200 group-hover:text-teal-100 transition-colors">{t("hero.title") ? "✨ Modern Education Management" : "✨ AI-Powered Learning"}</span>
            </div>

            {/* Main Heading - Ultra Visible */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white drop-shadow-lg">
                <span className="block">{t("hero.title")}</span>
                <span className="block mt-3 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-xl">
                  {t("hero.titleLine2")}
                </span>
              </h1>
            </div>

            {/* Subtitle - Clear & Bright */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-lg leading-relaxed font-medium drop-shadow-md">
              {t("hero.subtitle")}
            </p>

            {/* Trust indicators - Visible */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-teal-500/15 px-4 py-2 rounded-lg border border-teal-400/40">
                <div className="w-3 h-3 bg-teal-300 rounded-full" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                <span className="text-teal-100 font-semibold">Trusted by 10K+ Schools</span>
              </div>
              <div className="flex items-center gap-2 bg-cyan-500/15 px-4 py-2 rounded-lg border border-cyan-400/40">
                <div className="w-3 h-3 bg-cyan-300 rounded-full" style={{ animation: "pulse 2s ease-in-out infinite 0.5s" }} />
                <span className="text-cyan-100 font-semibold">99.9% Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive 3D Cards */}
          <div className="hidden lg:flex items-center justify-center order-2 lg:order-2">
            <div className="relative w-full h-full flex items-center justify-center perspective">
              <div className="relative w-72 h-72">
                {/* Glowing center */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl" style={{ animation: "pulse 4s ease-in-out infinite" }} />
                
                {/* Card 1 - Teal */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 bg-gradient-to-br from-teal-400/95 to-cyan-400/90 backdrop-blur-md border-2 border-white/40 rounded-lg p-4 shadow-lg hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 cursor-pointer group will-change-transform" style={{ animation: "float 6s ease-in-out infinite" }}>
                  <div className="w-full h-20 bg-gradient-to-br from-white/30 to-white/10 rounded-lg group-hover:from-white/50 group-hover:to-white/20 transition-all" />
                  <div className="mt-3 h-2 bg-white/50 rounded w-3/4 group-hover:bg-white/70 transition-all" />
                </div>

                {/* Card 2 - Orange/Amber */}
                <div className="absolute bottom-6 right-0 w-40 bg-gradient-to-br from-amber-400/95 to-orange-400/90 backdrop-blur-md border-2 border-white/40 rounded-lg p-4 shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 cursor-pointer group will-change-transform" style={{ animation: "float 6s ease-in-out infinite 1s" }}>
                  <div className="w-full h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-lg group-hover:from-white/50 group-hover:to-white/20 transition-all" />
                  <div className="mt-2 h-1.5 bg-white/50 rounded w-2/3 group-hover:bg-white/70 transition-all" />
                </div>

                {/* Card 3 - Blue/Purple */}
                <div className="absolute bottom-10 left-0 w-36 bg-gradient-to-br from-blue-400/95 to-indigo-400/90 backdrop-blur-md border-2 border-white/40 rounded-lg p-4 shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 cursor-pointer group will-change-transform" style={{ animation: "float 6s ease-in-out infinite 2s" }}>
                  <div className="w-full h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-lg group-hover:from-white/50 group-hover:to-white/20 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
