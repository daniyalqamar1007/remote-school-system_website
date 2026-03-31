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
    <section className="bg-neutral-4 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-1 mb-4">
            {t("career.title")}
          </h1>
          <p className="text-base sm:text-lg text-dark-2 max-w-3xl mx-auto">
            {t("career.intro")}
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-dark-1 text-center mb-10">{t("career.whyJoin")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-2"
                >
                  <Icon className="w-10 h-10 text-purple-accent-1 mb-4" />
                  <h3 className="font-bold text-dark-1 mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-dark-2">{t(item.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-dark-1 text-center mb-10">{t("career.openPositions")}</h2>
          <div className="space-y-4">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-neutral-2 hover:border-purple-accent-1/30 transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-dark-1 text-lg mb-2">{t(role.titleKey)}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-dark-2 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {t(role.locationKey)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {t(role.typeKey)}
                    </span>
                  </div>
                  <p className="text-sm text-dark-2">{t(role.summaryKey)}</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-purple-accent-1 font-semibold text-sm hover:underline shrink-0"
                >
                  {t("career.applyNow")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-md border border-neutral-2 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-dark-1 mb-4">
            {t("career.dontSeeFit")}
          </h2>
          <p className="text-dark-2 max-w-2xl mx-auto mb-6">
            {t("career.dontSeeFitDesc")}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-perli-gradient hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all shadow-md"
          >
            {t("career.contactUs")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Career;
