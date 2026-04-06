import React from "react";
import { useTranslation } from "react-i18next";
import { Lock, CheckCircle, Shield, Key } from "lucide-react";

const SecurityBadge = ({ title, index, icon: Icon }) => {
  const colors = [
    "from-teal-500 to-cyan-600",
    "from-cyan-500 to-blue-600",
    "from-blue-500 to-indigo-600",
    "from-indigo-500 to-purple-600"
  ];

  return (
    <div className="group relative cursor-pointer">
      {/* Gradient background on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${colors[index]} opacity-40 group-hover:opacity-70 transition-opacity rounded-2xl blur-lg`} />
      
      {/* Badge content */}
      <div className="relative flex flex-col items-center text-center p-4 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 group-hover:border-white/40 rounded-lg hover:scale-105 transition-all duration-300 transform group-hover:-translate-y-1">
        <div className={`w-14 h-14 bg-gradient-to-br ${colors[index]} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-all duration-300 shadow-lg drop-shadow-lg`}>
          <Icon className="w-7 h-7 text-white drop-shadow-lg" />
        </div>
        <span className="text-white font-bold text-xs sm:text-sm leading-tight drop-shadow-md">
          {title}
        </span>
      </div>
    </div>
  );
};

const SecuritySection = () => {
  const { t } = useTranslation();
  const badges = [
    { title: "FERPA", icon: Lock },
    { title: "HIPAA", icon: Shield },
    { title: "256-bit Encryption", icon: Key },
    { title: "SOC 2 Type II", icon: CheckCircle }
  ];

  return (
    <section 
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundColor: "#0a1128",
        backgroundImage: `
          radial-gradient(circle at center, rgba(20, 184, 166, 0.08) 0%, rgba(10, 17, 40, 1) 70%),
          url("data:image/svg+xml,%3Csvg width='1200' height='1200' viewBox='0 0 1200 1200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1'%3E%3Ccircle cx='600' cy='600' r='100'/%3E%3Ccircle cx='600' cy='600' r='200'/%3E%3Ccircle cx='600' cy='600' r='300'/%3E%3Ccircle cx='600' cy='600' r='400'/%3E%3Ccircle cx='600' cy='600' r='500'/%3E%3Ccircle cx='600' cy='600' r='600'/%3E%3Ccircle cx='600' cy='600' r='700'/%3E%3Ccircle cx='600' cy='600' r='800'/%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-12 w-72 h-72 bg-teal-500/10 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite" }} />
      <div className="absolute bottom-20 right-12 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite 1s" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-teal-500/20 border-2 border-teal-400/60 rounded-full px-4 py-2 mb-6 group hover:bg-teal-500/30 hover:border-teal-300/80 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <Lock className="w-4 h-4 text-teal-300 group-hover:text-teal-200 transition-colors" />
            <span className="text-xs font-bold text-teal-200 group-hover:text-teal-100 transition-colors">Enterprise Security</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-lg leading-tight">
            Your Data is <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">Secure & Protected</span>
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-md font-semibold">
            {t("security.subtitle")}
          </p>
        </div>

        {/* Security Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {badges.map((badge, index) => (
            <SecurityBadge key={index} title={badge.title} index={index} icon={badge.icon} />
          ))}
        </div>

        {/* Additional security info */}
        <div className="mt-16 pt-16 border-t-2 border-white/20">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group text-center relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-lg" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 group-hover:border-white/40 rounded-2xl p-8 hover:scale-105 transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-4 mb-4 group-hover:scale-125 transition-transform duration-300 inline-block shadow-lg">
                  <Lock className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="font-bold text-white text-xl mb-2 drop-shadow-md">End-to-End Encryption</h3>
                <p className="text-white/80 font-semibold drop-shadow-md">All data encrypted in transit and at rest</p>
              </div>
            </div>

            <div className="group text-center relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-lg" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 group-hover:border-white/40 rounded-2xl p-8 hover:scale-105 transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 mb-4 group-hover:scale-125 transition-transform duration-300 inline-block shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="font-bold text-white text-xl mb-2 drop-shadow-md">Regular Audits</h3>
                <p className="text-white/80 font-semibold drop-shadow-md">Third-party security audits and compliance checks</p>
              </div>
            </div>

            <div className="group text-center relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-lg" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 group-hover:border-white/40 rounded-2xl p-8 hover:scale-105 transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 mb-4 group-hover:scale-125 transition-transform duration-300 inline-block shadow-lg">
                  <Shield className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="font-bold text-white text-xl mb-2 drop-shadow-md">Data Privacy</h3>
                <p className="text-white/80 font-semibold drop-shadow-md">COPPA, FERPA, and GDPR compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;