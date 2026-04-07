import React from "react";
import { useTranslation } from "react-i18next";
import { Calendar, Zap, Headphones, ThumbsUp } from "lucide-react";

const JourneyStep = ({ day, icon: Icon, title, description }) => {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 hover:border-cyan-300/30 transition-colors duration-300">
      <div className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
        Day {day}
      </div>
      <div className="flex items-start gap-3">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 border border-cyan-300/30">
          <Icon className="w-4 h-4 text-cyan-200" />
        </div>
        <div>
          <h3 className="font-bold text-white text-base mb-2">{title}</h3>
          <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center hover:border-teal-300/30 transition-colors duration-300">
      <div className="inline-flex w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full items-center justify-center mb-4 shadow-md">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-bold text-white text-base mb-2">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1128] via-[#121d3e] to-[#0a1128] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-2xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="inline-flex w-12 h-12 items-center justify-center mb-4 rounded-xl bg-cyan-500/15 border border-cyan-300/30">
              <Calendar className="w-6 h-6 text-cyan-200" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
              {t("freeTrial.journeyTitle")}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {t("freeTrial.journeySubtitle")}
            </p>

            <div className="space-y-3">
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

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4 sm:gap-5">
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
        </div>
      </div>
    </section>
  );
};

export default TrialJourneySection;
