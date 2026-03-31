import React from "react";
import { useTranslation } from "react-i18next";
import { Shield } from "lucide-react";

const SecurityBadge = ({ title }) => {
  return (
    <div className="flex flex-col items-center text-center group cursor-pointer relative z-10">
      <div className="w-16 h-16 bg-[#4a4a5e] bg-opacity-40 rounded-xl flex items-center justify-center mb-3 group-hover:bg-opacity-60 transition-all duration-300 group-hover:scale-110 border border-white/5">
        <Shield className="w-8 h-8 text-white" />
      </div>
      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
        {title}
      </span>
    </div>
  );
};

const SecuritySection = () => {
  const { t } = useTranslation();
  const badges = ["FERPA", "HIPAA", "256-bit Encryption", "SOC 2 Type II"];

  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundColor: "#1c1c26", // Image ka dark base color
        backgroundImage: `
          radial-gradient(circle at center, rgba(67, 67, 90, 0.15) 0%, rgba(28, 28, 38, 1) 80%),
          url("data:image/svg+xml,%3Csvg width='1200' height='1200' viewBox='0 0 1200 1200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.03' stroke-width='1'%3E%3Ccircle cx='600' cy='1100' r='100'/%3E%3Ccircle cx='600' cy='1100' r='200'/%3E%3Ccircle cx='600' cy='1100' r='300'/%3E%3Ccircle cx='600' cy='1100' r='400'/%3E%3Ccircle cx='600' cy='1100' r='500'/%3E%3Ccircle cx='600' cy='1100' r='600'/%3E%3Ccircle cx='600' cy='1100' r='700'/%3E%3Ccircle cx='600' cy='1100' r='800'/%3E%3Ccircle cx='600' cy='1100' r='900'/%3E%3Ccircle cx='600' cy='1100' r='1000'/%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundPosition: "bottom center",
        backgroundSize: "cover"
      }}
    >
      {/* Glow Effect for center */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-3xl lg:text-5xl font-semibold text-white mb-4 tracking-tight">
            {t("security.title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            {t("security.subtitle")}
          </p>
        </div>

        {/* Security Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {badges.map((badge, index) => (
            <SecurityBadge key={index} title={badge} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;