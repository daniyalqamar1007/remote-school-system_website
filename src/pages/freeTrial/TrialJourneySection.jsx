import React from "react";
import { useTranslation } from "react-i18next";
import { Calendar, Zap, Headphones, ThumbsUp } from "lucide-react";

const JourneyStep = ({ day, icon: Icon, title, description }) => {
  return (
    <div className="bg-blue-accent-5 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
        Day {day}
      </div>
      <div className="flex items-start gap-4">
        <div>
          <h3 className="font-bold text-dark-1 text-base mb-2">{title}</h3>
          <p className="text-sm text-dark-2 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="inline-flex w-16 h-16 bg-blue-100 rounded-full items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="font-bold text-dark-1 text-base mb-2">{title}</h3>
      <p className="text-sm text-dark-2 leading-relaxed">{description}</p>
    </div>
  );
};

const TrialJourneySection = () => {
  const { t } = useTranslation();
  const journeySteps = [
    { day: "1", icon: Calendar, titleKey: "freeTrial.day1", descKey: "freeTrial.day1Desc" },
    { day: "2-7", icon: Calendar, titleKey: "freeTrial.day2", descKey: "freeTrial.day2Desc" },
    { day: "8-21", icon: Calendar, titleKey: "freeTrial.day3", descKey: "freeTrial.day3Desc" },
    { day: "22-30", icon: Calendar, titleKey: "freeTrial.day4", descKey: "freeTrial.day4Desc" },
  ];
  const infoCards = [
    { icon: Zap, titleKey: "freeTrial.quickSetup", descKey: "freeTrial.quickSetupDesc" },
    { icon: Headphones, titleKey: "freeTrial.dedicatedSupport", descKey: "freeTrial.dedicatedSupportDesc" },
    { icon: ThumbsUp, titleKey: "freeTrial.noObligations", descKey: "freeTrial.noObligationsDesc" },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Icon */}
        <div className="text-center mb-12">
          <div className="inline-flex w-16 h-16 items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-1 mb-3">
            {t("freeTrial.journeyTitle")}
          </h2>
          <p className="text-sm sm:text-base text-dark-2">
            {t("freeTrial.journeySubtitle")}
          </p>
        </div>

        {/* Journey Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {journeySteps.map((step, index) => (
            <JourneyStep
              key={index}
              day={step.day}
              icon={step.icon}
              title={t(step.titleKey)}
              description={t(step.descKey)}
            />
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={t(card.titleKey)}
              description={t(card.descKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrialJourneySection;
