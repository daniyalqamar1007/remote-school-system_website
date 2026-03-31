import React from "react";
import { useTranslation } from "react-i18next";

const FAQItem = ({ question, answer }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-dark-1 text-base mb-2">{question}</h3>
      <p className="text-sm text-dark-2 leading-relaxed">{answer}</p>
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
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-1 mb-3">
            {t("freeTrial.trialFaqTitle")}
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div>
            {leftFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={t(faq.questionKey)}
                answer={t(faq.answerKey)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div>
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
