import { useTranslation } from "react-i18next";
import { Briefcase, MapPin, ArrowRight, Sparkles, Users, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Career = () => {
  const { t } = useTranslation();
  const benefits = [
    { icon: Sparkles, titleKey: "career.meaningfulWork", descKey: "career.meaningfulWorkDesc" },
    { icon: Users, titleKey: "career.collaborativeTeam", descKey: "career.collaborativeTeamDesc" },
    { icon: Globe, titleKey: "career.flexibleRemote", descKey: "career.flexibleRemoteDesc" },
    { icon: Zap, titleKey: "career.growthLearning", descKey: "career.growthLearningDesc" },
  ];

  const openRoles = [
    { titleKey: "career.role1Title", locationKey: "career.remote", typeKey: "career.fullTime", summaryKey: "career.role1Summary" },
    { titleKey: "career.role2Title", locationKey: "career.remote", typeKey: "career.fullTime", summaryKey: "career.role2Summary" },
    { titleKey: "career.role3Title", locationKey: "career.remoteHybrid", typeKey: "career.fullTime", summaryKey: "career.role3Summary" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1128] via-[#111a35] to-[#0a1128] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-teal-500/10 blur-2xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px] opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-12 sm:mb-14">
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 hover:bg-white/10 transition-colors duration-300">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-200 mb-5">
              <Sparkles className="w-4 h-4" />
              Career Opportunities
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {t("career.title")}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {t("career.intro")}
            </p>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/15 to-cyan-500/10 p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{t("career.openPositions")}</h2>
            <div className="space-y-3">
              {openRoles.map((role, index) => (
                <div key={index} className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                  <h3 className="font-bold text-white text-sm sm:text-base mb-2">{t(role.titleKey)}</h3>
                  <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-200">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {t(role.locationKey)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {t(role.typeKey)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-10">{t("career.openPositions")}</h2>
          <div className="space-y-4">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 hover:border-cyan-300/30 transition-colors duration-300 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg sm:text-xl mb-2">{t(role.titleKey)}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-200 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {t(role.locationKey)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {t(role.typeKey)}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{t(role.summaryKey)}</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-500/10 text-cyan-200 px-4 py-2 font-semibold text-sm hover:bg-cyan-500/20 transition-colors duration-300 shrink-0"
                >
                  {t("career.applyNow")} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-10">{t("career.whyJoin")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 hover:border-teal-300/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base sm:text-lg">{t(item.titleKey)}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{t(item.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-teal-500/15 via-cyan-500/10 to-blue-500/15 p-6 sm:p-8 lg:p-10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)] pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t("career.dontSeeFit")}
            </h2>
            <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              {t("career.dontSeeFitDesc")}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md shadow-cyan-500/20 transition-colors duration-300 hover:from-teal-400 hover:to-cyan-400"
            >
              {t("career.contactUs")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
