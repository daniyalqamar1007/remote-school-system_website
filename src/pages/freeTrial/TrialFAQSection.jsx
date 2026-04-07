import React from "react";
import { useTranslation } from "react-i18next";
import { HelpCircle } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 hover:border-cyan-300/30 transition-colors duration-300">
      <h3 className="font-semibold text-white text-base mb-2">{question}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">{answer}</p>
    </div>
  );
};

const TrialFAQSection = () => {
  const { t } = useTranslation();
  const leftFAQs = [
    { questionKey: "freeTrial.trialFaqQ1", answerKey: "freeTrial.trialFaqA1" },
    { questionKey: "freeTrial.trialFaqQ2", answerKey: "freeTrial.trialFaqA2" },
  ];
  const rightFAQs = [
    { questionKey: "freeTrial.trialFaqQ3", answerKey: "freeTrial.trialFaqA3" },
    { questionKey: "freeTrial.trialFaqQ4", answerKey: "freeTrial.trialFaqA4" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#081127] via-[#0f1a39] to-[#0a1128] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal-500/10 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-200 mb-4">
            <HelpCircle className="w-4 h-4" />
            Trial Help
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
            {t("freeTrial.trialFaqTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          <div className="space-y-4 sm:space-y-5">
            {leftFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={t(faq.questionKey)}
                answer={t(faq.answerKey)}
              />
            ))}
          </div>

          <div className="space-y-4 sm:space-y-5">
            {rightFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={t(faq.questionKey)}
                answer={t(faq.answerKey)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialFAQSection;
