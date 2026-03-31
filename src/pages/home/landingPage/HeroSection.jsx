import { useTranslation } from "react-i18next";
import { image } from "../../../assets/image";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden min-h-[600px]">
      <div className="absolute inset-0">
        <img
          src={image.heroBackground}
          alt=""
          className="w-full h-full object-cover object-[center_top] min-w-full min-h-full"
          style={{ imageRendering: "auto" }}
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-white z-10 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic leading-tight tracking-tight text-shadow">
              {t("hero.title")}
              <br />
              <span className="block mt-2">{t("hero.titleLine2")}</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/95 italic max-w-xl text-shadow">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="relative px-8 py-4 rounded-lg font-semibold text-purple-700 text-lg overflow-hidden group transition-all duration-300 hover:scale-105 border border-white/50">
                <span className="absolute inset-0 bg-gradient-to-r from-white/30 via-[#F8FAFF]/80 to-[#5F8FF]/90 opacity-100"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-[#F8FAFF]/60 to-[#5F8FF]/70 blur-lg opacity-80"></span>
                <span className="relative z-10">{t("hero.requestDemo")}</span>
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20">
                {t("hero.startTrial")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
