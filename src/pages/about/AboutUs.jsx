import { useTranslation } from "react-i18next";
import { Target, Eye, Heart, Users, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { t } = useTranslation();
  const values = [
    { icon: Heart, titleKey: "about.studentCentered", descKey: "about.studentCenteredDesc" },
    { icon: BookOpen, titleKey: "about.excellence", descKey: "about.excellenceDesc" },
    { icon: Users, titleKey: "about.partnership", descKey: "about.partnershipDesc" },
    { icon: Award, titleKey: "about.integrity", descKey: "about.integrityDesc" },
  ];

  return (
    <section className="bg-neutral-4 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-1 mb-4">
            {t("about.title")}
          </h1>
          <p className="text-base sm:text-lg text-dark-2 max-w-3xl mx-auto">
            {t("about.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold text-dark-1 mb-4">{t("about.ourStory")}</h2>
            <p className="text-dark-2 mb-4">{t("about.storyP1")}</p>
            <p className="text-dark-2">{t("about.storyP2")}</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md border border-neutral-2">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Target className="w-8 h-8 text-purple-accent-1 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-1 mb-1">{t("about.mission")}</h3>
                  <p className="text-sm text-dark-2">{t("about.missionDesc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="w-8 h-8 text-blue-accent-1 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-1 mb-1">{t("about.vision")}</h3>
                  <p className="text-sm text-dark-2">{t("about.visionDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-dark-1 text-center mb-10">{t("about.ourValues")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => {
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

        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-md border border-neutral-2 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-dark-1 mb-4">
            {t("about.trustedBySchools")}
          </h2>
          <p className="text-dark-2 max-w-2xl mx-auto mb-6">
            {t("about.trustedDesc")}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-perli-gradient hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all shadow-md"
          >
            {t("about.getInTouch")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
