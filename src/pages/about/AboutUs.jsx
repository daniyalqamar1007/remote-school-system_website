import { useTranslation } from "react-i18next";
import { Target, Eye, Heart, Users, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: Heart,
      titleKey: "about.studentCentered",
      descKey: "about.studentCenteredDesc",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: BookOpen,
      titleKey: "about.excellence",
      descKey: "about.excellenceDesc",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      titleKey: "about.partnership",
      descKey: "about.partnershipDesc",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      icon: Award,
      titleKey: "about.integrity",
      descKey: "about.integrityDesc",
      gradient: "from-violet-500 to-indigo-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1128] via-[#111a35] to-[#0a1128] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-20 h-72 w-72 rounded-full bg-teal-500/10 blur-2xl" />
        <div className="absolute bottom-0 -right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px] opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12 sm:mb-14">
          <div className="lg:col-span-7 group relative rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 hover:bg-white/10 hover:border-cyan-300/30 transition-colors duration-300">
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-200 mb-5">
                <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                About Remote School System
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                {t("about.title")}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-medium">
                {t("about.intro")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 sm:p-5 hover:bg-slate-900/60 hover:border-teal-300/30 transition-colors duration-300">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2 text-base sm:text-lg">{t("about.mission")}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{t("about.missionDesc")}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 sm:p-5 hover:bg-slate-900/60 hover:border-cyan-300/30 transition-colors duration-300">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2 text-base sm:text-lg">{t("about.vision")}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{t("about.visionDesc")}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-14">
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:border-cyan-300/30 transition-colors duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("about.ourStory")}</h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{t("about.storyP1")}</p>
          </div>
          <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 sm:p-8 hover:border-teal-300/30 transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Story Continued</h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{t("about.storyP2")}</p>
          </div>
        </div>

        <div className="mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-10">{t("about.ourValues")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 hover:border-cyan-300/30 hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-cyan-500/15 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${item.gradient} shadow-lg`}>
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
              {t("about.trustedBySchools")}
            </h2>
            <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              {t("about.trustedDesc")}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md shadow-cyan-500/20 transition-colors duration-300 hover:from-teal-400 hover:to-cyan-400"
            >
              {t("about.getInTouch")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
