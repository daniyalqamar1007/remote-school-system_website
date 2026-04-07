import { useTranslation } from "react-i18next";
import { Smartphone } from "lucide-react";
import { image } from "../../../assets/image";

const MobileAppsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-b from-[#1a1f3a] to-[#0a1128]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite 1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main card container */}
        <div className="relative group">
          {/* Gradient background on hover */}
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/30 via-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-2xl" />
          
          {/* Card content */}
          <div className="relative bg-gradient-to-br from-[#1a2550] to-[#0f1729] border-2 border-white/20 rounded-3xl overflow-hidden hover:border-white/40 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              {/* Left - Image */}
              <div className="relative h-60 sm:h-72 lg:h-80 flex items-center justify-center bg-gradient-to-tr from-teal-600/20 to-cyan-600/10 p-4 sm:p-6 lg:p-8 border-r border-white/10">
                <div className="relative w-full h-full flex items-center justify-center">
                  {image.mobile && (
                    <img 
                      src={image.mobile} 
                      alt="Mobile App" 
                      className="h-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500/15 to-transparent opacity-50 -z-10 blur-2xl" />
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-5 sm:p-6 lg:p-8 text-white space-y-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-teal-500/20 border-2 border-teal-400/60 rounded-full px-5 py-3 w-fit hover:bg-teal-500/30 hover:border-teal-300/80 transition-all duration-300 cursor-pointer transform hover:scale-105 group">
                  <Smartphone className="w-5 h-5 text-teal-300 group-hover:text-teal-200 transition-colors" />
                  <span className="text-sm font-semibold text-teal-200 group-hover:text-teal-100 transition-colors">Mobile Experience</span>
                </div>

                {/* Heading */}
                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white drop-shadow-lg">
                    {t("mobileApps.title")}
                  </h2>
                  <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                    {t("mobileApps.titleLine2")}
                  </p>
                </div>

                {/* Description */}
                <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-md drop-shadow-md font-semibold">
                  {t("mobileApps.subtitle")}
                </p>

                {/* Feature list */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-white/90 font-semibold text-sm">
                    <div className="w-2 h-2 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full" />
                    <span>Native iOS & Android Apps</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 font-semibold text-sm">
                    <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full" />
                    <span>Real-time Push Notifications</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 font-semibold text-sm">
                    <div className="w-2 h-2 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full" />
                    <span>Lightning-Fast Performance</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppsSection;
